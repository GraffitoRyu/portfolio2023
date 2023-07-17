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
    clicked: false, // 프로젝트 상세보기 클릭 여부
    category: "", // 상세 아이템
    loading: false, // 로딩 진행바 숨김/보임
    open: false, // 열림 상태
    openComplete: false, // 열림 트랜지션 후 완료
    dataStatus: "",
  },
});
