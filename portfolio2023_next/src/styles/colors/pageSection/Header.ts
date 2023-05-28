export interface SectionHeaderTypes {
  title: string;
  desc: string;
}

export interface SectionHeaderModeTypes {
  [key: string]: SectionHeaderTypes;
  light: SectionHeaderTypes;
  dark: SectionHeaderTypes;
}

export const sectionHeader = {
  light: {
    title: "#3a3a3a",
    desc: "#a0a0a0",
  },
  dark: {
    title: "#fff",
    desc: "#707070",
  },
};
