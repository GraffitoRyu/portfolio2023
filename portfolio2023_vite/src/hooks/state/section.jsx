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

export const sectionOffsetState = {
  profile: atom({
    key: "profileSectionOffsetState",
    default: [],
  }),
  projects: atom({
    key: "projectsSectionOffsetState",
    default: [],
  }),
};
