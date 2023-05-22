import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled } from "styled-components";

import { SitemapType } from "@/data/sitemap";

// util
import rem from "@/util/rem";

const SitemapLink = styled(Link)`
  font-size: ${rem(24)};
  color: #ccc;
  &.now {
    color: red;
  }
`;

export default function SitemapBtn({ path, name }: SitemapType) {
  const curPath = usePathname();
  return (
    <SitemapLink href={path} className={path == curPath ? "now" : ""}>
      <span>{name}</span>
    </SitemapLink>
  );
}
