"use client";

import { useCallback, useState } from "react";

/**
 * 마우스오버 상태관리
 * @hook
 * @return state, onHover, hoverHandler
 */
export default function useHover<ElementType extends HTMLElement>() {
  const [hoverState, setHoverState] = useState<boolean>(false);

  const onHover = useCallback(
    (updateState: boolean) => {
      if (hoverState !== updateState) setHoverState(updateState);
    },
    [hoverState],
  );

  const hoverHandler = useCallback(
    (): React.DOMAttributes<ElementType> => ({
      onMouseEnter: () => onHover(true),
      onMouseLeave: () => onHover(false),
    }),
    [onHover],
  );

  return { state: hoverState, onHover, hoverHandler };
}
