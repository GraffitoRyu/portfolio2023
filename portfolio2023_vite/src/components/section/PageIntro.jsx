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
      console.log("initiate");
      setTimeout(() => setLoaded(true), 800);
    }
  }, []);

  useEffect(() => {
    if (page.init) {
      console.log("page change");
      setLoaded(page.transStep == "entered");
    }
  }, [page.transStep]);

  return (
    <>
      <h2 className={loaded && titleView ? "in-view" : ""} ref={titleRef}>
        {title.map((d, i) => (
          <div className="intro-title" key={`intro_${i}`}>
            {d}
          </div>
        ))}
      </h2>
      <p className={loaded && phraseView ? "in-view" : ""} ref={phraseRef}>
        {desc.map((d, i) => (
          <React.Fragment key={`desc_${i}`}>
            <span>{d}</span>
            {i < desc.length - 1 ? <br /> : ""}
          </React.Fragment>
        ))}
      </p>
    </>
  );
}
