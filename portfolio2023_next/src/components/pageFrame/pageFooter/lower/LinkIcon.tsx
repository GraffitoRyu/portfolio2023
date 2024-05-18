import LinkIconExternal from "@/svg/footer/link_external.svg";
import LinkIconCopy from "@/svg/footer/link_copy.svg";
import LinkIconDownload from "@/svg/footer/link_download.svg";

export default function LinkIcon({
  isExternal,
  isCopy,
  isDownload,
}: {
  isExternal?: boolean;
  isCopy?: boolean;
  isDownload?: boolean;
}) {
  if (isExternal === true) return <LinkIconExternal />;
  else if (isCopy === true) return <LinkIconCopy />;
  else if (isDownload === true) return <LinkIconDownload />;
  return null;
}
