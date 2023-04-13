import { useRecoilValue } from "recoil";
import { sitemap } from "../recoil/sitemap";

export default function getPageDataBySitemap() {
  const site_ = useRecoilValue(sitemap);
  return site_.find(d => d.path === location.pathname) ?? {};
}
