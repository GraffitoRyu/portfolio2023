// import { checkDevice } from "@/util/cross_browsing/checkDevice";
import { atom } from "jotai";

// export const deviceState = atom<DeviceTypes>({
//   key: "deviceState",
//   default: {
//     apple: checkDevice.apple(), // iOS, iPadOS, MacOS
//     mobile: checkDevice.mobile(), // mobile & tablet
//     tablet: checkDevice.tablet(), // tablet only
//     orientation: checkDevice.orientation(), // portrait | landscape
//   },
// });

export const responsiveDeviceState = atom<ResponsiveDeviceStateType>({
  hardware: "desktop",
  viewport: "desktop",
});

export const isAppleDeviceState = atom<boolean>(false);

export const viewportOrientationState =
  atom<ViewportOrientationStateType>("landscape");
