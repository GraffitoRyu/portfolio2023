import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// state
import { cursor } from "../../hooks/state/cursor";
import { pageState } from "../../hooks/state/page";

export default function TransCover(props) {
  const type = props.type;
  return getTransitionByType(type);
}

function getTransitionByType(type) {
  switch (type) {
    case "bubble":
      return <BubbleTransition />;
    default:
      return <SlideTransition />;
  }
}

function SlideTransition() {
  const page = useRecoilValue(pageState);
  const [slideState, setSlideState] = useState("");

  useEffect(() => {
    // enter -> exit => entering -> exiting -> entered -> exited
    // if (!page.stay) {
    if (page.transStep == "entering") {
      setSlideState("page-out");
    } else if (page.transStep == "exited") {
      setTimeout(() => {
        setSlideState("page-in"); // section/pageVisual.jsx 참조
      }, [page.transDelay]);
    }
    // }
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

function BubbleTransition() {
  const pos = useRecoilValue(cursor);
  const [transPos, setTransPos] = useState({ ...pos });
  const page = useRecoilValue(pageState);

  useEffect(() => {
    if (page.transStep == "enter") setTransPos({ ...pos });
    else if (
      ["exiting", "exited", "entering"].some(d => page.transStep.includes(d))
    )
      setTransPos({ ...pos });
  }, [page.transStep]);

  return (
    <div
      className={`trans-cover-container fixed ${page.transStep}`}
      type="bubble"
      style={{ left: transPos.x, top: transPos.y }}
    >
      <div className="trans-cover absolute top-1/2 left-1/2 overflow-hidden">
        <div className="trans-depth trans-depth-1 absolute top-1/2 left-1/2"></div>
        <div className="trans-depth trans-depth-2 absolute top-1/2 left-1/2"></div>
      </div>
    </div>
  );
}
