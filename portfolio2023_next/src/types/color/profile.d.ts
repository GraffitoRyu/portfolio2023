interface ProfileCareerColorTypes {
  border: string;
  borderHover: string;
  bgHover: string;
  period: string;
  periodHover: string;
  role: string;
  roleHover: string;
  company: string;
  companyHover: string;
  detailTitle: string;
  detailContents: string;
  icon: string;
  iconHover: string;
  expandBg: string;
}

interface ProfileCareerModeTypes {
  [index: string]: ProfileCareerColorTypes;
  light: ProfileCareerColorTypes;
  dark: ProfileCareerColorTypes;
}

interface ProfileExperienceColorTypes {
  title: string;
  desc: string;
}

interface ProfileExperienceModeTypes {
  [index: string]: ProfileExperienceColorTypes;
  light: ProfileExperienceColorTypes;
  dark: ProfileExperienceColorTypes;
}

interface ProfileStacksColorTypes {
  [index: string]: string;
  legendTitle: string;
  legendLabel: string;
  border: string;
  category: string;
  stackName: string;
  levelFill: string;
  levelEmpty: string;
  levelFull: string;
}

interface ProfileStacksModeType {
  [index: string]: ProfileStacksColorTypes;
  light: ProfileStacksColorTypes;
  dark: ProfileStacksColorTypes;
}
