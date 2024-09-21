/**
 * style preset; 이미지 props
 * @desc
 * - w: width
 * - h: width
 * - fit: object-fit
 */
type PresetImageProps = {
  /**
   * width
   */
  w: number | string;
  /**
   * height
   */
  h: number | string;
  /**
   * object-fit
   */
  fit: string;
};
/**
 * style preset; 사이즈 css 생성 props
 * @desc
 * - w: width
 * - h: width
 * - m: margin
 * - p: padding
 * - r: border-radius
 * - mt: margin-top
 * - mr: margin-right
 * - mb: margin-bottom
 * - ml: margin-left
 * - pt: padding-top
 * - pr: padding-right
 * - pb: padding-bottom
 * - pl: padding-left
 */
type PresetSizeProps = {
  /**
   * width
   */
  w: string | number;
  /**
   * height
   */
  h: string | number;
  /**
   * margin
   * - string | number
   * - (string | number)[]; length: 1 ~ 4
   * @example
   * ```typescript
   * ..., m: 12, ...
   * ..., m: "100%", ...
   * ..., m: "5rem", ...
   * ..., m: [8, 16], ...
   * ..., m: [5, 16, 10], ...
   * ..., m: [6, 12, 6, 24], ...
   * ```
   */
  m: string | number | Array<string | number>;
  /**
   * padding
   * - string | number
   * - (string | number)[]; length: 1 ~ 4
   * @example
   * ```typescript
   * ..., p: 12, ...
   * ..., p: "100%", ...
   * ..., p: "5rem", ...
   * ..., p: [8, 16], ...
   * ..., p: [5, 16, 10], ...
   * ..., p: [6, 12, 6, 24], ...
   * ```
   */
  p: string | number | Array<string | number>;
  /**
   * border-radius
   * - string | number
   * - (string | number)[]; length: 1 ~ 4
   * @example
   * ```typescript
   * ..., r: 12, ...
   * ..., r: "50%", ...
   * ..., r: "5rem", ...
   * ..., r: [8, 16], ...
   * ..., r: [5, 16, 10], ...
   * ..., r: [6, 12, 6, 24], ...
   * ```
   */
  r: string | number | Array<string | number>;
  /**
   * margin-top
   */
  mt: string | number;
  /**
   * margin-right
   */
  mr: string | number;
  /**
   * margin-bottom
   */
  mb: string | number;
  /**
   * margin-left
   */
  ml: string | number;
  /**
   * padding-top
   */
  pt: string | number;
  /**
   * padding-right
   */
  pr: string | number;
  /**
   * padding-bottom
   */
  pb: string | number;
  /**
   * padding-left
   */
  pl: string | number;
};

/**
 * style preset; flex box 설정 props
 * @desc
 * - dir: flex-direction
 * - std: justify-content
 * - cross: align-items
 * - wrap: flex-wrap
 * - start: justify-content / align-items -> flex-start
 * - end: justify-content / align-items -> flex-end
 */
type PresetFlexProps = {
  /**
   * flex-direction
   * - row (default)
   * - column
   */
  dir: string;
  /**
   * justify-content
   * - start, end 옵션보다 우선순위
   */
  std: string;
  /**
   * align-items
   * - start, end 옵션보다 우선순위
   */
  cross: string;
  /**
   * flex-wrap
   */
  wrap: string;
  /**
   * flex-start 일괄 적용 옵션
   * - start 또는 end 중 하나만 적용한다.
   * @example
   * ```typescript
   * // 이 코드는
   * flex({ ..., start: true, ... });
   * // 이 것과 같다.
   * styled`
   *  ...
   *  justify-content: flex-start;
   *  align-items: flex-start;
   *  ...
   * `
   * ```
   * @example
   * ```typescript
   * // boolean 배열 용법
   * flex({ ..., start: [true], ... });
   * styled`
   *  ...
   *  justify-content: flex-start;
   *  align-items: center;
   *  ...
   * `
   * ```
   * @example
   * ```typescript
   * // boolean 배열 용법
   * flex({ ..., start: [false, true], ... });
   * styled`
   *  ...
   *  justify-content: center;
   *  align-items: flex-start;
   *  ...
   * `
   * ```
   */
  start: boolean | boolean[];
  /**
   * flex-end 일괄 적용 옵션
   * - start 또는 end 중 하나만 적용한다.
   * @example
   * ```typescript
   * // 이 코드는
   * flex({ ..., end: true, ... });
   * // 이 것과 같다.
   * styled`
   *  ...
   *  justify-content: flex-end;
   *  align-items: flex-end;
   *  ...
   * `
   * ```
   * @example
   * ```typescript
   * // boolean 배열 용법
   * flex({ ..., end: [true], ... });
   * styled`
   *  ...
   *  justify-content: flex-end;
   *  align-items: center;
   *  ...
   * `
   * ```
   * @example
   * ```typescript
   * // boolean 배열 용법
   * flex({ ..., end: [false, true], ... });
   * styled`
   *  ...
   *  justify-content: center;
   *  align-items: flex-end;
   *  ...
   * `
   * ```
   */
  end: boolean | boolean[];
};

