import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

//components
import DetailTitleWrap from "./TitleWrap";

// style components
import { PDVisualCover } from "@/styles/styled/components/ProjectDetail";

// types
import { DetailScrollRefStateTypes } from "@/types/state";

// state
import { detailScrollRefState } from "@/states/scroll";

export default function DetailVisual() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const setDetailScrollRef =
    useSetRecoilState<DetailScrollRefStateTypes>(detailScrollRefState);

  useEffect(() => {
    setDetailScrollRef(prev => ({ ...prev, visual: visualRef }));
    return () => {
      setDetailScrollRef(prev => ({ ...prev, visual: null }));
    };
  }, [setDetailScrollRef, visualRef]);

  return (
    <PDVisualCover ref={visualRef}>
      <DetailTitleWrap />
    </PDVisualCover>
  );
}
