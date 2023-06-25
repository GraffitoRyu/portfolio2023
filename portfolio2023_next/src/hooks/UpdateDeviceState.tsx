"use client";

import { useEffect, useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";

// state
import { deviceState } from "@/states/device";

// util
import debounce from "@/util/debounceEvent";
import { checkDevice } from "@/util/checkDevice";
import { DeviceTypes } from "@/types/state";

export default function UpdateDeviceState() {
  const setDevice = useSetRecoilState<DeviceTypes>(deviceState);

  // 접속 디바이스 업데이트
  const resizeCallback = debounce(() => {
    setDevice(checkDeviceState());
  }, 500);

  // 최초의 디바이스 세팅
  useLayoutEffect(() => {
    setDevice(checkDeviceState());
  }, [setDevice]);

  // 리사이징 후 디바이스 세팅
  useEffect(() => {
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
