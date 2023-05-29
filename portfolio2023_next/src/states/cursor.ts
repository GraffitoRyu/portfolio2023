import { atom } from "recoil";

export type CursorTypes = {
  x: number;
  y: number;
  hover: string;
};

export const cursorState = atom<CursorTypes>({
  key: "cursorState",
  default: {
    x: 0,
    y: 0,
    hover: "",
  },
});
