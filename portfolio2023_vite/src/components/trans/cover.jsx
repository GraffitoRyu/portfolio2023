import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// state
import { cursor } from "../../hooks/state/cursor";
import { accessDeviceSelector } from "../../hooks/state/accessDevice";
import { pageState } from "../../hooks/state/page";

export default function transCover() {
  const pos = useRecoilValue(cursor);
  const [transPos, setTransPos] = useState({ ...pos });
  const { mobile } = useRecoilValue(accessDeviceSelector);
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
      style={{ left: transPos.x, top: transPos.y }}
    >
      <div className="trans-cover absolute top-1/2 left-1/2">
        <div className="trans-depth trans-depth-1 absolute top-1/2 left-1/2"></div>
        <div className="trans-depth trans-depth-2 absolute top-1/2 left-1/2"></div>
      </div>
    </div>
  );
}
