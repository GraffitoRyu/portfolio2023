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

export const checkDevice: ChecksType = {
  apple: () =>
    typeof navigator !== "undefined"
      ? conditions.apple.some((d) => navigator.userAgent.includes(d))
      : false,
  mobile: () =>
    typeof navigator !== "undefined"
      ? conditions.mobile.some((d) => navigator.userAgent.includes(d))
      : false,
  tablet: () =>
    typeof navigator !== "undefined"
      ? conditions.mobile.some((d) => navigator.userAgent.includes(d)) &&
        conditions.tablet.some((d) => navigator.userAgent.includes(d)) &&
        window.innerWidth > 768
      : false,
  orientation: () =>
    typeof window !== "undefined"
      ? window.innerWidth < window.innerHeight
        ? "portrait"
        : "landscape"
      : "landscape",
};
