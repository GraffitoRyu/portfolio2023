"use client";

import { useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";

// hook
import useResizeObserver from "@/hooks/layout/useResizeObserver";

// state
import {
  isAppleDeviceState,
  responsiveDeviceState,
  viewportOrientationState,
} from "@/jotai/viewport";

/**
 * 접속 환경관련 상태 업데이트
 * @component
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
      (document.cookie.replace(
        /(?:(?:^|.*;\s*)X-Responsive-Device\s*=\s*([^;]*).*$)|^.*$/,
        "$1",
      ) || "desktop") as BreakPointType,
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
  useResizeObserver({
    delay: 10,
    callback: ({ width, height }) => {
      if (typeof window === "undefined") {
        if (viewport !== "desktop") setViewport("desktop");
      }

      if (hardware === "desktop") {
        if (width >= 1280) {
          if (viewport !== "desktop") setViewport("desktop");
        } else if (width < 1280 && width >= 768) {
          if (viewport !== "tablet") setViewport("tablet");
        }

        if (viewport !== "mobile") setViewport("mobile");
      }

      if (hardware === "tablet" && width < 768) {
        if (viewport !== "mobile") setViewport("mobile");
      }

      if (hardware !== viewport) setViewport(hardware);

      // CSS Props 업데이트
      document.documentElement.style.setProperty(`--ww`, `${width}px`);
      document.documentElement.style.setProperty(`--wh`, `${height}px`);
    },
  });

  // 뷰포트 디바이스 모드 타입 업데이트
  useEffect(() => {
    if (typeof window === "undefined") return;

    // HTML 속성 업데이트
    const viewportAttr =
      document.documentElement.getAttribute("viewport-device");
    if (viewport !== viewportAttr) {
      document.documentElement.setAttribute("viewport-device", viewport);
    }

    if (responsiveDevice.viewport !== viewport)
      setResponsiveDevice(prev => ({
        ...prev,
        viewport,
      }));
  }, [responsiveDevice.viewport, setResponsiveDevice, viewport]);

  return null;
}
