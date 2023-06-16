// style components
import { ToolsItem, ToolsList } from "@/styles/styled/components/ProfileTools";

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

export default function Tools() {
  console.log("profile/tools");
  return (
    <ToolsList className="tools-list">
      {toolList.map((d: string) => (
        <ToolsItem key={`tools_${d}`}>{d}</ToolsItem>
      )) ?? ""}
    </ToolsList>
  );
}
