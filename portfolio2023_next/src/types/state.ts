export type CursorTypes = {
  x: number;
  y: number;
  hover: string;
};

export type DeviceTypes = {
  apple: boolean;
  mobile: boolean;
  tablet: boolean;
  orientation: string;
};

export type CareerDetailHeight = {
  [code: string]: number;
};

export type ScreenSizeTypes = {
  windowWidth: number;
  windowHeight: number;
  headerHeight: number;
  columnWidth: number;
  careerExpandHeight: CareerDetailHeight;
  detailHeaderHeight: number;
};

export type pageStateTypes = {
  init: boolean;
  initComplete: boolean;
  cur: string;
  cover: string;
  loaded: boolean;
  loadComplete: boolean;
  notFound: boolean;
};

export type ThemeStateTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: string;
};

export interface CareerItemsRefTypes {
  [index: string]: HTMLDetailsElement | null;
}

export interface CareerOpenTypes {
  [index: string]: boolean;
}

export interface ScrollRefStateTypes {
  container: HTMLDivElement | null;
  stickyHeight: number;
  header: HTMLElement | null; // <header />
  visualSection: HTMLElement | null;
  career: HTMLDivElement | null;
  careerSection: HTMLElement | null;
  careerItems: CareerItemsRefTypes; // <details />
  careerOpen: CareerOpenTypes;
  experience: HTMLDivElement | null;
  experienceSection: HTMLElement | null; // <section />
  stacks: HTMLDivElement | null;
  stacksSection: HTMLElement | null;
  projectList: HTMLDivElement | null;
  footer: HTMLElement | null; // <footer />
}

export interface DetailScrollRefStateTypes {
  container: HTMLElement | null; // <article />
  scrollHeight: number;
  header: HTMLElement | null; // <header/>
  visual: HTMLDivElement | null;
  visualTitle: HTMLHeadingElement | null;
}

export interface DetailLayoutStateTypes {
  clicked: boolean;
  category: string;
  loading: boolean;
  open: boolean;
  openComplete: boolean;
  dataStatus: string;
}
