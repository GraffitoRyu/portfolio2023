import { useInView } from "react-intersection-observer";

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

  const { ref: toolsRef, inView: toolsView } = useInView({
    triggerOnce: true,
    rootMargin: "120px",
    delay: 400,
  });

  return (
    <ul
      className={`tool-list flex flex-wrap justify-center lg:justify-start ${
        toolsView ? "in-view" : ""
      }`}
      ref={toolsRef}
    >
      {toolList.map((d, i) => (
        <li key={d} style={{ transitionDelay: `${i * 0.1}s` }}>
          {d}
        </li>
      ))}
    </ul>
  );
}
