import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { themeStateSelector } from '../../hooks/recoil/theme';

import { ReactComponent as IconGithub } from '../../svg/header/github_icon.svg';
import { ReactComponent as IconNotion } from '../../svg/header/notion_icon.svg';
import { ReactComponent as ThemeLight } from '../../svg/btn/theme_light.svg';
import { ReactComponent as ThemeDark } from '../../svg/btn/theme_dark.svg';
import { ReactComponent as ThemeSystem } from '../../svg/btn/theme_system.svg';

export default function pageHeader() {
  const [curTime, setCurTime] = useState(new Date);

  const [themeState, setThemeState] = useRecoilState(themeStateSelector);
  
  useEffect(() => {
    setTimeout(() => {
      setCurTime(new Date());
    }, 1000);
  }, [curTime]);

  return (
    <header id="pageHeader" className="page-header flex side-padding">
      <time className="current-time">
        <span>
          {curTime.toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
        </span>
      </time>
      <nav className="gnb flex items-center">
        <button className="gnb-btn items-center" type="button">
          <span>프로필</span>
        </button>
        <button className="gnb-btn items-center" type="button">
          <span>프로젝트</span>
        </button>
      </nav>
      <div className="util-menu flex items-center">
        <div className="util-item theme-menu relative" theme={themeState}>
          <button type="button" className="util-btn theme-btn flex items-center justify-center">
            <figure className="util-icon flex items-center justify-center">
              <ThemeLight className="light-icon" />
              <ThemeDark className="dark-icon" />
            </figure>
          </button>
          <div className="theme-list absolute">
            <button type="button" className="theme-item flex items-center" item-theme="light">
              <figure className="util-icon flex items-center justify-center">
                <ThemeLight />
              </figure>
              <span>Light</span>
            </button>
            <button type="button" className="theme-item flex items-center" item-theme="dark">
              <figure className="util-icon flex items-center justify-center">
                <ThemeDark />
              </figure>
              <span>Dark</span>
            </button>
            <button type="button" className="theme-item flex items-center" item-theme="system">
              <figure className="util-icon flex items-center justify-center">
                <ThemeSystem />
              </figure>
              <span>System</span>
            </button>
          </div>
        </div>
        <div className="util-item">
          <a href="https://github.com/GraffitoRyu" target="_blank" className="util-btn external-btn flex items-center justify-center">
            <figure className="util-icon">
              <IconGithub />
            </figure>
          </a>
        </div>
        <div className="util-item">
          <a href="https://github.com/GraffitoRyu" target="_blank" className="util-btn external-btn flex items-center justify-center">
            <figure className="util-icon">
              <IconNotion />
            </figure>
          </a>
        </div>
      </div>
    </header>
  );
}