export interface VisualTypes {
  border: string;
  fill: string;
}

export interface VisualModeTypes {
  [key: string]: VisualTypes;
  light: VisualTypes;
  dark: VisualTypes;
}

export const visual = {
  light: {
    border: "#a0a0a0",
    fill: "#3a3a3a",
  },
  dark: {
    border: "#a0a0a0",
    fill: "#ccc",
  },
};
