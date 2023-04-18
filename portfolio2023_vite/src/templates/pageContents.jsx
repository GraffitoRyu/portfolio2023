import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useOutlet } from "react-router-dom";

// components
import SeoHelmet from "../components/seo/helmet";
import PageHeader from "../components/common/pageHeader";
import PageFooter from "../components/common/pageFooter";

// state
import { scrollState } from "../hooks/state/scroll";

// util
import windowScroll from "../hooks/util/windowScroll";
import { headerState } from "../hooks/state/header";
import { footerState } from "../hooks/state/footer";

export default function transContainer() {
  const currentOutlet = useOutlet();
  const containerRef = useRef();
  const [header, setHeader] = useRecoilState(headerState);
  const footer = useRecoilValue(footerState);
  const setScrollPos = useSetRecoilState(scrollState);

  const updateStickyPos = () => {
    if (containerRef?.current) {
      const headerBottom = containerRef.current.scrollTop + header.height;
      return headerBottom > footer.offset ? footer.offset - headerBottom : 0;
    }
    return 0;
  };

  useEffect(() => {
    if (containerRef?.current) {
      setScrollPos(containerRef.current.scrollTop);
      setHeader(prev => ({
        ...prev,
        stickyPos: updateStickyPos(),
      }));
      windowScroll(containerRef.current, () => {
        setScrollPos(containerRef.current.scrollTop);
        setHeader(prev => ({
          ...prev,
          stickyPos: updateStickyPos(),
        }));
      });
    }
  }, []);

  return (
    <>
      <SeoHelmet />
      <PageHeader />
      <div className="scroll-container parallax-frame" ref={containerRef}>
        {currentOutlet}
        <PageFooter />
      </div>
    </>
  );
}
