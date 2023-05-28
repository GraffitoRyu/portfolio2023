export interface ToolsColorTypes {
  text: string;
}

export interface ToolsModeType {
  [key: string]: ToolsColorTypes;
  light: ToolsColorTypes;
  dark: ToolsColorTypes;
}

export const tools = {
  light: {
    text: "#ccc",
  },
  dark: {
    text: "#707070",
  },
};
