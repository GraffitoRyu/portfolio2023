import { atom } from "recoil";

export const pageTransitionState = atom({
  key: "pageTransitionState",
  default: {
    loading: false,
    height: 0,
  },
});
