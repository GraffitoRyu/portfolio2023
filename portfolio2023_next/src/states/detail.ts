import { DetailTypes } from "@/types/projects";
import { atom } from "recoil";

export const detailData = atom<DetailTypes>({
  key: "projectDetailData",
  default: {},
});
