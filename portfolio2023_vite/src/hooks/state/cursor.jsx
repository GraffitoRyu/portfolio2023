import { atom } from "recoil";

export const cursor = atom({
  key: "cursor/position",
  default: {
    x: 0,
    y: 0,
    hover: undefined,
  },
});
