import { HTMLAttributes, useEffect, useRef, useState } from "react";

// components
import {
  HoverSlideTitle,
  TitleSpan,
} from "@/styles/styled/components/ProjectList";

export default function SlideTitle({
  className,
  text,
}: {
  className?: string | HTMLAttributes<HTMLElement>;
  text: string[];
}) {
  const titleArr: string[] = new Array(3).fill(text.join(" "));
  const slideRef = useRef<HTMLHeadingElement | null>(null);

  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const el: HTMLHeadingElement | null = slideRef.current;
    if (el) {
      const width: number = (el.children[0] as HTMLSpanElement).offsetWidth;
      setSlideWidth(width);
    }
  }, [slideRef]);

  useEffect(() => {
    setDuration((slideWidth / 1000) * 3.2);
  }, [slideWidth]);

  return (
    <HoverSlideTitle className={`${className ? className : ""}`} ref={slideRef}>
      {titleArr.map((title: string, i: number) => (
        <TitleSpan
          key={`projectSlideTitle_${Math.floor(Math.random() * 100000)}_${i}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {title}
        </TitleSpan>
      ))}
    </HoverSlideTitle>
  );
}
