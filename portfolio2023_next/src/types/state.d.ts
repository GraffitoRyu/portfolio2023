type CursorTypes = {
  x: number;
  y: number;
  hover: string;
};

type DeviceTypes = {
  apple: boolean;
  mobile: boolean;
  tablet: boolean;
  orientation: string;
};

type CareerDetailHeight = {
  [code: string]: number;
};

type ScreenSizeTypes = {
  windowWidth: number;
  windowHeight: number;
  headerHeight: number;
  columnWidth: number;
  careerExpandHeight: CareerDetailHeight;
  detailHeaderHeight: number;
};

type PageStateTypes = {
  init: boolean;
  initComplete: boolean;
  cur: string;
  cover: string;
  loaded: boolean;
  loadComplete: boolean;
  notFound: boolean;
};

type ThemeStateTypes = {
  isOpen: boolean;
  isSystem: boolean;
  theme: string;
};

interface CareerItemsRefTypes {
  [index: string]: HTMLDetailsElement | null;
}

interface CareerOpenTypes {
  [index: string]: boolean;
}

interface ScrollRefStateTypes {
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

interface DetailScrollRefStateTypes {
  container: HTMLElement | null; // <article />
  scrollHeight: number;
  header: HTMLElement | null; // <header/>
  visual: HTMLDivElement | null;
  visualTitle: HTMLHeadingElement | null;
}

interface DetailLayoutStateTypes {
  clicked: boolean;
  category: string;
  loading: boolean;
  open: boolean;
  openComplete: boolean;
  dataStatus: string;
}
