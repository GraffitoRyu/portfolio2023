import { useCallback, useRef } from "react";
import { useSetRecoilState } from "recoil";

//components
import DetailTitleWrap from "./DetailTitleWrap";

// style components
import { PDVisualCover } from "@/styles/styled/components/ProjectDetail";

// types
import { DetailScrollRefStateTypes } from "@/types/state";

// state
import { detailScrollRefState } from "@/states/scroll";

export default function DetailVisual({
  $windowHeight,
}: {
  $windowHeight: number;
}) {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  // 스크롤 참조 데이터 업데이트
  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      visualRef.current = node;
      setDetailScrollRef(prev => ({ ...prev, visual: node }));
    },
    [setDetailScrollRef]
  );

  return (
    <PDVisualCover ref={setRef} $wh={$windowHeight}>
      <DetailTitleWrap />
    </PDVisualCover>
  );
}
