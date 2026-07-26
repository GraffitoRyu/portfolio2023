"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";

// components
import LoadingIconComponent from "../../loading/LoadingIcon";

// style components
import {
  StyledTransBox,
  StyledTransTitle,
  StyledTransitionCover,
} from "@/styles/styled/components/TransCover";

// state
import { pageLoadState } from "@/jotai/load.state";

// data
import { transCoverData } from "@portfolio/preset-data";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function TransCover() {
  const [{ initComplete, changePageName, loaded }, setPage] =
    useAtom<PageLoadStateTypes>(pageLoadState);
  const [loading, setLoading] = useState("");
  const [data, setData] = useState<TransCoverTypes>(
    transCoverData[changePageName],
  );

  useEffect(() => {
    setData(transCoverData[changePageName]);
  }, [changePageName]);

  useEffect(() => {
    // 최초 로딩 시에는, intro page cover로 적용
    // 이 컴포넌트는 페이지 간 이동에서만 적용된다.
    if (!initComplete) return;

    if (initComplete && loaded) {
      // 페이지 loaded 신호 후, 커버를 비활성화한다.
      setLoading("");

      // 커버 비활성화 모션 후, loadComplete 한다.
      setTimeout(() => {
        setPage(prev => ({ ...prev, loadComplete: true }));
      }, transTime.common.loadComplete);
    } else {
      // loaded 전에 커버를 활성화한다.
      setLoading("loading");
    }
  }, [initComplete, loaded, setPage]);

  return (
    <StyledTransitionCover className={`transCover ${loading}`}>
      <StyledTransBox className="transCoverBox">
        <StyledTransTitle>{data.title}</StyledTransTitle>
        <LoadingIconComponent />
      </StyledTransBox>
    </StyledTransitionCover>
  );
}
