"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ClipboardJS from "clipboard";

// components
import Tooltip from "@/components/tooltip/Tooltip";

// style components
import {
  FooterLinkBtn,
  FooterLinkCopyBtn,
  FooterLinkIcon,
  FooterLinkItem,
} from "@/styles/styled/components/PageFooter";

// types
import { SitemapType } from "@/types/sitemap";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// svg
import * as LinkSvg from "./LinkIcon";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ScrollRefStateTypes, pageStateTypes } from "@/types/state";
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";
function LinkIcon({
  external,
  copy,
  download,
}: {
  external: boolean;
  copy: boolean;
  download: boolean;
}) {
  if (external === true) return <LinkSvg.External />;
  else if (copy === true) return <LinkSvg.Copy />;
  else if (download === true) return <LinkSvg.Download />;
  return null;
}

export default function FooterLink({
  code,
  name,
  path,
  copy,
  header,
  external,
  download,
}: SitemapType) {
  const router = useRouter();
  // 현재 페이지 경로
  const pathname = usePathname();
  // 페이지 상태 관리
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);
  const { container } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);

  const isNav: boolean = header && !external ? true : false;

  const downBtnRef = useRef<HTMLButtonElement | null>(null);
  const [hoverText, setHoverText] = useState<string>("");
  const [hoverIcon, setHoverIcon] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedShow, setCopiedShow] = useState<boolean>(false);

  // 복사 버튼
  useEffect(() => {
    if (!downBtnRef?.current) return;
    const cb = new ClipboardJS(downBtnRef.current);

    cb.on("success", () => {
      // 툴팁 오픈
      setCopied(true);
    });
    return () => cb.destroy();
  }, []);

  useEffect(() => {
    if (copied)
      setTimeout(() => {
        setCopiedShow(true);
      }, 100);
  }, [copied]);

  useEffect(() => {
    // 툴팁 닫기
    if (copiedShow)
      setTimeout(() => {
        setCopiedShow(false);
        setTimeout(() => {
          setCopied(false);
        }, transTime.tooltip);
      }, 3000);
  }, [copiedShow]);

  // 포트폴리오 페이지 메뉴
  if (isNav)
    return (
      <FooterLinkItem>
        <FooterLinkBtn
          as="button"
          type="button"
          className={`${hoverText}`}
          onClick={() => {
            // 페이지 전환 커버 동작 후 이동 시작
            if (pathname === path) return;
            console.log("페이지 변경 시작: ", code);

            setPageAtom(prev => ({
              ...prev,
              cover: code,
              loaded: false,
            }));

            setTimeout(() => {
              if (container) container.scrollTo(0, 0);
              setPageAtom(prev => ({ ...prev, loadComplete: false }));
              router.push(path);
            }, transTime.common.coverUp);
          }}
          onMouseEnter={() => setHoverText("hover")}
          onMouseLeave={() => setHoverText("")}
        >
          <span>{name}</span>
        </FooterLinkBtn>
      </FooterLinkItem>
    );

  // 복사 기능 메뉴
  if (copy)
    return (
      <FooterLinkItem>
        <FooterLinkBtn
          href={path}
          target="_blank"
          className={`${hoverText}`}
          onMouseEnter={() => setHoverText("hover")}
          onMouseLeave={() => setHoverText("")}
        >
          <span>{name}</span>
        </FooterLinkBtn>
        <FooterLinkCopyBtn
          ref={downBtnRef}
          type="button"
          data-clipboard-text={name}
          className={`${hoverIcon}`}
          onMouseEnter={() => setHoverIcon("hover")}
          onMouseLeave={() => setHoverIcon("")}
        >
          <Tooltip
            contents="복사 완료!"
            pos={["top", "center"]}
            section="footer"
            active={copied}
            show={copiedShow}
          >
            <FooterLinkIcon>
              {LinkIcon({ external, copy, download })}
            </FooterLinkIcon>
          </Tooltip>
        </FooterLinkCopyBtn>
      </FooterLinkItem>
    );

  const doc_code = code.replace("_doc", "");

  // 외부 링크 메뉴
  return (
    <FooterLinkItem>
      <FooterLinkBtn
        href={path}
        target="_blank"
        className={`${hoverText}`}
        onMouseEnter={() => setHoverText("hover")}
        onMouseLeave={() => setHoverText("")}
        download={
          download
            ? path.replace(`/download/${doc_code}`, `류대현_${name}`)
            : false
        }
      >
        <span>{name}</span>
        <FooterLinkIcon>
          {LinkIcon({ external, copy, download })}
        </FooterLinkIcon>
      </FooterLinkBtn>
    </FooterLinkItem>
  );
}
