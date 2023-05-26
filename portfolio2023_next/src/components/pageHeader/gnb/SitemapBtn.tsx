import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider, styled } from "styled-components";

// type
import { GnbColorTypes } from "@/types/themeColors/pageHeader";

// data
import { SitemapType } from "@/data/sitemap";

// util
import { rem } from "@/util/unit";

// style
import { ThemeStateTypes, themeState } from "@/states/theme";
import { gnbMenuColors } from "@/styles/styled/gnb";

const SitemapLink = styled(Link)`
  margin-right: ${rem(64)};
  font-size: ${rem(24)};
  font-weight: 500;
  color: ${({ theme }) => theme.basic};
  &:not(.now).hover {
    color: ${({ theme }) => theme.hover};
  }
  &.now {
    color: ${({ theme }) => theme.selected};
  }
`;

export default function SitemapBtn({ path, name }: SitemapType) {
  const curPath = usePathname();
  const [curPage, setCurPage] = useState<string>(path == curPath ? "now" : "");
  const [hover, setHover] = useState("");
  const { theme } = useRecoilValue<ThemeStateTypes>(themeState);
  const [colors, setColors] = useState<GnbColorTypes>(gnbMenuColors.light);

  useEffect(() => {
    setCurPage(path == curPath ? "now" : "");
  }, [curPath, path]);

  useEffect(() => {
    setColors(gnbMenuColors[theme]);
  }, [theme]);

  return (
    <ThemeProvider theme={colors}>
      <SitemapLink
        href={path}
        className={`${curPage} ${hover}`}
        onMouseEnter={() => setHover("hover")}
        onMouseLeave={() => setHover("")}
      >
        <span>{name}</span>
      </SitemapLink>
    </ThemeProvider>
  );
}
