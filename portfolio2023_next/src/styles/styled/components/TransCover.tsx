"use client";

import { styled } from "styled-components";

// style
import { flex, position } from "../preset/mixins";

// util
import { rem } from "@/util/unit";

export const TransitionCover = styled.div`
  ${position({ type: "fixed", left: "0rem", top: "0rem", z: 3000 })}
  width:100%;
  height: 0;
  background-color: gray;
  overflow: clip;
  transition: height 0.3s;
  &.loading {
    height: 100%;
    top: auto;
    bottom: 0;
  }
`;

export const TransBox = styled.div`
  ${position({ bottom: "0rem", left: "0rem" })}
  ${flex({ std: "start" })}
  width: 100%;
  height: ${typeof window !== "undefined"
    ? `${window.innerHeight}px`
    : "100vh"};
  padding: 0 ${rem(80)};
`;

export const TransTitle = styled.h1`
  font-size: ${rem(160)};
  font-weight: 400;
  font-family: var(--serif-kr);
  letter-spacing: 0.1em;
  color: #333;
  text-transform: capitalize;
`;
