import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import ThemeMenuList from "./MenuList";
import ThemeToggleBtn from "./ToggleBtn";

// state
import { ThemeTypes, themeState } from "@/states/theme";

export default function ThemeContainer() {
  const themeRef = useRef<HTMLDivElement>(null);
  const setTheme = useSetRecoilState<ThemeTypes>(themeState);
  const { isOpen } = useRecoilValue<ThemeTypes>(themeState);

  const closeThemeMenu: (
    e: PointerEvent | MouseEvent | TouchEvent
  ) => void = e => {
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
  };

  useEffect(() => {
    document.addEventListener("click", e => closeThemeMenu(e));
    return () => document.removeEventListener("click", e => closeThemeMenu(e));
  }, [isOpen]);

  return (
    <div className="util-item theme-item relative" ref={themeRef}>
      <ThemeToggleBtn />
      <ThemeMenuList />
    </div>
  );
}
