"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import ClipboardJS from "clipboard";

// components
import Tooltip from "@/components/tooltip/Tooltip";
import LinkIcon from "./LinkIcon";

// style components
import {
  FooterLinkBtn,
  FooterLinkCopyBtn,
  FooterLinkIcon,
  FooterLinkItem,
} from "@/styles/styled/components/PageFooter";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";

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
  const setPageAtom = useSetRecoilState<PageLoadStateTypes>(pageState);
  const { container } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);

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
          aria-label={`포트폴리오 페이지 ${name}로 이동하기`}
        >
          <span>{name}</span>
        </FooterLinkBtn>
      </FooterLinkItem>
    );

  // 복사 기능 메뉴
  if (isCopy)
    return (
      <FooterLinkItem>
        <FooterLinkBtn
          href={path}
          target="_blank"
          className={`${hoverText}`}
          onMouseEnter={() => setHoverText("hover")}
          onMouseLeave={() => setHoverText("")}
          aria-label={`${name.includes("tel") ? "전화" : "이메일"} 연락하기`}
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
          aria-label={`${name} 복사하기`}
        >
          <Tooltip
            contents="복사 완료!"
            pos={["top", "center"]}
            section="footer"
            active={copied}
            show={copiedShow}
          >
            <FooterLinkIcon>
              <LinkIcon
                {...{
                  isExternal,
                  isCopy,
                  isDownload,
                }}
              />
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
          isDownload
            ? path.replace(`/download/${doc_code}`, `류대현_${name}`)
            : false
        }
        aria-label={`외부 페이지 ${name} 링크로 이동하기`}
      >
        <span>{name}</span>
        <FooterLinkIcon>
          <LinkIcon
            {...{
              isExternal,
              isCopy,
              isDownload,
            }}
          />
        </FooterLinkIcon>
      </FooterLinkBtn>
    </FooterLinkItem>
  );
}
