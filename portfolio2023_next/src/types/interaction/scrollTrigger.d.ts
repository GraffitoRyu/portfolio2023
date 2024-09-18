interface ScrollTriggerOptions extends ScrollTrigger.Vars {}

interface ScrollTriggerAnimationOptions extends gsap.TweenVars {
  scrollTrigger?: ScrollTriggerOptions;
}

interface ScrollTriggerTweenArrayOptions {
  optionKey?: string;
  target: gsap.DOMTarget;
  direction?: "to" | "from" | "fromTo";
  animation: ScrollTriggerAnimationOptions[];
}

interface UseGSAPAnimationHookOptions {
  /**
   * hook 구분 키
   */
  key: string;
  /**
   * 스크롤 기준 영역
   * - 기본값; container
   */
  container?: HTMLElement | null;
  /**
   * 애니메이션 타겟, 트리거 등의 ref current HTMLElement 배열
   */
  elements: Array<HTMLElement | null>; // ref currents
  /**
   * timeline 여부
   */
  isTimeline?: boolean;
  /**
   * gsap tween 설정
   */
  options: ScrollTriggerTweenArrayOptions[];
  /**
   * hook 비활성화
   */
  disabled?: boolean;
}
