export type DescDepthTypes = {
  [index: string]: string | string[] | undefined;
  depth1: string;
  depth2: string[];
};

export type DescTypes = {
  data: string | DescDepthTypes | undefined;
};

export type DescNewLineTypes = {
  data: Array<string | JSX.Element> | undefined;
  breakLine?: boolean;
};
