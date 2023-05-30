import { SitemapType } from "@/data/sitemap";
import ExternalIcon from "@/svg/common/external_icon.svg";
import Link from "next/link";

export default function SitemapBtn({
  code,
  path,
  name,
  external,
}: SitemapType): JSX.Element {
  return external ? (
    <a href={path} target="_blank">
      <span>{name}</span>
      <figure>
        <ExternalIcon />
      </figure>
    </a>
  ) : (
    <Link href={path}>
      <span>{name}</span>
    </Link>
  );
}
