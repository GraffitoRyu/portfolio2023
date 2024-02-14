"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

// components
import LoadingIconComponent from "../loading/LoadingIcon";

// style components
import {
  TransBox,
  TransTitle,
  TransitionCover,
} from "@/styles/styled/components/TransCover";

// state
import { pageState } from "@/states/page";

// data
import { transCoverData } from "@/data/transCover";

// types
import { PageStateTypes } from "@/types/state";
import { TransCoverTypes } from "@/types/transCover";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function TransCover() {
  const [{ initComplete, cover, loaded }, setPage] =
    useRecoilState<PageStateTypes>(pageState);
  const [loading, setLoading] = useState("");
  const [data, setData] = useState<TransCoverTypes>(transCoverData[cover]);

  useEffect(() => {
    setData(transCoverData[cover]);
  }, [cover]);

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
    <TransitionCover className={`transCover ${loading}`}>
      <TransBox className="transCoverBox">
        <TransTitle>{data.title}</TransTitle>
        <LoadingIconComponent />
      </TransBox>
    </TransitionCover>
  );
}
