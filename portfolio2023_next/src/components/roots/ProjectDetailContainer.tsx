"use client";

import { position, size } from "@/styles/styled/preset/mixins";
import { styled } from "styled-components";

export const ProjectDetailContainer = styled.article`
  ${size({ width: "100%", height: "60vh" })}
  ${position({ type: "fixed", left: 0, bottom: 0, z: 4000 })}
  background: linear-gradient(0deg, rgba(42,55,64,1) 0%, rgba(66,110,94,0.6643907563025211) 100%);
`;
