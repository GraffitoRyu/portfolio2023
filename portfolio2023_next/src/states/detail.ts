import { atom } from "recoil";

// types
import { DetailTypes } from "@/types/projectDetails";
import { DetailLayoutStateTypes } from "@/types/state";

// 프로젝트 상세 데이터 관리
export const detailData = atom<DetailTypes>({
  key: "projectDetailData",
  default: {},
});

export const detailLayoutState = atom<DetailLayoutStateTypes>({
  key: "projectDetailLayoutState",
  default: {
    open: false, // 열림 상태
    openComplete: false,
  },
});
