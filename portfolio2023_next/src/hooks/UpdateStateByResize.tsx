"use client";

import { useEffect, useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";

// types
import { DeviceTypes, ScreenSizeTypes } from "@/types/state";

// state
import { deviceState } from "@/states/device";
import { screenSizeState } from "@/states/screen";

// util
import { remToPx } from "@/util/unit";
import { checkDevice } from "@/util/checkDevice";
import debounce from "@/util/debounceEvent";

export default function UpdateStateByResize() {
  const setDevice = useSetRecoilState<DeviceTypes>(deviceState);
  const setScreen = useSetRecoilState<ScreenSizeTypes>(screenSizeState);

  // resize update
  const updateCssProps = () => {
    if (typeof window === "undefined") return;

    document.documentElement.style.setProperty(
      `--ww`,
      `${window.innerWidth}px`,
    );
    document.documentElement.style.setProperty(
      `--wh`,
      `${window.innerHeight}px`,
    );
  };

  const resizeCallback = debounce(() => {
    if (typeof window === "undefined") return;

    const sectionPadding = remToPx(80);
    const columnPadding = remToPx(20);
    // 접속 디바이스 업데이트
    setDevice(checkDeviceState());
    // 화면 사이즈 값 업데이트
    updateCssProps();
    setScreen(prev => ({
      ...prev,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      columnWidth:
        (window.innerWidth - sectionPadding * 2 - columnPadding * 2) / 12,
    }));
  }, 500);

  // 최초의 디바이스 세팅
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    updateCssProps();

    const sectionPadding = remToPx(80);
    const columnPadding = remToPx(20);

    setDevice(checkDeviceState());
    setScreen(prev => ({
      ...prev,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      columnWidth:
        (window.innerWidth - sectionPadding * 2 - columnPadding * 2) / 12,
    }));
  }, [setDevice, setScreen]);

  // 리사이징 후 디바이스 세팅
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("resize", resizeCallback);
    return () => window.removeEventListener("resize", resizeCallback);
  }, [resizeCallback]);

  return null;
}

function checkDeviceState(): DeviceTypes {
  if (typeof window === "undefined")
    return {
      apple: false,
      mobile: false,
      tablet: false,
      orientation: "landscape",
    };

  const isApple = checkDevice.apple();
  const isMobile = checkDevice.apple();
  const isTablet = checkDevice.apple();

  const rootClassList: DOMTokenList | undefined =
    document.querySelector("html")?.classList;

  if (isApple) rootClassList?.add("apple");
  else rootClassList?.remove("apple");
  if (isMobile) rootClassList?.add("mobile");
  else rootClassList?.remove("mobile");
  if (isTablet) rootClassList?.add("tablet");
  else rootClassList?.remove("tablet");

  return {
    apple: isApple,
    mobile: isMobile,
    tablet: isTablet,
    orientation: checkDevice.orientation(),
  };
}
