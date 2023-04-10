import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { themeStateSelector, getSystemTheme } from "../../hooks/recoil/theme";
import checkHeaderHeight from "../../hooks/util/checkHeaderHeight";
import closeByClickOutside from "../../hooks/util/closeByClickOutside";

import { ReactComponent as IconGithub } from "../../svg/header/github_icon.svg";
import { ReactComponent as IconNotion } from "../../svg/header/notion_icon.svg";
import { ReactComponent as ThemeLight } from "../../svg/btn/theme_light.svg";
import { ReactComponent as ThemeDark } from "../../svg/btn/theme_dark.svg";
import { ReactComponent as ThemeSystem } from "../../svg/btn/theme_system.svg";

import { sitemap } from "../../hooks/recoil/sitemap";

export default function pageHeader() {
  const [curTime, setCurTime] = useState(new Date());
  const [themeState, setThemeState] = useRecoilState(themeStateSelector);
  const [toggleTheme, setToggleTheme] = useState(false);
  const themeMenu = useRef();

  const sitemapData = useRecoilValue(sitemap).filter((d) => !d.external);

  const toggleThemeMenu = (changeTheme) => {
    setToggleTheme(!toggleTheme);
    if (!changeTheme) return;
    setThemeState((prev) => ({
      ...prev,
      isSystem: changeTheme == "system",
      theme: changeTheme == "system" ? getSystemTheme() : changeTheme,
    }));
  };

  useEffect(() => {
    checkHeaderHeight();

    closeByClickOutside(themeMenu, toggleTheme, () => {
      setToggleTheme(false);
    });

    setTimeout(() => {
      setCurTime(new Date());
    }, 1000);
  }, [curTime, themeMenu]);

  return (
    <header
      id="pageHeader"
      className="page-header flex side-padding sticky w-full top-0"
    >
      <div className="current-time flex items-center">
        <time>
          {curTime.toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
        </time>
      </div>
      <nav className="gnb flex items-center ml-auto">
        {sitemapData.map((d, i) => {
          return (
            <Link
              className="gnb-btn items-center relative"
              to={d.path}
              key={`gnb_${i}`}
            >
              <span>{d.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="util-menu flex items-center">
        <div
          className="util-item theme-menu relative"
          theme={themeState.theme}
          system={themeState.isSystem ? "on" : "off"}
          toggle={toggleTheme ? "on" : "off"}
          ref={themeMenu}
        >
          <button
            type="button"
            className="util-btn theme-btn flex items-center justify-center"
            onClick={() => toggleThemeMenu()}
          >
            <figure className="util-icon flex items-center justify-center">
              <ThemeLight className="light-icon header-icon" />
              <ThemeDark className="dark-icon header-icon" />
            </figure>
          </button>
          <div className="theme-list absolute top-full">
            <button
              type="button"
              className="theme-item flex items-center w-full"
              item-theme="light"
              onClick={() => toggleThemeMenu("light")}
            >
              <figure className="util-icon flex items-center justify-center">
                <ThemeLight />
              </figure>
              <span>Light</span>
            </button>
            <button
              type="button"
              className="theme-item flex items-center w-full"
              item-theme="dark"
              onClick={() => toggleThemeMenu("dark")}
            >
              <figure className="util-icon flex items-center justify-center">
                <ThemeDark />
              </figure>
              <span>Dark</span>
            </button>
            <button
              type="button"
              className="theme-item flex items-center w-full"
              item-theme="system"
              onClick={() => toggleThemeMenu("system")}
            >
              <figure className="util-icon flex items-center justify-center">
                <ThemeSystem />
              </figure>
              <span>System</span>
            </button>
          </div>
        </div>
        <div className="util-item">
          <a
            href="https://github.com/GraffitoRyu"
            target="_blank"
            className="util-btn external-btn flex items-center justify-center"
          >
            <figure className="util-icon">
              <IconGithub className="header-icon" />
            </figure>
          </a>
        </div>
        <div className="util-item">
          <a
            href="https://github.com/GraffitoRyu"
            target="_blank"
            className="util-btn external-btn flex items-center justify-center"
          >
            <figure className="util-icon">
              <IconNotion className="header-icon" />
            </figure>
          </a>
        </div>
      </div>
    </header>
  );
}
