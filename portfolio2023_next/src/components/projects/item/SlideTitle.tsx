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
  className?: string | HTMLAttributes<HTMLDivElement>;
  text: string;
}) {
  const titleArr: string[] = new Array(3).fill(text);
  const slideRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const { current: el } = slideRef;
    if (el) {
      const width: number = (el.children[0] as HTMLElement).offsetWidth;
      setSlideWidth(width);
    }
  }, []);

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
