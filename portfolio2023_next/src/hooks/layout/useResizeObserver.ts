"use client";

import { useCallback, useEffect, useState } from "react";
import useDebounce from "../util/useDebounce";

/**
 * 화면크기 변경 감지 hook
 * @hook
 * @param {object} props
 * @param {HTMLElement | null} [props.element] 감지 기준 요소 element (기본값 <html />)
 * @param {React.RefObject<HTMLElement | null>} [props.ref] 감지 기준 요소 ref (기본값 <html />)
 * @param {number} [props.delay] 지연시간 (ms, 기본값 400)
 * @param {boolean} [props.notDebounce] 디바운스 적용 여부
 * @param {Function} [props.callback] ({ width, height }) => void
 * @return {ResizeObserverCallbackPropsType} { width, height }
 */
export default function useResizeObserver<T extends HTMLElement>({
  element,
  ref,
  delay,
  notDebounce,
  callback,
}: Partial<{
  element: T | null;
  ref: React.RefObject<T | null>;
  delay: number;
  notDebounce: boolean;
  callback: ({ width, height }: ResizeObserverCallbackPropsType) => void;
}>): ResizeObserverCallbackPropsType {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const onResizeObserve = useCallback(
    (entries: ResizeObserverEntry[]) => {
      const el = entries[0].target;
      if (typeof el === "undefined") return;

      setWidth(el.clientWidth);
      setHeight(el.clientHeight);

      if (typeof callback !== "undefined")
        callback({ width: el.clientWidth, height: el.clientHeight });
    },
    [callback],
  );

  const onDebounceResizeObserve = useDebounce(onResizeObserve, delay);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // ref 없으면 윈도우 사이즈 모니터링
    // ref가 존재하면, 특정 요소의 사이즈 모니터링
    const targetElement =
      !ref?.current || !(ref.current instanceof Element)
        ? element
          ? element
          : window.document.documentElement
        : ref.current;

    const observer = new ResizeObserver(
      notDebounce ? onResizeObserve : onDebounceResizeObserve,
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [element, notDebounce, onDebounceResizeObserve, onResizeObserve, ref]);

  return { width, height };
}
