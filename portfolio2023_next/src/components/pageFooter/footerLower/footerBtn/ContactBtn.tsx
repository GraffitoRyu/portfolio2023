import { SitemapType } from "@/data/sitemap";
import { FooterBtn } from "@/styles/styled/footer";
import ExternalIcon from "@/svg/common/external_icon.svg";
import { useState } from "react";

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
