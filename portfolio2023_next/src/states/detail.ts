import { atom } from "recoil";

// types
import { DetailTypes } from "@/types/projectDetails";

export const detailData = atom<DetailTypes>({
  key: "projectDetailData",
  default: {},
});
