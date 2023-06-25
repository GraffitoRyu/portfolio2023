"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import Gnb from "./Gnb";
import TimeDisplay from "./TimeDisplay";

// style components
import {
  HeaderContainer,
  StyledHeaderWrap,
} from "@/styles/styled/components/PageHeader";

// state
import { pageState } from "@/states/page";

// types
import { ScrollRefStateTypes, pageStateTypes } from "@/types/state";
import { scrollRefState } from "@/states/scroll";

export default function PageHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const setScrollRef = useSetRecoilState<ScrollRefStateTypes>(scrollRefState);
  const [hide, setHide] = useState<string>("init-hide hide");
  const { init, initComplete } = useRecoilValue<pageStateTypes>(pageState);

  const updateRef = useCallback(
    (node: HTMLElement | null) => {
      headerRef.current = node;
      setScrollRef(prev => ({ ...prev, header: node }));
    },
    [setScrollRef]
  );

  // 최초 로딩 시 등장
  useEffect(() => {
    if (init) setHide("init-hide");
  }, [init]);

  // 로딩 완료 후, transition css 제거
  useEffect(() => {
    if (initComplete) setHide("");
  }, [initComplete]);

  return (
    <HeaderContainer className={`${hide}`} ref={updateRef}>
      <StyledHeaderWrap>
        <TimeDisplay />
        <Gnb />
      </StyledHeaderWrap>
    </HeaderContainer>
  );
}
