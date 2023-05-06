import { useRef, useState } from "react";
import { useRecoilState } from "recoil";

// svg
import { ReactComponent as ThemeLight } from "../../svg/btn/theme_light.svg";
import { ReactComponent as ThemeDark } from "../../svg/btn/theme_dark.svg";
import { ReactComponent as ThemeSystem } from "../../svg/btn/theme_system.svg";

// util
import closeByClickOutside from "../../hooks/util/closeByClickOutside";
import { themeStateSelector, getSystemTheme } from "../../hooks/state/theme";

export default function ThemeMenu() {
  const [hover, setHover] = useState(false);
  const [themeState, setThemeState] = useRecoilState(themeStateSelector);
  const themeMenuRef = useRef();
  const themeData = ["light", "dark", "system"];
  const [themeHover, setThemeHover] = useState({
    light: false,
    dark: false,
    system: false,
  });
  const themeIcon = (code, options) => {
    if (code == "light") return <ThemeLight {...options} />;
    else if (code == "dark") return <ThemeDark {...options} />;
    else if (code == "system") return <ThemeSystem {...options} />;
  };

  const toggleThemeMenu = changeTheme => {
    // 토글 동작만 실행
    setThemeState(prev => ({
      ...prev,
      isOpen: !themeState.isOpen,
    }));

    // 변경 테마 없는 경우 종료
    if (!changeTheme) return;

    // 테마 변경
    setThemeState(prev => ({
      ...prev,
      isSystem: changeTheme == "system",
      theme: changeTheme == "system" ? getSystemTheme() : changeTheme,
    }));
  };

  // 메뉴 영역 바깥 클릭 시 닫기
  closeByClickOutside(themeMenuRef, themeStateSelector);

  return (
    <div
      className="util-item theme-menu relative"
      theme={themeState.theme}
      system={themeState.isSystem ? "on" : "off"}
      toggle={themeState.isOpen ? "on" : "off"}
      ref={themeMenuRef}
    >
      <button
        type="button"
        className={`util-btn theme-btn flex items-center justify-center ${
          hover ? "hover" : ""
        }`}
        onClick={() => toggleThemeMenu()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <figure className="util-icon flex items-center justify-center">
          <ThemeLight className="light-icon header-icon" />
          <ThemeDark className="dark-icon header-icon" />
        </figure>
      </button>
      <div className="theme-list absolute top-full">
        {themeData.map(theme => (
          <button
            type="button"
            className={`theme-item flex items-center w-full ${
              themeHover[theme] ? "hover" : ""
            }`}
            item-theme={theme}
            onClick={() => toggleThemeMenu(theme)}
            onMouseEnter={() => setThemeHover({ [theme]: true })}
            onMouseLeave={() => setThemeHover({ [theme]: false })}
            key={theme}
          >
            <figure className="util-icon flex items-center justify-center">
              {themeIcon(theme)}
            </figure>
            <span className="capitalize">{theme}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
