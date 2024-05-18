type TransCoverTypes = {
  [index: string]: string | string[];
  title: string;
  desc: string | string[];
};

type TransCoverPageTypes = {
  [index: string]: TransCoverTypes;
  profile: TransCoverTypes;
  projects: TransCoverTypes;
};
