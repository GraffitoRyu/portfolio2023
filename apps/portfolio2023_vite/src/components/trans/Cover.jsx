import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// state
import { pageState } from "../../hooks/state/page";

export default function TransCover() {
  const page = useRecoilValue(pageState);
  const [slideState, setSlideState] = useState("");

  useEffect(() => {
    // transitionGroup: enter -> exit => entering -> exiting -> entered -> exited
    // SwitchTransition: exit -> exiting -> exited -> enter -> entering -> entered
    if (page.transStep == "exit") {
      setSlideState("page-out");
    } else if (page.transStep == "entering") {
      if (page.init) setSlideState("page-in"); // section/pageVisual.jsx 참조
    }
  }, [page.transStep]);

  return (
    <div
      className={`trans-cover-container fixed top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-none ${slideState}`}
      type="slide"
    >
      <div className="trans-cover absolute left-0 w-full"></div>
      <h1 className="trans-target w-full capitalize pointer-events-none overflow-hidden relative">
        <span className="absolute flex items-center">{page?.cur}</span>
      </h1>
    </div>
  );
}
