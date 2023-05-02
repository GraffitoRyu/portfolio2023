import { atom } from "recoil";

export const detailsState = atom({
  key: "projectsDetailsState",
  default: {
    open: false,
    openDuration: 400,
    openComplete: false,
    category: undefined,
    imgLoaded: false,
  },
});
