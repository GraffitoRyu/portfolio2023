import { atom, selector } from "recoil";

export const checkDevice = {
  apple: () => /iP(hone|od|ad)|Mac/.test(navigator.userAgent),
  mobile: () =>
    /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent
    ),
  tablet: () =>
    /Tablet|iPad/i.test(navigator.userAgent) &&
    /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent
    ),
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