/**
 * style preset; position css 설저 props
 * @desc
 * - type: position (relative, absolute, fixed, sticky, static, ...)
 * - top
 * - left
 * - bottom
 * - right
 * - z: z-index
 * - center: 가운데 정렬 옵션
 */
type PresetPositionProps = {
  /**
   * position
   * - relative, absolute, fixed, sticky, static, ...
   */
  type: string;
  /**
   * top
   */
  top: string | number;
  /**
   * left
   */
  left: string | number;
  /**
   * bottom
   */
  bottom: string | number;
  /**
   * right
   */
  right: string | number;
  /**
   * z-index
   */
  z: number;
  /**
   * 가운데 정렬 옵션
   * - absolute 또는 fixed에서 동작한다.
   * @example
   * ```typescript
   * position({ ..., center: true ... });
   * styled`
   *  top: 50%;
   *  left: 50%;
   *  transform: translate(-50%, -50%);
   * `
   * ```
   * @example
   * ```typescript
   * position({ ..., center: "x" ... });
   * styled`
   *  left: 50%;
   *  transform: translateX(-50%);
   * `
   * ```
   * @example
   * ```typescript
   * position({ ..., center: "y" ... });
   * styled`
   *  top: 50%;
   *  transform: translateY(-50%);
   * `
   * ```
   */
  center: boolean | "x" | "y";
};

/**
 * style preset; 버튼 css props
 * @desc
 * - w: width
 * - h: height (required)
 * - r: border-radius
 * - bw: border-width
 * - color: text color, border color, svg color, ...
 */
type PresetBtnProps = {
  /**
   * width
   */
  w?: number | string;
  /**
   * height
   * - 필수
   */
  h: number | string;
  /**
   * border-radius
   */
  r?: number | string;
  /**
   * border-width
   */
  bw?: number;
  /**
   * 버튼 모든 색상에 관여
   * - border-color
   * - text color
   * - svg (rect, circle, path) fill, stroke
   */
  color?: string;
};

/**
 * style preset; 트랜지션 easing 데이터
 * @see https://easings.net/
 * @desc
 * - quad
 * - quart
 * - expo
 * - back
 */
type PresetEasingTypes = {
  [index: string]: string;
  quad: string;
  quart: string;
  expo: string;
  back: string;
};

/**
 * style preset; 폰트 css 설정 props
 * @desc
 * - size: font-size
 * - weight: font-weight
 * - height: line-height
 * - spacing: letter-spacing
 * - family: font-family
 * - whitespace: white-space
 * - transform: text-transform
 * - deco: text-decoration
 * - style: font-style
 */
type PresetFontProps = {
  /**
   * font-size
   */
  size: number | string;
  /**
   * font-weight
   */
  weight: number | string;
  /**
   * line-height
   */
  height: number | string;
  /**
   * letter-spacing
   */
  spacing: number | string;
  /**
   * font-family
   * @example
   * ```typescript
   * font({ ..., family: "Roboto", ... })
   * styled`
   *  ...
   *  font-family: "Roboto",
   *  ...
   * `
   * ```
   * @example
   * ```typescript
   * font({ ..., family: ["Roboto", "Noto Sans KR"], ... })
   * styled`
   *  ...
   *  font-family: "Roboto", "Noto Sans KR";
   *  ...
   * `
   * ```
   */
  family: string | string[];
  /**
   * white-space
   */
  whitespace: string;
  /**
   * text-transform
   */
  transform: string;
  /**
   * text-decoration
   */
  deco: string;
  /**
   * font-style
   */
  style: string;
};

/**
 * style preset; 트랜지션 css 생성 props
 * @desc
 * - prop: transition-property
 * - time: transition-duration
 * - easing: transition-timing-function (optional)
 * - delay: transition-delay (optional)
 */
type PresetTransitionProps = {
  /**
   * transition-property
   */
  prop: string;
  /**
   * transition-duration
   */
  time: string;
  /**
   * transition-timing-function
   * - optional
   * @see https://easings.net/
   */
  easing?: string;
  /**
   * transition-delay
   * - optional
   */
  delay?: string;
};
