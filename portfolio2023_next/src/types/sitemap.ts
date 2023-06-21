export type SitemapType = {
  [index: string]: string | boolean;
  code: string;
  name: string;
  path: string;
  external: boolean;
  copy: boolean;
  download: boolean;
  header: boolean;
  recruit: boolean;
  contact: boolean;
  resume: boolean;
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
