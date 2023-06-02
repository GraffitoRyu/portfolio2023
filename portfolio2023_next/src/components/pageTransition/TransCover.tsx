"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

// style
import { flex, position } from "@/styles/styled/preset/mixins";

// util
import { rem } from "@/util/unit";
import { useRecoilValue } from "recoil";
import { pageState, pageStateTypes } from "@/states/page";

const TransitionCover = styled.div`
  ${position({ type: "fixed", left: "0rem", bottom: "0rem", z: 3000 })}
  width:100%;
  height: 0;
  background-color: gray;
  overflow: clip;
  transition: height 0.3s;
  &.loading {
    height: 100%;
  }
`;

const TransBox = styled.div`
  ${position({ bottom: "0rem", left: "0rem" })}
  ${flex({ std: "start" })}
  width: 100%;
  height: ${`${window.innerHeight}px`};
  padding: 0 ${rem(80)};
`;

const TransTitle = styled.h1`
  font-size: ${rem(160)};
  font-weight: 500;
  font-family: var(--serif-kr);
  letter-spacing: 0;
  color: #333;
  text-transform: capitalize;
`;

export default function TransCover() {
  const { init, cur, loaded } = useRecoilValue<pageStateTypes>(pageState);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    if (init) {
      if (loaded) setTimeout(() => setLoading(""), 3000);
      else setLoading("loading");
    }
  }, [init, loaded]);

  return (
    <TransitionCover className={loading}>
      <TransBox>
        <TransTitle>{cur}</TransTitle>
      </TransBox>
    </TransitionCover>
  );
}
