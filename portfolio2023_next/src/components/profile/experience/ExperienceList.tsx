"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRecoilValue } from "recoil";

// state
import { scrollRefState } from "@/states/scroll";

// types
import { ScrollRefStateTypes } from "@/types/state";

// style components
import { ExpList } from "@/styles/styled/components/ProfileExperience";

// util
import { ctxScrollTrigger } from "@/util/presetScrollTrigger";
import { ExperienceTypes } from "@/types/profile";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceList({ data }: { data: ExperienceTypes[] }) {
  const [expData, setExpData] = useState<ExperienceTypes[]>([]);
  const [length, setLength] = useState<number>(0);

  const {
    container: scrollContainer,
    experience: scrollTrigger,
    stickyHeight,
  } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);
  const expListRef = useRef<HTMLUListElement | null>(null);

  // const [activeIndex, setActiveIndex] = useState<number>(0);
  const [listWidth, setListWidth] = useState<number>(0);

  const updateListWidth = useCallback(() => {
    if (expListRef.current) setListWidth(expListRef.current.offsetWidth);
  }, []);

  // const updateActiveIndex = useCallback(
  //   ({ progress }: { progress: number }, ratioUnit: number) => {
  //     console.log(`progress:`, progress);
  //     console.log(`ratioUnit:`, ratioUnit);
  //     if (progress < ratioUnit) setActiveIndex(0);
  //     if (ratioUnit * 1 <= progress && progress < ratioUnit * 2)
  //       setActiveIndex(1);
  //     if (ratioUnit * 2 <= progress && progress < ratioUnit * 3)
  //       setActiveIndex(2);
  //     if (ratioUnit * 3 <= progress && progress < ratioUnit * 4)
  //       setActiveIndex(3);
  //     if (ratioUnit * 4 <= progress) setActiveIndex(4);
  //   },
  //   []
  // );

  useLayoutEffect(() => {
    if (data?.length > 0) {
      setExpData(data);
      setLength(data.length);
    }
  }, [data]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    updateListWidth();

    window.addEventListener("resize", updateListWidth);
    return () => window.removeEventListener("resize", updateListWidth);
  }, [updateListWidth]);

  useEffect(() => {
    if (!scrollContainer || !scrollTrigger) return;

    const scrollTarget = expListRef.current;
    if (!scrollTarget) return;

    // const widthRatio = 1 / length;
    const scrollRange = listWidth * ((length - 1) / length);

    const ctx = ctxScrollTrigger({
      container: scrollContainer,
      tweenArr: [
        {
          direction: "fromTo",
          target: scrollTarget,
          options: [
            { x: 0 },
            {
              x: -scrollRange,
              ease: "none",
              scrollTrigger: {
                trigger: scrollTrigger,
                start: `top top`, // trigger, view
                end: () => `+=${scrollRange}`,
                scrub: true,
                pin: scrollTrigger,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // onUpdate: self => {
                //   updateActiveIndex(self.progress, widthRatio);
                // },
              },
            },
          ],
        },
      ],
    });

    console.log(ctx);

    return () => ctx?.revert();
  }, [length, listWidth, scrollContainer, scrollTrigger, stickyHeight]);

  return (
    <ExpList ref={expListRef} $length={expData.length}>
      {expData.map((ex: ExperienceTypes, i: number) => (
        <ExperienceItem
          key={`exp_${ex.code}_${i}`}
          // className={activeIndex === i ? "on" : ""}
          {...ex}
          $totalLength={expData.length}
        />
      ))}
    </ExpList>
  );
}
