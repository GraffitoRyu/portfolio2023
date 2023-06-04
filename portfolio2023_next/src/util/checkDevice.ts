interface ConditionsType {
  apple: string[];
  tablet: string[];
  mobile: string[];
}
interface ChecksType {
  apple: () => boolean;
  tablet: () => boolean;
  mobile: () => boolean;
  orientation: () => string;
}

export const conditions: ConditionsType = {
  apple: ["iPhone", "iPad", "iPod", "Mac"],
  tablet: ["Tablet", "iPad"],
  mobile: [
    "Android",
    "Mobile",
    "iPhone",
    "iPod",
    "iPad",
    "BlackBerry",
    "IEMobile",
    "Kindle",
    "NetFront",
    "Silk-Accelerated",
    "hpwOS",
    "webOS",
    "Fennec",
    "Minimo",
    "Opera Mobi",
    "Opera Mini",
    "Blazer",
    "Dolfin",
    "Dolphin",
    "Skyfire",
    "Zune",
  ],
};

const _user = navigator.userAgent;

export const checkDevice: ChecksType = {
  apple: () => conditions.apple.some((d) => _user.includes(d)),
  mobile: () => conditions.mobile.some((d) => _user.includes(d)),
  tablet: () =>
    conditions.mobile.some((d) => _user.includes(d)) &&
    conditions.tablet.some((d) => _user.includes(d)) &&
    window.innerWidth > 768,
  orientation: () =>
    window.innerWidth < window.innerHeight ? "portrait" : "landscape",
};
