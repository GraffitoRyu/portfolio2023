"use client";

import { useCallback, useEffect, useRef } from "react";
import { useAtom } from "jotai";

// components
import ThemeMenuList from "./MenuList";
import ThemeToggleBtn from "./ToggleBtn";

// state
import { themeState } from "@/jotai/theme.state";

// util
import closeByClickOutSide from "@/util/interactions/closeByClickOutside";

export default function ThemeContainer() {
  const themeRef = useRef<HTMLDivElement | null>(null);
  const [{ isOpen }, setTheme] = useAtom<ThemeStateTypes>(themeState);

  const closeThemeMenu = useCallback(
    (e: PointerEvent | MouseEvent) => {
      if (!themeRef.current) return false;
      return closeByClickOutSide(e, isOpen, themeRef, () =>
        setTheme(prev => ({
          ...prev,
          isOpen: false,
        })),
      );
    },
    [isOpen, themeRef, setTheme],
  );

  useEffect(() => {
    if (themeRef.current) {
      document.addEventListener("click", e => closeThemeMenu(e));
      return () =>
        document.removeEventListener("click", e => closeThemeMenu(e));
    }
  }, [themeRef, closeThemeMenu]);

  return (
    <div className="util-item theme-item" ref={themeRef}>
      <ThemeToggleBtn />
      <ThemeMenuList />
    </div>
  );
}
