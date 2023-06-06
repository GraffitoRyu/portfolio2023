"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// style components
import {
  VisualContainer,
  VisualTitle,
  VisualTitleLine,
} from "@/styles/styled/components/PageVisual";

export default function PageVisual({ title }: { title: string[] }) {
  const visualRef = useRef<HTMLDivElement>(null);
  const visualTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: visualRef.current,
          scrub: true,
          // pin: true,
          start: "top top",
          end: "bottom bottom",
          markers: true,
          onUpdate: self => {
            console.log(self);
          },
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, [visualRef, visualTitleRef]);

  return (
    <VisualContainer ref={visualRef}>
      <VisualTitle ref={visualTitleRef}>
        {title.map((t: string) => (
          <VisualTitleLine
            key={`visualTitle_${Math.floor(Math.random() * 1000)}_${t}`}
          >
            {t}
          </VisualTitleLine>
        ))}
      </VisualTitle>
    </VisualContainer>
  );
}
