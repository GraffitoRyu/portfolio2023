"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSetAtom } from "jotai";
import ClipboardJS from "clipboard";

// components
import Tooltip from "@/components/tooltip/Tooltip";
import LinkIcon from "./LinkIcon";

// style components
import {
  StyledFooterLinkBtn,
  StyledFooterLinkCopyBtn,
  StyledFooterLinkIcon,
  StyledFooterLinkItem,
} from "@/styles/styled/components/PageFooter";

// state
import { pageLoadState } from "@/jotai/load.state";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function FooterLink({
  code,
  name,
  path,
  isCopy,
  isExternal,
  isDownload,
}: SitemapDataType) {
  const router = useRouter();
  // 현재 페이지 경로
  const pathname = usePathname();
  // 페이지 상태 관리
  const setPageAtom = useSetAtom(pageLoadState);
  // const container = useAtomValue(scrollPageSectionRefState("container"));

  const isNav: boolean = !isExternal ? true : false;

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

  const onClickLink = useCallback(() => {
    // 페이지 전환 커버 동작 후 이동 시작
    if (pathname === path) return;

    setPageAtom(prev => ({
      ...prev,
      changePageName: path === "/projects" ? "projects" : "profile",
      loaded: false,
    }));

    setTimeout(() => {
      // if (container) container.scrollTo(0, 0);
      setPageAtom(prev => ({ ...prev, loadComplete: false }));
      router.push(path, { scroll: false });
    }, transTime.common.coverUp);
  }, [path, pathname, router, setPageAtom]);

  // 포트폴리오 페이지 메뉴
  if (isNav)
    return (
      <StyledFooterLinkItem>
        <StyledFooterLinkBtn
          as="button"
          type="button"
          className={`${hoverText}`}
          onClick={onClickLink}
          onMouseEnter={() => setHoverText("hover")}
          onMouseLeave={() => setHoverText("")}
          aria-label={`포트폴리오 페이지 ${name}로 이동하기`}
        >
          <span>{name}</span>
        </StyledFooterLinkBtn>
      </StyledFooterLinkItem>
    );

  // 복사 기능 메뉴
  if (isCopy)
    return (
      <StyledFooterLinkItem>
        <StyledFooterLinkBtn
          href={path}
          target="_blank"
          className={`${hoverText}`}
          onMouseEnter={() => setHoverText("hover")}
          onMouseLeave={() => setHoverText("")}
          aria-label={`${name.includes("tel") ? "전화" : "이메일"} 연락하기`}
        >
          <span>{name}</span>
        </StyledFooterLinkBtn>
        <StyledFooterLinkCopyBtn
          ref={downBtnRef}
          type="button"
          data-clipboard-text={name}
          className={`${hoverIcon}`}
          onMouseEnter={() => setHoverIcon("hover")}
          onMouseLeave={() => setHoverIcon("")}
          aria-label={`${name} 복사하기`}
        >
          <Tooltip
            contents="복사 완료!"
            pos={["top", "center"]}
            section="footer"
            active={copied}
            show={copiedShow}
          >
            <StyledFooterLinkIcon>
              <LinkIcon
                {...{
                  isExternal,
                  isCopy,
                  isDownload,
                }}
              />
            </StyledFooterLinkIcon>
          </Tooltip>
        </StyledFooterLinkCopyBtn>
      </StyledFooterLinkItem>
    );

  const doc_code = code.replace("_doc", "");

  // 외부 링크 메뉴
  return (
    <StyledFooterLinkItem>
      <StyledFooterLinkBtn
        href={path}
        target="_blank"
        className={`${hoverText}`}
        onMouseEnter={() => setHoverText("hover")}
        onMouseLeave={() => setHoverText("")}
        download={
          isDownload
            ? path.replace(`/download/${doc_code}`, `류대현_${name}`)
            : false
        }
        aria-label={`외부 페이지 ${name} 링크로 이동하기`}
      >
        <span>{name}</span>
        <StyledFooterLinkIcon>
          <LinkIcon
            {...{
              isExternal,
              isCopy,
              isDownload,
            }}
          />
        </StyledFooterLinkIcon>
      </StyledFooterLinkBtn>
    </StyledFooterLinkItem>
  );
}
