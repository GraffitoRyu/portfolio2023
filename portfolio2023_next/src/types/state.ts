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
  visual: HTMLElement | null; // <section />
  career: HTMLElement | null; // <section />
  careerItems: CareerItemsRefTypes; // <details />
  careerOpen: CareerOpenTypes;
  experience: HTMLElement | null; // <section />
  stacks: HTMLElement | null; // <section />
  projectList: HTMLElement | null; // <section />
  footer: HTMLElement | null; // <footer />
}

export interface DetailScrollRefStateTypes {
  container: HTMLElement | null; // <article />
  visual: HTMLDivElement | null;
  visualTitle: HTMLDivElement | null;
}

export interface DetailLayoutStateTypes {
  open: boolean;
  openComplete: boolean;
  dataStatus: string;
}
