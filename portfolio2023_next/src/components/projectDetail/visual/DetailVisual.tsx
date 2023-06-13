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
import { useSearchParams } from "next/navigation";
import { detailLayoutState } from "@/states/detail";

export default function DetailVisual() {
  const params = useSearchParams();
  const code = params.get("code");
  const { open } = useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);

  const visualRef = useRef<HTMLDivElement | null>(null);
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  useEffect(() => {
    setDetailScrollRef(prev => ({ ...prev, visual: visualRef }));
  }, [setDetailScrollRef, visualRef]);

  // 페이지 이동 시, 참조 데이터 초기화
  useEffect(() => {
    if (!code && !open) {
      return () => {
        setDetailScrollRef(prev => ({ ...prev, visual: null }));
      };
    }
  }, [code, open, setDetailScrollRef]);

  return (
    <PDVisualCover ref={visualRef}>
      <DetailTitleWrap />
    </PDVisualCover>
  );
}
