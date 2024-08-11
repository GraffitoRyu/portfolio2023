"use client";

import { useCallback, useEffect } from "react";

/**
 * 바깥 클릭으로 열림 요소 닫기 Hook
 * @hook
 * @param {HTMLElement | null} closeElement 열림/닫힘 요소
 * @param {boolean} isOpen 열림 상태
 * @param {Function} setOpen 열림/닫힘 상태 업데이트
 */
export default function useCloseByClickOutside(
  closeElement: HTMLElement | null,
  isOpen: boolean,
  setOpen: () => void,
) {
  /**
   * 닫기 이벤트 실행
   * @param {PointerEvent | MouseEvent | TouchEvent} e 클릭 이벤트 인스턴스
   */
  const closeEvent = useCallback(
    (e: PointerEvent | MouseEvent | TouchEvent) => {
      // 열려있지 않으면 이벤트 취소
      if (!isOpen) return;

      // 핸들링 요소가 유효하지 않으면 이벤트 취소
      const isValidElements =
        e.target instanceof Element &&
        closeElement !== null &&
        closeElement instanceof Element;

      if (!isValidElements) return;

      // 바깥 클릭 시, 열림 요소 닫기
      const isClickOutside = closeElement.contains(e.target);

      // 열림 상태 업데이트
      if (!isClickOutside) setOpen();
    },
    [closeElement, isOpen, setOpen],
  );

  useEffect(() => {
    if (!closeElement) return;

    // 클릭 이벤트 바인딩
    document.addEventListener("click", closeEvent);
    return () => document.removeEventListener("click", closeEvent);
  }, [closeElement, closeEvent]);

  return null;
}
