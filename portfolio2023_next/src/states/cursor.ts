import { CursorTypes } from "@/types/state";
import { atom } from "recoil";

export const cursorState = atom<CursorTypes>({
  key: "cursorState",
  default: {
    x: 0,
    y: 0,
    hover: "",
  },
});
