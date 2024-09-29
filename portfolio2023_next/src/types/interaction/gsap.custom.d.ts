/**
 * GSAP 커스텀 훅; 스크롤 인터랙션 옵션
 * @see https://gsap.com/docs/v3/Plugins/ScrollTrigger/
 * @example
 * ```typescript
 * {
 *  trigger: containerElement,
 *  start: "top center",
 *  end: "bottom top",
 *  scrub: true,
 * }
 * ```
 */
interface UseGSAPAnimationScrollTriggerOption extends ScrollTrigger.Vars {}

/**
 * GSAP 커스텀 훅; tween 옵션
 * @see https://gsap.com/docs/v3/GSAP/Tween
 * @see https://gsap.com/cheatsheet
 * @example
 * ```typescript
 * {
 *  x: "-100%",
 *  opacity: 1,
 *  scrollTrigger: {
 *    trigger: sectionElement,
 *    start: "top bottom",
 *    end: "top top",
 *    scrub: true,
 *  },
 * }
 * ```
 */
interface UseGSAPAnimationHookTweenOption extends gsap.TweenVars {
  /**
   * GSAP 커스텀 훅; 스크롤 인터랙션 옵션
   * @see https://gsap.com/docs/v3/Plugins/ScrollTrigger/
   * @example
   * ```typescript
   * {
   *  trigger: containerElement,
   *  start: "top center",
   *  end: "bottom top",
   *  scrub: true,
   * }
   * ```
   */
  scrollTrigger?: UseGSAPAnimationScrollTriggerOption;
}

/**
 * GSAP 커스텀 훅; tween 옵션 타입
 */
interface UseGSAPAnimationHookOptions {
  /**
   * 애니메이션 고유 키
   * @optional
   */
  optionKey?: string;
  /**
   * 애니메이션 대상 지정
   * @required
   * @type {HTMLElement}
   */
  target: gsap.DOMTarget;
  /**
   * gsap tween 애니메이션 동장 플로우
   * @optional
   * - 기본값; "to"
   */
  direction?: "to" | "from" | "fromTo";
  /**
   * gsap tween 옵션
   * @required
   * @see https://gsap.com/docs/v3/GSAP/Tween
   * @see https://gsap.com/cheatsheet
   * @example
   * ```typescript
   * {
   *  x: "-100%",
   *  opacity: 1,
   *  scrollTrigger: {
   *    trigger: sectionElement,
   *    start: "top bottom",
   *    end: "top top",
   *    scrub: true,
   *  },
   * }
   * ```
   */
  animation: UseGSAPAnimationHookTweenOption[];
}

/**
 * GSAP 커스텀 훅; 훅 props 타입
 * - Partial<UseGSAPAnimationHookOptions>
 */
interface UseGSAPAnimationHookProps {
  /**
   * hook 구분 키
   * @required
   */
  key: string;
  /**
   * 스크롤 기준 영역
   * @optional
   * - 기본값; container
   */
  container: HTMLElement | null;
  /**
   * 애니메이션 타겟, 트리거 등의 ref current HTMLElement 배열
   * @required
   */
  elements: Array<HTMLElement | null>; // ref currents
  /**
   * timeline 여부
   * @optional
   */
  isTimeline: boolean;
  /**
   * scrollTrigger create 옵션
   * @optional
   * @see https://gsap.com/docs/v3/Plugins/ScrollTrigger/
   * @example
   * ```typescript
   * {
   *  trigger: containerElement,
   *  start: "top center",
   *  end: "bottom top",
   *  scrub: true,
   * }
   * ```
   */
  scrollCreate: UseGSAPAnimationScrollTriggerOption;
  /**
   * gsap tween 설정
   * @optional
   * @see https://gsap.com/docs/v3/GSAP/Tween
   * @see https://gsap.com/cheatsheet
   * @example
   * ```typescript
   * {
   *  x: "-100%",
   *  opacity: 1,
   *  scrollTrigger: {
   *    trigger: sectionElement,
   *    start: "top bottom",
   *    end: "top top",
   *    scrub: true,
   *  },
   * }
   * ```
   */
  options: UseGSAPAnimationHookOptions[];
  /**
   * hook 비활성화
   * @optional
   */
  disabled: boolean;
  /**
   * 개발용 로그
   * @optional
   */
  log: unknown[];
}
