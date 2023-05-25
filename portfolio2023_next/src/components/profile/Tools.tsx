export default function Tools() {
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
  return (
    <ul className="tools-list">
      {toolList.map((d: string) => <li key={d}>{d}</li>) ?? ""}
    </ul>
  );
}
