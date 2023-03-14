import { useEffect, useState } from 'react';

export default function pageHeader() {
  const [curTime, setCurTime] = useState(new Date);

  useEffect(() => {
    setTimeout(() => {
      setCurTime(new Date());
    }, 1000);
  })

  return (
    <header id="pageHeader" className="page-header">
      <div className="common-wrap flex">
        <time className="current-time">
          <span>
            {curTime.toLocaleString("ko-KR", {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </span>
        </time>
        <nav className="gnb flex">
          <button className="gnb-btn" type="button">
            <span>프로필</span>
          </button>
          <button className="gnb-btn" type="button">
            <span>프로젝트</span>
          </button>
        </nav>
        <div className="util-menu">
          <button type="button">Contact</button>
        </div>
      </div>
    </header>
  );
}