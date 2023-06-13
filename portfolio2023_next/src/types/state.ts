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

export type pageStateTypes = {
  init: boolean;
  cur: string;
  cover: string;
  loaded: boolean;
  notFound: boolean;
};

export type ThemeStateTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: string;
};

export interface ScrollRefStateTypes {
  container: HTMLDivElement | null;
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
