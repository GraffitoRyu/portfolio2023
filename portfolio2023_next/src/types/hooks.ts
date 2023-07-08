export type CustomTweenType = {
  target?: Element | undefined | null;
  options?: object[];
  direction?: string;
};
export type HookScrollTriggerProps = {
  container: Element | undefined | null;
  normalize?: boolean;
  timeline?: boolean;
  matchMediaOptions?: object;
  tweenArr: CustomTweenType[];
};
