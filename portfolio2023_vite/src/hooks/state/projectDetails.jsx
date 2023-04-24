import { atom } from "recoil";

export const detailsState = atom({
  key: "projectsDetailsState",
  default: {
    open: false,
    category: undefined,
  },
});
