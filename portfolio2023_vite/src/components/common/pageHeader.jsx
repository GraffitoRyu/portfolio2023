import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { themeStateSelector, applyTheme } from '../../hooks/recoil/theme';

import { ReactComponent as IconGithub } from '../../svg/header/github_icon.svg';
import { ReactComponent as IconNotion } from '../../svg/header/notion_icon.svg';
import { ReactComponent as ThemeLight } from '../../svg/btn/theme_light.svg';
import { ReactComponent as ThemeDark } from '../../svg/btn/theme_dark.svg';

export default function pageHeader() {
  const [curTime, setCurTime] = useState(new Date);

  const [themeState, setThemeState] = useRecoilState(themeStateSelector);
  
  useEffect(() => {
    applyTheme();

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
        <label className="theme-btn block" htmlFor="themeBtn">
          <input id="themeBtn" className="theme-check" type="checkbox" />
          <figure className="theme-switch" theme={themeState}>
            <ThemeLight />
            <ThemeDark />
          </figure>
        </label>
        <div className="util-btn">
          <a href="https://github.com/GraffitoRyu" target="_blank" className="util-link">
            <figure className="util-icon">
              <IconGithub />
            </figure>
          </a>
        </div>
        <div className="util-btn">
          <a href="https://github.com/GraffitoRyu" target="_blank" className="util-link">
            <figure className="util-icon">
              <IconNotion />
            </figure>
          </a>
        </div>
      </div>
    </header>
  );
}