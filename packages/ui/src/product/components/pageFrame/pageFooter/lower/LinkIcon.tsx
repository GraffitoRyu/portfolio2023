import LinkIconExternal from "@graffitoryu/ui/product/svg/footer/link_external.svg";
import LinkIconCopy from "@graffitoryu/ui/product/svg/footer/link_copy.svg";
import LinkIconDownload from "@graffitoryu/ui/product/svg/footer/link_download.svg";

export default function LinkIcon({
  kind,
}: {
  kind: "external" | "copy" | "download";
}) {
  if (kind === "external") return <LinkIconExternal />;
  if (kind === "copy") return <LinkIconCopy />;
  return <LinkIconDownload />;
}
