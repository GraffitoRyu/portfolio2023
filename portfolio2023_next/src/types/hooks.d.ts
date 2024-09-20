type CustomTweenType = {
  target?: Element | undefined | null;
  options?: UseGSAPAnimationHookTweenOption[];
  direction?: string;
};
type HookScrollTriggerProps = {
  container: Element | undefined | null;
  normalize?: boolean;
  timeline?: boolean;
  matchMediaOptions?: object;
  tweenArr?: CustomTweenType[];
  create?: object;
};

type ResizeObserverCallbackPropsType = {
  [sizeKey: string]: number;
  width: number;
  height: number;
};
