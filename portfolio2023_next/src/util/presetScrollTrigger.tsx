import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { HookScrollTriggerProps } from "@/types/hooks";

export function ctxScrollTrigger({
  container,
  target,
  options,
  direction,
}: HookScrollTriggerProps) {
  return gsap.context(() => {
    if (container && target) {
      // Scroll Trigger 플러그인 사용 시작
      gsap.registerPlugin(ScrollTrigger);

      // 스크롤 영역 설정
      ScrollTrigger.defaults({
        scroller: container,
      });

      if (typeof direction === "undefined" || direction === "to")
        gsap.to(target, Object.assign(options, { invalidateOnRefresh: true }));

      if (direction === "from")
        gsap.from(
          target,
          Object.assign(options, { invalidateOnRefresh: true })
        );

      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh();
    }
  });
}
