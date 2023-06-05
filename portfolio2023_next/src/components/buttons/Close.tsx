"use client";

import { SyntheticEvent, useState } from "react";

// style components
import { CommonBtn } from "@/styles/styled/preset/buttons";

// svg
import CloseIcon from "@/svg/btn/close.svg";

export default function CloseButton({
  clickEvent,
}: {
  clickEvent: (e: SyntheticEvent) => void;
}) {
  const [hover, setHover] = useState<string>("");

  return (
    <CommonBtn
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={(e: SyntheticEvent) => clickEvent(e)}
    >
      <figure>
        <CloseIcon />
      </figure>
    </CommonBtn>
  );
}
