"use client";

import { useCallback, useRef } from "react";
import { useAtom } from "jotai";

// components
import ThemeMenuList from "./MenuList";
import ThemeToggleBtn from "./ToggleBtn";

// hooks
import useCloseByClickOutside from "@/hooks/interaction/useCloseByClickOutside";

// state
import { themeState } from "@/jotai/theme.state";

/**
 * 테마 메뉴 컨테이너
 * @component
 */
export default function ThemeContainer() {
  const themeRef = useRef<HTMLDivElement | null>(null);
  const [{ isOpen }, setTheme] = useAtom(themeState);

  const updateOpenState = useCallback(() => {
    setTheme(prev => ({
      ...prev,
      isOpen: false,
    }));
  }, [setTheme]);

  useCloseByClickOutside(themeRef.current, isOpen, updateOpenState);

  return (
    <div className="util-item theme-item" ref={themeRef}>
      <ThemeToggleBtn />
      <ThemeMenuList />
    </div>
  );
}
