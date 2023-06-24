"use client";

import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

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
import { pageStateTypes } from "@/types/state";

export default function PageHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [hide, setHide] = useState<string>("init-hide hide");
  const { init, initComplete } = useRecoilValue<pageStateTypes>(pageState);

  // 최초 로딩 시 등장
  useEffect(() => {
    if (init) setHide("init-hide");
  }, [init]);

  // 로딩 완료 후, transition css 제거
  useEffect(() => {
    if (initComplete) setHide("");
  }, [initComplete]);

  return (
    <HeaderContainer className={`${hide}`} ref={headerRef}>
      <StyledHeaderWrap>
        <TimeDisplay />
        <Gnb />
      </StyledHeaderWrap>
    </HeaderContainer>
  );
}
