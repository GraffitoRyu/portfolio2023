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
  container: React.MutableRefObject<HTMLDivElement | null> | null;
  footer: React.MutableRefObject<HTMLElement | null> | null; // <footer />
}

export interface DetailScrollRefStateTypes {
  container: React.MutableRefObject<HTMLElement | null> | null; // <article />
  visual: React.MutableRefObject<HTMLDivElement | null> | null;
}

export interface DetailLayoutStateTypes {
  open: boolean;
  openComplete: boolean;
}
