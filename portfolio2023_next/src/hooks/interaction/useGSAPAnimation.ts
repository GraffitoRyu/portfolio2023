"use client";

import { useCallback } from "react";
import { useAtomValue } from "jotai";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// hook
import useIsomorphicLayoutEffect from "../util/useIsomorphicLayoutEffect";

// state
import { pageLoadState } from "@/jotai/load.state";
import { scrollPageSectionRefState } from "@/jotai/interaction/scroll.state";

// util
import { isValidArray } from "@/utils/data/validation.util";

/**
 * GSAP ScrollTrigger 공통 전역옵션
 * @hook
 * @param {object} props
 * @param {HTMLElement | null} [props.container]
 * @desc
 * - GSAP ScrollTrigger 플러그인 등록
 * - ScrollTrigger 기본 옵션설정
 */
export function useGSAPRegister<ContainerElement extends HTMLElement>({
  container,
}: {
  container?: ContainerElement | null;
}) {
  return useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // 스크롤 트리거 플러그인 등록
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    // 스크롤 영역 기준 요소
    ScrollTrigger.defaults({
      scroller: container || window.document.documentElement,
      // 뷰포트 리사이즈에 대한 옵션
      invalidateOnRefresh: true,
    });

    // ScrollTrigger.config({ ignoreMobileResize: true });

    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();
  }, [container]);
}

/**
 * 스크롤 애니메이션 Hook
 * @hook
 * @param {object} props
 * @param {HTMLElement | null} [props.container] 스크롤 기준 전체 영역 (기본값; 페이지 스크롤 영역)
 * @param {Array<HTMLElement | null>} props.elements 스크롤 애니메이션 관련된 모든 요소들 (ref null 체크)
 * @param {boolean} [props.isTimeline] 타임라인 적용 여부
 * @param {UseGSAPAnimationHookOptions[]} props.options 애니메이션 및 스크롤트리거 옵션
 * @param {unknown[]} [deps]
 * @see https://stackblitz.com/edit/stackblitz-starters-u6rgzq?file=README.md gsap + ScrollTrigger + Next.js Starter Templates
 * @see https://gsap.com/resources/React useGSAP Hook
 * @example
 * ```tsx
 * export default function SectionComponent({
 *  children
 * }: {
 *  children: React.ReactNode
 * }) {
 *  const scrollContainerRef = useAtomValue<HTMLElement | null>(
 *    refFamilyState("container")
 *  );
 *  const sectionRef = useRef<HTMLElement | null>(null);
 *  const titleRef = useRef<HTMLHeading | null>(null);
 *
 *  // Hook 사용
 *  useGSAPAnimation({
 *    container: scrollContainerRef,
 *    elements: [sectionRef.current, titleRef.current],
 *    options: [
 *      // fromTo option
 *      {
 *        target: titleRef.current,
 *        direction: "fromTo",
 *        animation: [
 *          { opacity: 0, y: 50 },
 *          {
 *            opacity: 1,
 *            scrollTrigger: {
 *              trigger: sectionRef.current,
 *              start: "top 80%",
 *              end: "top 50%",
 *              scrub: true,
 *            }
 *          },
 *        ]
 *      }
 *    ]
 *  });
 *
 *  return (
 *    <section className="page-section" ref={sectionRef}>
 *      <h2 ref={titleRef}>제목</h2>
 *    </section>
 *  )
 * }
 * ```
 */
