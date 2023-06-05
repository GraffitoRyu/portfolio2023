import { SyntheticEvent, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

// svg
import ExternalIcon from "@/svg/common/external_icon.svg";

// type
import { SitemapType } from "@/types/sitemap";

// style component
import { FooterBtn } from "@/styles/styled/components/pageFooter";

// util
import navDelay from "@/util/navDelay";

// state
import { pageState, pageStateTypes } from "@/states/page";

const FooterMenuBtn = styled(FooterBtn)``;

export default function SitemapBtn({
  code,
  path,
  name,
  external,
}: SitemapType): JSX.Element {
  const router = useRouter();
  const { category } = useParams();
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);
  const [hover, setHover] = useState<string>("");

  return external ? (
    <FooterMenuBtn
      href={path}
      target="_blank"
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <span>{name}</span>
      <figure>
        <ExternalIcon />
      </figure>
    </FooterMenuBtn>
  ) : (
    <FooterMenuBtn
      as="button"
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={(e: SyntheticEvent) =>
        navDelay({
          delay: category ? 0 : 1000,
          e,
          clickEvent: () => {
            console.log("페이지 변경 시작: ", code);
            const updatePage = category
              ? { bottomSheetOpen: false }
              : { cover: code, loaded: false };
            setPageAtom(prev => ({ ...prev, ...updatePage }));
          },
          navEvent: () => router.push(path),
        })
      }
    >
      <span>{name}</span>
    </FooterMenuBtn>
  );
}
