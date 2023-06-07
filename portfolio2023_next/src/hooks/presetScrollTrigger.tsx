import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HookScrollTriggerProps } from "@/types/hooks";

export default function ctxScrollTrigger({
  container,
  target,
  options,
}: HookScrollTriggerProps) {
  return gsap.context(() => {
    if (container && target) {
      // Scroll Trigger 플러그인 사용 시작
      gsap.registerPlugin(ScrollTrigger);

      // 스크롤 영역 설정
      ScrollTrigger.defaults({
        scroller: container,
      });

      gsap.to(target, options);
    }
  });
}
