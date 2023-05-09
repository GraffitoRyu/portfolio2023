export default function Tools() {
  const toolList = [
    "Next.js",
    "React",
    "Recoil",
    "Vite",
    "jQuery",
    "SCSS",
    "Ajax",
    "WebSocket",
    "d3.js",
    "Google Maps API",
    "Git/Github",
    // "VS Code",
    // "Figma",
    // "Zeplin",
    // "Photoshop",
  ];

  return (
    <ul className="tool-list flex flex-wrap items-center justify-center lg:justify-start">
      {toolList.map(d => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  );
}