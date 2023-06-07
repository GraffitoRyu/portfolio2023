import { atom, selector } from "recoil";
import { checkDevice } from "@/util/checkDevice";
import { DeviceTypes } from "@/types/state";

export const deviceState = atom<DeviceTypes>({
  key: "deviceState",
  default: {
    apple: checkDevice.apple(),
    mobile: checkDevice.mobile(),
    tablet: checkDevice.tablet(),
    orientation: checkDevice.orientation(),
  },
});

export const deviceSelector = selector({
  key: "deviceStateSelector",
  get: ({ get }) => get(deviceState),
  set: ({ set }) => {
    const isApple = checkDevice.apple();
    const isMobile = checkDevice.apple();
    const isTablet = checkDevice.apple();

    const updateState: DeviceTypes = {
      apple: isApple,
      mobile: isMobile,
      tablet: isTablet,
      orientation: checkDevice.orientation(),
    };

    const rootClassList: DOMTokenList | undefined =
      document.querySelector("html")?.classList;

    if (isApple) rootClassList?.add("apple");
    else rootClassList?.remove("apple");
    if (isMobile) rootClassList?.add("mobile");
    else rootClassList?.remove("mobile");
    if (isTablet) rootClassList?.add("tablet");
    else rootClassList?.remove("tablet");

    set(deviceState, updateState);
  },
});
