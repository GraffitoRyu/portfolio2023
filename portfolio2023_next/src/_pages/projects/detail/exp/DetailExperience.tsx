"use client";

import { useParams } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";

// style components
import {
  PDExpContainer,
  PDExpDesc,
  PDExpList,
  PDExpSection,
  PDExpTitle,
} from "@/styles/styled/components/ProjectDetail";

// state
import { scrollDetailRefState } from "@/jotai/interaction/scroll.state";
import { projectDetailDataState } from "@/jotai/pages/project.detail.state";

// util
import { ctxScrollTrigger } from "@/hooks/interaction/presetScrollTrigger";

export default function DetailExperience() {
  const { container: scrollContainer } =
    useAtomValue<DetailScrollRefStateTypes>(scrollDetailRefState);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLLIElement[]>([]);

  const { category } = useParams();
  const data = useAtomValue<DetailDataCollectionTypes>(projectDetailDataState);
  const [expData, setExpData] = useState<string[]>([]);

  useLayoutEffect(() => {
    if (typeof category !== "string" || !data?.[category]) return;

    const expDesc = data[category]?.experience?.desc;
    if (expDesc && expDesc.length > 0) setExpData(expDesc);
    else setExpData([]);
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
          { opacity: 0, xPercent: 20 },
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
        }),
      );
    }

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [...tweenOptions, ...descOptions],
    });

    return () => ctx.revert();
  }, [scrollContainer]);

  return (
    <PDExpSection className="detail-section-exp">
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
