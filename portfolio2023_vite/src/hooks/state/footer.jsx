import { atom } from "recoil";

export const footerState = atom({
  key: "footerState",
  default: {
    offset: 4000,
  },
});
