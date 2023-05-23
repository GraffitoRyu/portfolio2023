import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

// components
import ThemeMenuList from "./MenuList";
import ThemeToggleBtn from "./ToggleBtn";

// state
import { themeSelector } from "@/states/theme";

export default function ThemeContainer() {
  const themeRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useRecoilState(themeSelector);

  const closeThemeMenu: (
    e: PointerEvent | MouseEvent | TouchEvent
  ) => void = e => {
    if (
      theme.isOpen == true &&
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    document.addEventListener("click", closeThemeMenu);
    return () => document.removeEventListener("click", closeThemeMenu);
  }, [theme.isOpen]);

  return (
    <div className="util-item theme-item relative" ref={themeRef}>
      <ThemeToggleBtn />
      <ThemeMenuList />
    </div>
  );
}
