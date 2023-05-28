import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

// data
import { SitemapType } from "@/data/sitemap";

// util
import { rem } from "@/util/unit";

const SitemapLink = styled(Link)`
  margin-right: ${rem(64)};
  font-size: ${rem(24)};
  font-weight: 500;
  color: ${({ theme }) => theme.gnbSitemapBtn.basic};
  &:not(.now).hover {
    color: ${({ theme }) => theme.gnbSitemapBtn.hover};
  }
  &.now {
    color: ${({ theme }) => theme.gnbSitemapBtn.selected};
  }
`;

export default function SitemapBtn({ path, name }: SitemapType) {
  const curPath = usePathname();
  const [curPage, setCurPage] = useState<string>(path == curPath ? "now" : "");
  const [hover, setHover] = useState("");

  useEffect(() => {
    setCurPage(path == curPath ? "now" : "");
  }, [curPath, path]);

  return (
    <SitemapLink
      href={path}
      className={`${curPage} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
