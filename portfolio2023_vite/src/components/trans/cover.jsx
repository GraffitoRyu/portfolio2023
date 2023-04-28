import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// state
import { cursor } from "../../hooks/state/cursor";
import { accessDeviceSelector } from "../../hooks/state/accessDevice";
import { pageState } from "../../hooks/state/page";

export default function transCover(props) {
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

  return (
    <div
      className={`trans-cover-container fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none ${page.transStep}`}
      type="slide"
    >
      <div className="trans-cover absolute left-0 w-full"></div>
      <h1 className="trans-target fixed top-1/2 left-1/2 uppercase pointer-events-none overflow-hidden flex items-center">
        <span>{page?.cur}</span>
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
