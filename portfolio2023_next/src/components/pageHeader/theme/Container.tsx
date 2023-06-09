"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import ThemeMenuList from "./MenuList";
import ThemeToggleBtn from "./ToggleBtn";

// types
import { ThemeStateTypes } from "@/types/state";

// state
import { themeState } from "@/states/theme";

// util
import closeByClickOutSide from "@/util/closeByClickOutside";

export default function ThemeContainer() {
  const themeRef = useRef<HTMLDivElement | null>(null);
  const setTheme = useSetRecoilState<ThemeStateTypes>(themeState);
  const { isOpen } = useRecoilValue<ThemeStateTypes>(themeState);

  const closeThemeMenu = useCallback(
    (e: PointerEvent | MouseEvent) =>
      closeByClickOutSide(e, isOpen, themeRef, () =>
        setTheme(prev => ({
          ...prev,
          isOpen: false,
        }))
      ),
    [isOpen, setTheme]
  );

  useEffect(() => {
    document.addEventListener("click", e => closeThemeMenu(e));
    return () => document.removeEventListener("click", e => closeThemeMenu(e));
  }, [closeThemeMenu]);

  return (
    <div className="util-item theme-item relative" ref={themeRef}>
      <ThemeToggleBtn />
      <ThemeMenuList />
    </div>
  );
}
