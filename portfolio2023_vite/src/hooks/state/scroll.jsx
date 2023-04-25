import { atom } from "recoil";

export const scrollState = atom({
  key: "scrollState",
  default: {
    page: 0,
    details: 0,
  },
});
