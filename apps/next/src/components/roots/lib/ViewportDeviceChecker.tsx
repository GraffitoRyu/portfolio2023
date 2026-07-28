"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { breakpoints } from "@graffitoryu/ui";
import { useAtom, useSetAtom } from "jotai";

// hook
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// state
import {
  isAppleDeviceState,
  responsiveDeviceState,
  viewportOrientationState,
  viewportState,
} from "@/jotai/viewport.state";

// util
import { remToPx } from "@/utils/style.util";

/**
 * Root/Library; 접속 환경관련 상태 업데이트
 * @component
 * @desc
 * - 애플기기 접속 여부
 * - 화면방향 상태; portrait, landscape
 * - 접속 디바이스 타입; desktop, tablet, mobile
 * - 접속 디바이스 타입의 구분; hardware(물리적 기기) / viewport(화면사이즈)
 */
export default function ViewportDeviceChecker() {
  // 현재 해당하는 breakpoint 상태 업데이트
  const [responsiveDevice, setResponsiveDevice] = useAtom(
    responsiveDeviceState,
  );

  // 현재 화면 방향 상태 업데이트
  const [viewportOrientation, setViewportOrientation] = useAtom(
    viewportOrientationState,
  );

  // 현재 접속 기기가 애플기기인지의 여부
  const [isAppleDevice, setIsAppleDevice] = useAtom(isAppleDeviceState);

  // 접속 기기가 애플인지 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isAppleValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)X-Apple-Device\s*=\s*([^;]*).*$)|^.*$/,
      "$1",
    );
    const isApple = isAppleValue === "true";

    if (isAppleDevice !== isApple) {
      // HTML 속성 업데이트
      const htmlAttr = document.documentElement.getAttribute("is-apple") || "";
      if (isAppleValue !== htmlAttr) {
        document.documentElement.setAttribute("is-apple", isAppleValue);
      }
      setIsAppleDevice(isApple);
    }
  }, [isAppleDevice, setIsAppleDevice]);

  // 화면 방향 상태 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;
    const orientation = window.matchMedia("(orientation: portrait)").matches
      ? "portrait"
      : "landscape";
    if (viewportOrientation !== orientation)
      setViewportOrientation(orientation);
  }, [setViewportOrientation, viewportOrientation]);

  // 하드웨어 디바이스 타입 감지
  const hardware = useMemo(
    (): BreakPointType =>
      typeof window === "undefined"
        ? "desktop"
        : ((document.cookie.replace(
            /(?:(?:^|.*;\s*)X-Responsive-Device\s*=\s*([^;]*).*$)|^.*$/,
            "$1",
          ) || "desktop") as BreakPointType),
    [],
  );

  // 하드웨어 디바이스 타입 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (responsiveDevice.hardware !== hardware)
      setResponsiveDevice(prev => ({
        ...prev,
        hardware,
      }));
  }, [hardware, responsiveDevice.hardware, setResponsiveDevice]);

  // 뷰포트 디바이스 모드 타입 감지
  const [viewport, setViewport] = useState<BreakPointType>("desktop");

  // 화면 사이즈 상태관리
  const setViewportSize = useSetAtom(viewportState);

  /**
   * 화면사이즈에 따른 접속디바이스 모드 추출
   * @param {number} width 화면 사이즈
   * @return {BreakPointType} "desktop", "tablet", "mobile"
   */
  const checkViewport = useCallback(
    (width: number): BreakPointType => {
      // 기본값 desktop
      if (typeof window === "undefined") return "desktop";

      // 물리 디바이스가 desktop인 경우
      if (hardware === "desktop") {
        // 브라우저 창 사이즈에 따라 viewport 모드 추출
        if (width >= breakpoints.viewportMode.desktop) return "desktop";
        else if (
          width < breakpoints.viewportMode.desktop &&
          width >= breakpoints.viewportMode.tablet
        )
          return "tablet";
        return "mobile";
      }

      // 물리 디바이스가 tablet인 경우
      if (hardware === "tablet" && width < breakpoints.viewportMode.tablet)
        return "mobile";

      return hardware;
    },
    [hardware],
  );

  /**
   * 화면 리사이즈에 따른 전역 상태 업데이트 콜백
   * @param {ResizeObserverCallbackPropsType}
   */
  const updateViewportInfo = useCallback(
    ({ width, height }: ResizeObserverCallbackPropsType) => {
      // viewport 화면모드 업데이트
      const updateViewport = checkViewport(width);
      if (viewport !== updateViewport) setViewport(updateViewport);

      // width
      const w = width ? width : window.innerWidth || 0;
      // height
      const h = height ? height : window.innerHeight || 0;
      // padding
      const p = {
        section: remToPx(80),
        column: remToPx(20),
      };

      // CSS Props 업데이트
      const htmlEl = document.documentElement;
      htmlEl.style.setProperty(`--ww`, w ? `${w}px` : "100%");
      htmlEl.style.setProperty(`--wh`, h ? `${h}px` : "100%");

      // viewport attr 업데이트
      const attr = htmlEl.getAttribute("viewport-device");
      if (viewport !== attr) htmlEl.setAttribute("viewport-device", viewport);

      // 화면 사이즈 상태관리
      setViewportSize(prev => ({
        ...prev,
        windowWidth: w,
        windowHeight: h,
        columnWidth: (w - p.section * 2 - p.column * 2) / 12,
      }));
    },
    [checkViewport, setViewportSize, viewport],
  );

  // 화면 리사이즈 감지
  useResizeObserver({
    delay: 50,
    callback: updateViewportInfo,
  });

  // 뷰포트 디바이스 모드 타입 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (responsiveDevice.viewport !== viewport)
      setResponsiveDevice(prev => ({
        ...prev,
        viewport,
      }));
  }, [responsiveDevice.viewport, setResponsiveDevice, viewport]);

  return null;
}
