// style components
import {
  PDLinkBtn,
  PDLinkItem,
  PDLinkName,
} from "@/styles/styled/components/ProjectDetail";

// types
import { LinkType } from "@/types/projects";

// svg
import LinkIcon from "@/svg/btn/link.svg";
import { useState } from "react";

export default function DetailExternalBtn({ name, url }: LinkType) {
  const [hover, setHover] = useState<string>("");

  return (
    <PDLinkItem>
      <PDLinkBtn
        as="a"
        className={`w-auto ${hover}`}
        href={url}
        target="_blank"
        onMouseEnter={() => setHover("hover")}
        onMouseLeave={() => setHover("")}
      >
        <PDLinkName>{name}</PDLinkName>
        <figure>
          <LinkIcon />
        </figure>
      </PDLinkBtn>
    </PDLinkItem>
  );
}
