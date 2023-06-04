import { useState } from "react";

// svg
import ExternalIcon from "@/svg/common/external_icon.svg";

// type
import { SitemapType } from "@/types/sitemap";

// style
import { FooterBtn } from "@/styles/styled/components/pageFooter";

export default function ContactBtn({ path, name }: SitemapType): JSX.Element {
  const [hover, setHover] = useState<string>("");

  return (
    <FooterBtn
      href={path}
      target="_blank"
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <span>{name}</span>
      <figure>
        <ExternalIcon />
      </figure>
    </FooterBtn>
  );
}
