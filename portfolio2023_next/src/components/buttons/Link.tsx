"use client";

import { ReactNode, useState } from "react";

// style component
import { CommonBtn } from "@/styles/styled/preset/buttons";

// svg
import LinkIcon from "@/svg/btn/link.svg";

export default function ExternalLinkButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const [hover, setHover] = useState<string>("");

  return (
    <CommonBtn
      as="a"
      className={`w-auto ${hover}`}
      href={href}
      target="_blank"
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      {children}
      <figure>
        <LinkIcon />
      </figure>
    </CommonBtn>
  );
}
