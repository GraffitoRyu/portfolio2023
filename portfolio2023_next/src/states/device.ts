import { atom } from "recoil";
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
