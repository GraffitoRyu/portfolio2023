"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import ThemeMenuList from "./MenuList";
import ThemeToggleBtn from "./ToggleBtn";

// state
import { ThemeStateTypes, themeState } from "@/states/theme";

export default function ThemeContainer() {
  const themeRef = useRef<HTMLDivElement>(null);
  const setTheme = useSetRecoilState<ThemeStateTypes>(themeState);
  const { isOpen } = useRecoilValue<ThemeStateTypes>(themeState);

  const closeThemeMenu = useCallback(
    (e: PointerEvent | MouseEvent | TouchEvent) => {
      if (
        isOpen == true &&
        e?.target instanceof Element &&
        themeRef?.current instanceof Element
      ) {
        const isTargetContainsRef = themeRef.current.contains(e.target);
        if (!isTargetContainsRef) {
          setTheme(prev => ({
            ...prev,
            isOpen: false,
          }));
        }
      }
    },
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
