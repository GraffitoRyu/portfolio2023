"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSetAtom } from "jotai";

import { modalState, modalDraggableState } from "@chickenmonger/ui/modal";

/**
 * 경로변경 이벤트 감지
 * @component
 * @desc
 * - 최상위 layout에서, 경로 변경을 감지
 */
export default function RouterEventDetector() {
  const resetModalStack = useSetAtom(modalState);
  const resetDraggableModalStack = useSetAtom(modalDraggableState);

  const pathname = usePathname();

  // 경로 변경 감지
  useEffect(() => {
    // 모달 스택 초기화
    resetModalStack([]);
    // 드래거블 모달 스택 초기화
    resetDraggableModalStack([]);
  }, [pathname, resetDraggableModalStack, resetModalStack]);

  return null;
}
