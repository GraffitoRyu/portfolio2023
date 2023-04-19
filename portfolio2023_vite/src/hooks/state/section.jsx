import { atom } from "recoil";

export const sectionState = {
  profile: atom({
    key: "profileSectionState",
    default: {},
  }),
  projects: atom({
    key: "projectsSectionState",
    default: {},
  }),
};
