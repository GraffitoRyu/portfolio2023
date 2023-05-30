import { SitemapType } from "@/data/sitemap";
import ExternalIcon from "@/svg/common/external_icon.svg";

export default function ContactBtn({
  code,
  path,
  name,
}: SitemapType): JSX.Element {
  return (
    <a href={path} target="_blank">
      <span>{name}</span>
      <figure>
        <ExternalIcon />
      </figure>
    </a>
  );
}
