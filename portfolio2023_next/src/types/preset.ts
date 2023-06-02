export type ImageTypes = {
  width?: number | string;
  height?: number | string;
  fit?: string;
};

export type SizeTypes = {
  width?: string | number;
  height?: string | number;
  margin?: string | number | Array<string | number>; // length: 1 ~ 4
  padding?: string | number | Array<string | number>; // length: 1 ~ 4
  mt?: string | number; // margin-top
  mr?: string | number; // margin-right
  mb?: string | number; // margin-bottom
  ml?: string | number; // margin-left
  pt?: string | number; // padding-top
  pr?: string | number; // padding-right
  pb?: string | number; // padding-bottom
  pl?: string | number; // padding-left
};

export type FlexTypes = {
  dir?: string | undefined;
  std?: string | undefined;
  cross?: string | undefined;
  wrap?: string | undefined;
};

export type PositionTypes = {
  type?: string | undefined;
  top?: string | number;
  left?: string | number;
  bottom?: string | number;
  right?: string | number;
  z?: number | undefined;
  center?: boolean | undefined;
};
