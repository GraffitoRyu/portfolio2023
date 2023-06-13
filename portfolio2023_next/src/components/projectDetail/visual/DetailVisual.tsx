import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

//components
import DetailTitleWrap from "./TitleWrap";

// style components
import { PDVisualCover } from "@/styles/styled/components/ProjectDetail";

// types
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";

// state
import { detailScrollRefState } from "@/states/scroll";
import { detailLayoutState } from "@/states/detail";

export default function DetailVisual() {
  const { open } = useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);

  const visualRef = useRef<HTMLDivElement | null>(null);
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  useEffect(() => {
    if (visualRef.current) {
      setDetailScrollRef(prev => ({ ...prev, visual: visualRef }));
    }
  }, [setDetailScrollRef, visualRef]);

  // 페이지 이동 시, 참조 데이터 초기화
  useEffect(() => {
    if (!open) {
      return () => {
        setDetailScrollRef(prev => ({ ...prev, visual: null }));
      };
    }
  }, [open, setDetailScrollRef]);

  return (
    <PDVisualCover ref={visualRef}>
      <DetailTitleWrap />
    </PDVisualCover>
  );
}
