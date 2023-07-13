"use client";

import { useParams } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// style components
import {
  PDExpContainer,
  PDExpDesc,
  PDExpList,
  PDExpSection,
  PDExpTitle,
} from "@/styles/styled/components/ProjectDetail";

// state
import { detailData } from "@/states/detail";
import { screenSizeState } from "@/states/screen";
import { detailScrollRefState } from "@/states/scroll";

// type
import { CustomTweenType } from "@/types/hooks";
import { DetailTypes } from "@/types/projectDetails";
import { DetailScrollRefStateTypes, ScreenSizeTypes } from "@/types/state";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";

export default function DetailExperience() {
  const { windowHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);

  const { container: scrollContainer, scrollHeight } =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLLIElement[]>([]);

  const { category } = useParams();
  const data = useRecoilValue<DetailTypes>(detailData);
  const [expData, setExpData] = useState<string[]>([]);

  useLayoutEffect(() => {
    if (category && data[category]) {
      const expDesc = data[category]?.experience?.desc;
      if (expDesc && expDesc.length > 0) setExpData(expDesc);
      else setExpData([]);
    }
  }, [category, data]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if (!scrollContainer) return;

    const scrollTitle = titleRef.current;
    if (!scrollTitle) return;

    const tweenOptions = [
      {
        target: scrollTitle,
        direction: "fromTo",
        options: [
          { opacity: 0, xPercent: 40 },
          {
            opacity: 1,
            xPercent: 0,
            // duration: 1.6,
            // ease: Expo.easeOut,
            scrollTrigger: {
              trigger: scrollTitle,
              start: `top 90%`,
              end: `bottom 50%`,
              scrub: true,
            },
          },
        ],
      },
    ];

    const scrollDesc = descRef.current;
    const descOptions: CustomTweenType[] = [];
    if (scrollDesc?.length > 0) {
      scrollDesc.forEach(descRef =>
        descOptions.push({
          target: descRef,
          options: [
            {
              opacity: 1,
              scrollTrigger: {
                trigger: descRef,
                start: `top 80%`,
                end: `bottom 50%`,
                scrub: true,
              },
            },
          ],
        })
      );
    }

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [...tweenOptions, ...descOptions],
    });

    return () => ctx.revert();
  }, [scrollContainer, scrollHeight]);

  return (
    <PDExpSection className="detail-section-exp" $wh={windowHeight}>
      <PDExpContainer>
        <PDExpTitle ref={titleRef}>
          <span>Experience</span>
        </PDExpTitle>
        <PDExpList>
          {expData?.map((exp: string, i: number) => (
            <PDExpDesc
              key={`detailExp_${category}_${i}`}
              ref={(node: HTMLLIElement) => {
                descRef.current[i] = node;
              }}
            >
              <span>{exp}</span>
            </PDExpDesc>
          ))}
        </PDExpList>
      </PDExpContainer>
    </PDExpSection>
  );
}
