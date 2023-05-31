"use client";

import { styled } from "styled-components";

// style
import { flex } from "@/styles/styled/preset/mixins";

// util
import { rem } from "@/util/unit";

const toolList = [
  "Next.js",
  "React",
  "Recoil",
  "Vite",
  "jQuery",
  "SCSS",
  "Tailwind CSS",
  "Ajax",
  "WebSocket",
  "d3.js",
  "Google Maps API",
  "Kakao Maps API",
  "Mapbox GL",
  "Git/Github",
  "Figma",
  "Zeplin",
];

const ToolsList = styled.ul`
  ${flex({ std: "start", wrap: "wrap" })}
  width: ${`calc(100% + ${rem(160)})`};
  margin: 0 ${rem(-80)};
  padding-bottom: ${rem(240)};
  @media only screen and (min-width: 1024px) {
    padding-right: ${rem(240)};
    padding-bottom: 0;
  }
`;

const ToolsItem = styled.li`
  padding: 0 ${rem(80)};
  margin-bottom: ${rem(64)};
  color: ${({ theme }) => theme.tools.text};
  font-size: ${rem(40)};
  font-weight: 700;
  line-height: 1.6em;
`;

export default function Tools() {
  return (
    <ToolsList className="tools-list">
      {toolList.map((d: string) => (
        <ToolsItem key={`tools_${d}`}>{d}</ToolsItem>
      )) ?? ""}
    </ToolsList>
  );
}
