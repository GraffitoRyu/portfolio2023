import { atom, selector } from "recoil";

export const tabletState = atom({
  key: "tabletState",
  default: false,
});

export const tabletSelector = selector({
  key: "updateTabletState",
  get: ({ get }) => {
    const state = get(tabletState);
    return state;
  },
  set: ({ set }, mobileState) => {
    const updateState = checkTablet(mobileState);
    set(tabletState, updateState);
  },
});

function checkTablet(mobileState) {
  return (
    /Tablet|iPad/i.test(navigator.userAgent) &&
    !navigator.userAgent.includes("Mobile") &&
    mobileState
  );
}
