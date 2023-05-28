export interface CursorColorTypes {
  basic: string;
  hover: string;
}

export interface CursorModeTypes {
  [key: string]: CursorColorTypes;
  light: CursorColorTypes;
  dark: CursorColorTypes;
}

export const cursor: CursorModeTypes = {
  light: {
    basic: "#1a1a1a",
    hover: "rgba(26,26,26,0.1)",
  },
  dark: {
    basic: "#fff",
    hover: "rgba(255,255,255,0.1)",
  },
};
