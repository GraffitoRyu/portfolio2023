"use client";

import { styled } from "styled-components";

// style
import { easing } from "@/styles/styled/preset/easing";
import {
  flex,
  position,
  size,
  transition,
} from "@/styles/styled/preset/mixins";

export const ProjectDetailContainer = styled.article`
  ${size({ width: "100%", height: "60vh" })}
  ${position({ type: "fixed", left: 0, bottom: 0, z: 2000 })}
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  background: linear-gradient(
    0deg,
    rgba(42, 55, 64, 1) 0%,
    rgba(66, 110, 94, 0.6643907563025211) 100%
  );
  ${transition([{ prop: "transform", time: "0.8s", easing: easing.quart }])}
  transform: translateY(100%);
  &.open {
    transform: translateY(0);
  }
`;

export const ProjectDetailHeader = styled.header`
  ${position({ type: "sticky", top: 0, left: 0 })}
  ${flex({ std: "start" })}
  ${size({ width: "100%", padding: 80 })}
`;

export const ProjectDetailSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;
