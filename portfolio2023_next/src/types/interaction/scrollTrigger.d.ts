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
