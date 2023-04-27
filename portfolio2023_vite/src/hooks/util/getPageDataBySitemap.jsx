import { sitemapData } from "../../data/sitemap";

export default function getPageDataBySitemap() {
  return (
    sitemapData.find(
      d => d.path === location.pathname || d.path + "/" === location.pathname
    ) ?? {}
  );
}