export default function useGSAPAnimation(
  {
    key,
    container: containerEl,
    elements,
    isTimeline = false,
    scrollCreate, // gsap scrollTrigger create
    options, // gsap tween animation options
    disabled = false,
    log,
  }: Partial<UseGSAPAnimationHookProps>,
  deps: React.DependencyList,
) {
  // 페이지 진입상태 모니터링
  const { loadComplete } = useAtomValue(pageLoadState);

  const container = useAtomValue(scrollPageSectionRefState("container"));

  /**
   * GSAP 플러그인 등록
   * - useGSAP()
   * - ScrollTrigger
   */
  useGSAPRegister({
    container: typeof containerEl !== "undefined" ? containerEl : container,
  });

  /**
   * 애니메이션 옵션별 gsap tween 설정 실행
   * @param {UseGSAPAnimationHookOptions} option 애니메이션 옵션
   */
  const gsapTween = useCallback(
    (option: UseGSAPAnimationHookOptions) => {
      if (option.target === null) {
        // console.error("[useGSAPAnimation; ${key} :: gsapTween] 스크롤 인터랙션 초기화 오류 :: target 없음", option);
        return;
      }

      // 타임라인 적용 여부에 따른 라이브러리 객체 선언
      const _g = isTimeline ? gsap.timeline() : gsap;

      // 옵션 추출
      // console.log("[useGSAPAnimation :: gsapTween] 스크롤 인터랙션 초기화", option);
      const { target, direction, animation } = option;

      // 진행방향에 따른 tween 애니메이션 적용
      if (typeof direction === "undefined" || direction === "to") {
        _g.to(
          target,
          // to tween
          {
            ...animation[0],
            immediateRender: false, // 애니메이션 초기화 이슈 해결을 위한 옵션
          },
        );
      }
      if (direction === "from") {
        _g.from(
          target,
          // from tween
          {
            ...animation[0],
            immediateRender: false, // 애니메이션 초기화 이슈 해결을 위한 옵션
          },
        );
      }
      if (direction === "fromTo") {
        if (!animation[1]) {
          console.error(
            "스크롤 인터랙션 초기화 오류 :: fromTo 애니메이션 없음",
            animation,
          );
          return;
        }
        _g.fromTo(
          target,
          // from tween
          {
            ...animation[0],
            immediateRender: false, // 애니메이션 초기화 이슈 해결을 위한 옵션
          },
          // to tween
          { ...animation[1] },
        );
      }
    },
    [isTimeline],
  );

  // gsap 실행 관련 요소의 유효성 모두 체크
  const validElementLength = useCallback(
    () => (elements ? elements.filter(el => el !== null) : []).length,
    [elements],
  );

  return useGSAP(
    () => {
      if (typeof log !== "undefined" && log.length > 0) {
        console.log(`[useGSAPAnimation; ${key}]`, {
          log,
          props: {
            deps,
            disabled,
            loadComplete,
            isValidElements: validElementLength() === 0,
            options,
            scrollCreate,
          },
        });
      }
      // console.log(`[useGSAPAnimation; ${key}]`);

      // 비활성화 시 동작 제한
      if (key?.startsWith("project/list/item/"))
        console.log(`[useGSAPAnimation; ${key}] disabled`, { disabled, deps });
      if (disabled) return;

      // 서버 실행 방지
      if (typeof window === "undefined") return;

      // 페이지 진입 시, 완료될 때까지 GSAP 방지
      if (!loadComplete) return;

      if (validElementLength() === 0) {
        console.error(
          `[useGSAPAnimation; ${key}] 스크롤 인터랙션 초기화 오류 :: element 유효하지 않음`,
          elements,
        );
        return;
      }

      // GSAP 애니메이션 초기화
      ScrollTrigger.refresh();

      // tween 배열에 대한 애니메이션 설정 적용
      if (options && isValidArray(options)) options.forEach(gsapTween);
      // console.log(`[useGSAPAnimation; ${key}] options:`, options);

      // scrollTrigger create가 있는 경우
      if (scrollCreate && isValidArray(scrollCreate))
        scrollCreate.forEach(create => ScrollTrigger.create(create));

      // console.log(`[useGSAPAnimation; ${key} :: useGSAP] deps`, deps);
    },
    [
      loadComplete,
      key,
      disabled,
      options?.length,
      containerEl,
      // ...(elements || []),
      validElementLength(),
      ...(deps || []),
    ],
    // {
    //   scope: propsContainerEl || globalContainerEl,
    //   dependencies: [...elements, ...(deps || [])],
    // },
  );
}
