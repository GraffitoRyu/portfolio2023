import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

// style components
import { PDTitle } from "@/styles/styled/components/ProjectDetail";

// types
import { DetailTypes } from "@/types/projectDetails";
import {
  DetailLayoutStateTypes,
  DetailScrollRefStateTypes,
} from "@/types/state";

// state
import { detailData, detailLayoutState } from "@/states/detail";
import { detailScrollRefState } from "@/states/scroll";

// util
import ctxScrollTrigger from "@/util/presetScrollTrigger";

export default function DetailTitleWrap() {
  // 프로젝트 상세 데이터
  const params = useSearchParams();
  const code = params.get("code");
  const data = useRecoilValue<DetailTypes>(detailData);

  // 내용 추출
  const [title, setTitle] = useState<string[]>([]);
  const [subtitle, setSubtitle] = useState<string>("");

  // 레이아웃 준비 상태
  const { openComplete } =
    useRecoilValue<DetailLayoutStateTypes>(detailLayoutState);

  // 초기화 인터렉션
  const [initTitle, setInitTitle] = useState<string>("ready");

  // 스크롤 효과 세팅
  const scrollUpRef = useRef<HTMLDivElement | null>(null);
  const { container, visual } =
    useRecoilValue<DetailScrollRefStateTypes>(detailScrollRefState);
  // 데이터 세팅
  useEffect(() => {
    if (!code) return;

    const d = data[code];
    if (d?.summary?.title) setTitle(d.summary.title);
    if (d?.summary?.desc) setSubtitle(d.summary.desc);
  }, [code, data]);

  // 프로젝트 타이틀 등장 모션
  useEffect(() => {
    if (openComplete && title?.length > 0 && subtitle) setInitTitle("");
  }, [openComplete, subtitle, title?.length]);

  // 스크롤 인터렉션 이벤트 선언
  useEffect(() => {
    if (openComplete && code && data && title?.length > 0 && subtitle) {
      const scrollContainer = container?.current;
      const scrollArea = visual?.current;
      if (!scrollContainer || !scrollArea) return;

      const scrollTarget = scrollUpRef.current;
      if (!scrollTarget) return;

      const ctx = ctxScrollTrigger({
        container: scrollContainer,
        target: scrollTarget,
        options: {
          opacity: 0,
          scrollTrigger: {
            trigger: scrollArea,
            start: `${scrollTarget.offsetTop} ${scrollTarget.offsetTop}`, // target, trigger
            end: `${scrollTarget.offsetTop} start`, // target, trigger
            scrub: true,
            // markers: true,
          },
        },
      });

      return () => ctx.revert();
    }
  }, [code, container, data, openComplete, subtitle, title, visual]);

  return (
    <PDTitle className={`${initTitle}`} ref={scrollUpRef}>
      <h2>
        <ParseDescNewLine data={title} breakLine={false} />
      </h2>
      <p>{subtitle}</p>
    </PDTitle>
  );
}
