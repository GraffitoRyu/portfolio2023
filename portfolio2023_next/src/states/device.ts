import { atom } from "recoil";
import { checkDevice } from "@/util/checkDevice";
import { DeviceTypes } from "@/types/state";

export const deviceState = atom<DeviceTypes>({
  key: "deviceState",
  default: {
    apple: checkDevice.apple(), // iOS, iPadOS, MacOS
    mobile: checkDevice.mobile(), // mobile & tablet
    tablet: checkDevice.tablet(), // tablet only
    orientation: checkDevice.orientation(), // portrait | landscape
  },
});
