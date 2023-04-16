import { atom, selector } from "recoil";

export const appleState = atom({
  key: "appleState",
  default: false,
});

export const appleSelector = selector({
  key: "updateAppleState",
  get: ({ get }) => {
    const state = get(appleState);
    return state;
  },
  set: ({ set }) => {
    const updateState = checkApple();
    set(appleState, updateState);
  },
});

function checkApple() {
  return /iP(hone|od|ad)|Mac/.test(navigator.userAgent);
}
