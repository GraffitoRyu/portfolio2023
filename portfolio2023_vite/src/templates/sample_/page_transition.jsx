import React, { useEffect, useState } from 'react';
import useInterval from '../../hooks/util/useInterval';

import '../../scss/sample.scss';

export default function pageTransition(props) {
  const [pt, setPt] = useState(false);
  const [counter, setCounter] = useState(false);
  const [percent, setPercent] = useState(0);

  const activate = () => {
    const prevPtState = pt;

    setPercent(0);
    setPt(!prevPtState);

    setTimeout(() => {
      setCounter(!prevPtState);
    }, prevPtState ? 0 : 600);
  }

  useInterval(() => {
    setPercent(percent + 1)
  }, (pt && counter && percent < 100) ? 100 : null);
  
  return (
    <div
      id="pageTransition"
      className={`page-transition-container ${pt ? "action" : ""} ${counter ? 'counter' : ''}`}
    >
      <div className="page-transition-box page-transition-upper"></div>
      <div className="page-transition-box page-transition-lower"></div>
      <figure className="page-loading">
        <div
          className="page-loading-gauge"
          style={{ width: percent + "%" }}
        ></div>
        <span
          className="page-loading-value"
          // style={{ opacity: percent/100 }}
        >{percent}</span>
      </figure>
      <button
        id="actionBtn"
        className="action-btn"
        onClick={activate}
        type="button"
      >
        <span>action</span>
      </button>
    </div>
  );
}