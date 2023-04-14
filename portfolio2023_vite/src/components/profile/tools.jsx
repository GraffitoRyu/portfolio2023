export default function tools() {
  const toolList = [
    "Next.js",
    "React",
    "Vite",
    "jQuery",
    "SCSS",
    "Ajax",
    "d3.js",
    "Google Maps API",
    "Git/Github",
    "VS Code",
    "Figma",
    "Zeplin",
    "Photoshop",
  ];

  return (
    <ul className="tool-list flex flex-wrap items-center">
      {toolList.map(d => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  );
}
