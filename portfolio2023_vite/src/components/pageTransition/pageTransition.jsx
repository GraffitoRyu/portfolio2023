import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pageTransitionState } from "../../hooks/state/pageTransition";
import { pageState } from "../../hooks/state/page";

export default function pageTransition() {
  return "";
  const [transHeight, setTransHeight] = useRecoilState(pageTransitionState);
  const pageName = useRecoilValue(pageState);

  useEffect(() => {
    // mount
    setTimeout(() => {
      setTransHeight(prev => ({ ...prev, loading: false, height: 0 }));
    }, 2000);
    return () => {
      // unmount
      setTransHeight(prev => ({ ...prev, loading: true, height: "100%" }));
    };
  }, [pageName]);

  return (
    <div
      className={`page-transition-container fixed bottom-0 left-0 w-full h-full flex justify-center items-center overflow-hidden ${
        transHeight.loading ? "loading" : ""
      }`}
      style={{ height: transHeight.height }}
    >
      <p style={{ color: "#000", fontSize: 80 }}>Page Loading...</p>
    </div>
  );
}
