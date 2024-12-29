import { atom } from "recoil";

export const footerState = atom({
  key: "footerState",
  default: {
    offset: {
      profile: 4000,
      projects: 4000,
    },
  },
});
