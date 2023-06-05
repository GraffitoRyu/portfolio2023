export type transCoverTypes = {
  [index: string]: string | string[];
  title: string;
  desc: string | string[];
};

export type transCoverPageTypes = {
  [index: string]: transCoverTypes;
  profile: transCoverTypes;
  projects: transCoverTypes;
};
