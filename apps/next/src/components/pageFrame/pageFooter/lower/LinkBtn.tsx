"use client";

import { useEffect, useRef, useState } from "react";
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

// style
import { transTime } from "@/styles/styled/preset/transTime";
import usePortfolioNavigation from "@/hooks/navigation/usePortfolioNavigation";
import { resolvePublicAssetUrl } from "@/data/assets";

export default function FooterLink({
  code,
  kind,
  name,
  path,
}: SitemapDataType) {
  const { navigate } = usePortfolioNavigation();
  const href = kind === "download" ? resolvePublicAssetUrl(path) : path;

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
  if (kind === "route")
    return (
      <StyledFooterLinkItem>
        <StyledFooterLinkBtn
          as="button"
          type="button"
          className={`${hoverText}`}
          onClick={() => navigate({ code, path })}
          onMouseEnter={() => setHoverText("hover")}
          onMouseLeave={() => setHoverText("")}
          aria-label={`포트폴리오 페이지 ${name}로 이동하기`}
        >
          <span>{name}</span>
        </StyledFooterLinkBtn>
      </StyledFooterLinkItem>
    );

  // 복사 기능 메뉴
  if (kind === "copy")
    return (
      <StyledFooterLinkItem>
        <StyledFooterLinkBtn
          href={href}
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
              <LinkIcon kind={kind} />
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
        href={href}
        target="_blank"
        className={`${hoverText}`}
        onMouseEnter={() => setHoverText("hover")}
        onMouseLeave={() => setHoverText("")}
        download={
          kind === "download"
            ? href.replace(`/download/${doc_code}`, `류대현_${name}`)
            : false
        }
        aria-label={`외부 페이지 ${name} 링크로 이동하기`}
      >
        <span>{name}</span>
        <StyledFooterLinkIcon>
          <LinkIcon kind={kind} />
        </StyledFooterLinkIcon>
      </StyledFooterLinkBtn>
    </StyledFooterLinkItem>
  );
}
