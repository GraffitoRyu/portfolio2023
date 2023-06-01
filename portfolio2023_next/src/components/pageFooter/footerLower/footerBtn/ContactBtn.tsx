import { useState } from "react";

// svg
import ExternalIcon from "@/svg/common/external_icon.svg";

// style
import { FooterBtn } from "@/styles/styled/components/pageFooter";

// data
import { SitemapType } from "@/data/sitemap";

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
