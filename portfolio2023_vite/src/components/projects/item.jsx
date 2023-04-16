import React, { useEffect, useRef, useState } from "react";

// svg
import { ReactComponent as IconOpenProject } from "../../svg/btn/project_open.svg";

// util
import getSlideTextSet from "../../hooks/util/getSlideTextSet";

export default function projectItem(props) {
  const d = props.data;
  const titleText = d.title.replace("\n", " ");

  const userLocale = "en-US"; //navigator.language;
  const dateOptions = {
    month: "short",
    year: "numeric",
  };

  const [hover, setHover] = useState(false);
  const [textArr, setTextArr] = useState([titleText]);
  const slideText = useRef();
  const [slideDuration, setSlideDuration] = useState(2);
  useEffect(() => {
    const { array, width } = getSlideTextSet(slideText);
    setTextArr(array);
    setSlideDuration((width / 1000) * 3.2);
  }, []);

  return (
    <li
      className={`project-item flex w-full relative ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className="summary relative w-full overflow-hidden lg:text-right"
        type="button"
      >
        <div className="wrapper relative">
          <div className="period-container overflow-hidden lg:absolute left-full">
            <div className="period flex items-center">
              <time>{d.period[0].toLocaleString(userLocale, dateOptions)}</time>
              <span className="block"></span>
              <time>{d.period[1].toLocaleString(userLocale, dateOptions)}</time>
            </div>
          </div>
          <div className="h3-container overflow-hidden">
            <h3 className="summary-title w-full">
              {d.title.includes("\n")
                ? d.title.split("\n").map((t, i) => (
                    <React.Fragment key={`title_${i}`}>
                      {t}
                      <br />
                    </React.Fragment>
                  ))
                : d.title}
            </h3>
          </div>
          <div className="p-container overflow-hidden">
            <p className="w-full">{d.desc}</p>
          </div>
          <div className="role-container overflow-hidden">
            <ul className="role flex items-center lg:justify-end">
              {d.role.map((role, i) => (
                <li className="flex items-center" key={`role_${i}`}>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3
          className="hover-title absolute top-full w-full text-left underline whitespace-nowrap flex"
          ref={slideText}
        >
          {textArr.map((t, i) => (
            <span
              key={`t_${i}}`}
              style={{ animationDuration: `${slideDuration}s` }}
            >
              {d.title.replace("\n", " ")}
            </span>
          ))}
        </h3>
        <figure className="project-open-icon absolute">
          <IconOpenProject />
        </figure>
      </button>
    </li>
  );
}
