export interface SectionHeaderTypes {
  title: string;
  desc: string;
}

export interface SectionHeaderModeTypes {
  [key: string]: SectionHeaderTypes;
  light: SectionHeaderTypes;
  dark: SectionHeaderTypes;
}

export interface IntroTypes {
  bgFrom: string;
  bgTo: string;
  title: string;
  strong: string;
  desc: string;
}

export interface IntroModeTypes {
  [key: string]: IntroTypes;
  light: IntroTypes;
  dark: IntroTypes;
}

export interface VisualTypes {
  border: string;
  fill: string;
}

export interface VisualModeTypes {
  [key: string]: VisualTypes;
  light: VisualTypes;
  dark: VisualTypes;
}
