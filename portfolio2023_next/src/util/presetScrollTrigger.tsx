import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomTweenType, HookScrollTriggerProps } from "@/types/hooks";

function gsapTween(tweenArr: CustomTweenType[]) {
  if (tweenArr.length > 0) {
    tweenArr.forEach((tw: CustomTweenType) => {
      if (tw.target instanceof Element && typeof tw.options !== "undefined") {
        if (typeof tw.direction === "undefined" || tw.direction === "to")
          gsap.to(tw.target, tw.options[0]);

        if (tw.direction === "from") gsap.from(tw.target, tw.options[0]);
        if (tw.direction === "fromTo")
          gsap.fromTo(tw.target, tw.options[0], tw.options[1]);
      }
    });
  }
}

function gsapTimeline(timeline: GSAPTimeline, tweenArr: CustomTweenType[]) {
  if (tweenArr?.length > 0) {
    tweenArr.forEach((tw: CustomTweenType) => {
      if (tw.target instanceof Element && typeof tw.options !== "undefined") {
        if (typeof tw.direction === "undefined" || tw.direction === "to")
          timeline.to(tw.target, tw.options[0]);

        if (tw.direction === "from") timeline.from(tw.target, tw.options[0]);
        if (tw.direction === "fromTo")
          timeline.fromTo(tw.target, tw.options[0], tw.options[1]);
      }
    });
  }
}

export function ctxScrollTrigger({
  container,
  normalize,
  tweenArr,
}: HookScrollTriggerProps) {
  if (typeof window === "undefined") return gsap.context();

  return gsap.context(() => {
    if (container instanceof Element) {
      // Scroll Trigger 플러그인 사용 시작
      gsap.registerPlugin(ScrollTrigger);

      // 스크롤 영역 설정
      ScrollTrigger.defaults({
        scroller: container,
        invalidateOnRefresh: true,
      });

      if (typeof normalize === "boolean")
        ScrollTrigger.normalizeScroll({
          allowNestedScroll: true,
        });

      gsapTween(tweenArr);

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    }
  });
}

export function ctxScrollTimeline({
  container,
  normalize,
  tweenArr,
}: HookScrollTriggerProps) {
  if (typeof window === "undefined") return gsap.context();

  return gsap.context(() => {
    if (container instanceof Element) {
      // Scroll Trigger 플러그인 사용 시작
      gsap.registerPlugin(ScrollTrigger);

      // 스크롤 영역 설정
      ScrollTrigger.defaults({
        scroller: container,
        invalidateOnRefresh: true,
      });

      if (typeof normalize === "boolean")
        ScrollTrigger.normalizeScroll({
          allowNestedScroll: true,
        });

      const timeline = gsap.timeline();
      gsapTimeline(timeline, tweenArr);

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    }
  });
}
