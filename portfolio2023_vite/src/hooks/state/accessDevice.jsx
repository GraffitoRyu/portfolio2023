import { atom, selector } from "recoil";

const condition = {
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

export const checkDevice = {
  apple: () => condition.apple.some(dvc => navigator.userAgent.includes(dvc)),
  mobile: () => condition.mobile.some(dvc => navigator.userAgent.includes(dvc)),
  tablet: () =>
    condition.tablet.some(dvc => navigator.userAgent.includes(dvc)) &&
    condition.mobile.some(dvc => navigator.userAgent.includes(dvc)),
  orientation: () => screen.orientation.type,
};

export const accessDeviceAtom = atom({
  key: "accessDeviceAtom",
  default: {
    apple: checkDevice.apple(),
    mobile: checkDevice.mobile(),
    tablet: checkDevice.tablet(),
    orientation: checkDevice.orientation(),
  },
});

export const accessDeviceSelector = selector({
  key: "accessDeviceSelector",
  get: ({ get }) => get(accessDeviceAtom),
  set: ({ set }) => {
    const isApple = checkDevice.apple();
    const isMobile = checkDevice.mobile();
    const isTablet = checkDevice.tablet();
    const orientationType = checkDevice.orientation();
    const updateState = {
      apple: isApple,
      mobile: isMobile,
      tablet: isTablet,
      orientation: orientationType,
    };

    const _html = document.querySelector("html");

    if (isMobile) _html.classList.add("mobile");
    else _html.classList.remove("mobile");

    if (isApple) _html.classList.add("apple");
    else _html.classList.remove("apple");

    if (isTablet) _html.classList.add("tablet");
    else _html.classList.remove("tablet");

    set(accessDeviceAtom, updateState);
  },
});
