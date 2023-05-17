"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const GnbBtn = styled(Link)`
  color: #ccc;
  &.now {
    color: #333;
  }
`;
export default function Gnb() {
  const curPath = usePathname();
  const sitemap = [
    {
      path: "/",
      code: "profile",
      name: "프로필",
    },
    {
      path: "/projects",
      code: "projects",
      name: "프로젝트",
    },
  ];
  return (
    <nav className="gnb flex items-center">
      {sitemap.map(d => (
        <GnbBtn
          href={d.path}
          key={d.code}
          className={d.path == curPath ? "now" : ""}
        >
          <span>{d.name}</span>
        </GnbBtn>
      ))}
    </nav>
  );
}
