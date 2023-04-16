import { atom, selector } from "recoil";

export const mobileState = atom({
  key: "mobileState",
  default: false,
});

export const mobileSelector = selector({
  key: "updateMobileState",
  get: ({ get }) => {
    const state = get(mobileState);
    return state;
  },
  set: ({ set }) => {
    const updateState = checkMobile();
    set(mobileState, updateState);
  },
});

function checkMobile() {
  return /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
    navigator.userAgent
  );
}
