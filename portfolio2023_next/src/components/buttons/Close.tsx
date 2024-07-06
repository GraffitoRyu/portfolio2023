"use client";

import { useState } from "react";

// style components
import { CommonBtn } from "@/styles/styled/preset/buttons";

// svg
import CloseIcon from "@/svg/btn/close.svg";

export default function CloseButton({
  ariaLabel,
  clickEvent,
}: {
  ariaLabel: string;
  clickEvent: (e: React.SyntheticEvent) => void;
}) {
  const [hover, setHover] = useState<string>("");

  return (
    <CommonBtn
      className={hover}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={(e: React.SyntheticEvent) => clickEvent(e)}
      aria-label={ariaLabel}
    >
      <figure>
        <CloseIcon />
      </figure>
    </CommonBtn>
  );
}
