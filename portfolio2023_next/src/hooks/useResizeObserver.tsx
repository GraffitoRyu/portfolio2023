import { useLayoutEffect, useRef } from "react";
import debounce from "@/util/debounceEvent";

function useResizeObserver<T extends HTMLElement>(
  callback: (target: T | null, entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref?.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => {
        callback(element, entries[0]);
      }, 400)
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [callback, ref]);

  return ref;
}

export default useResizeObserver;
