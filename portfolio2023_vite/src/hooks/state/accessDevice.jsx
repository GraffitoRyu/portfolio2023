import { atom, selector } from "recoil";

export const checkDevice = {
  apple: () => /iP(hone|od|ad)|Mac/.test(navigator.userAgent),
  mobile: () =>
    /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent
    ),
  tablet: () =>
    /Tablet|iPad/i.test(navigator.userAgent) &&
    !navigator.userAgent.includes("Mobile") &&
    /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent
    ),
};

export const accessDeviceAtom = atom({
  key: "accessDeviceAtom",
  default: {
    apple: checkDevice.apple(),
    mobile: checkDevice.mobile(),
    tablet: checkDevice.tablet(),
  },
});

export const accessDeviceSelector = selector({
  key: "accessDeviceSelector",
  get: ({ get }) => get(accessDeviceAtom),
  set: ({ set }) => {
    const isApple = checkDevice.apple();
    const isMobile = checkDevice.mobile();
    const isTablet = checkDevice.tablet();
    const updateState = {
      apple: isApple,
      mobile: isMobile,
      tablet: isTablet,
    };

    const _html = document.querySelector("html");
    _html.classList.remove("mobile", "apple-web", "tablet");
    if (isMobile) _html.classList.add("mobile");
    if (isApple) _html.classList.add("apple");
    if (isTablet) _html.classList.add("tablet");

    set(accessDeviceAtom, updateState);
  },
});
