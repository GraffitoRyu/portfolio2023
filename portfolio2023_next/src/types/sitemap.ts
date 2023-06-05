export type SitemapType = {
  [index: string]: string | boolean;
  code: string;
  name: string;
  path: string;
  header: boolean;
  contact: boolean;
  external: boolean;
};

export type SitemapStateTypes = {
  [index: string]: string;
  profile: string;
  projects: string;
  github: string;
  notion: string;
};
export type ContactStateTypes = {
  [index: string]: string;
  jumpit: string;
  wanted: string;
  saramin: string;
  jobkorea: string;
  rocketpunch: string;
  kakao: string;
};
