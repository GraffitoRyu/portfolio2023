import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useInView } from "react-intersection-observer";

// state
import { pageState } from "../../hooks/state/page";

export default function PageIntro(props) {
  const title = props?.title;
  const desc = props?.desc;

  const page = useRecoilValue(pageState);
  const [loaded, setLoaded] = useState(false);
  const { ref: titleRef, inView: titleView } = useInView({
    triggerOnce: loaded,
    rootMargin: "80px",
    delay: 200,
  });
  const { ref: phraseRef, inView: phraseView } = useInView({
    triggerOnce: loaded,
    rootMargin: "80px",
    delay: 400,
  });

  useEffect(() => {
    if (!page.init && page.transStep == "entered") {
      setTimeout(() => setLoaded(true), 800);
    }
  }, []);

  useEffect(() => {
    if (page.init) {
      setLoaded(page.transStep == "entered");
    }
  }, [page.transStep]);

  return (
    <>
      <h2 className={loaded && titleView ? "in-view" : ""} ref={titleRef}>
        {title.map((d, i) => (
          <div
            className="intro-title"
            key={`intro_${i}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {d}
          </div>
        ))}
      </h2>
      <p className={loaded && phraseView ? "in-view" : ""} ref={phraseRef}>
        {desc.map((d, i) => (
          <React.Fragment key={`desc_${i}`}>
            <span
              style={{ transitionDelay: `${(title.length + i - 1) * 0.14}s` }}
            >
              {d}
            </span>
            {i < desc.length - 1 ? <br /> : ""}
          </React.Fragment>
        ))}
      </p>
    </>
  );
}
