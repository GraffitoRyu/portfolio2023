"use client";

import { ReactNode, useState } from "react";

// style component
import { CommonBtn } from "@/styles/styled/preset/buttons";

// svg
import LinkIcon from "@/svg/btn/link.svg";

export default function ExternalLinkButton({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  ariaLabel: string;
}) {
  const [hover, setHover] = useState<string>("");

  return (
    <CommonBtn
      as="a"
      className={`text-type ${hover}`}
      href={href}
      target="_blank"
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      aria-label={ariaLabel}
    >
      {children}
      <figure>
        <LinkIcon />
      </figure>
    </CommonBtn>
  );
}
