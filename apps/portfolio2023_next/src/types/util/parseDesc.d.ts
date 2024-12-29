type DescDepthTypes = {
  [index: string]: string | string[] | undefined;
  depth1: string;
  depth2: string[];
};

type DescTypes = {
  data: string | DescDepthTypes | undefined;
};

type DescNewLineTypes = {
  data: Array<string | React.ReactNode> | undefined;
  breakLine?: boolean;
};
