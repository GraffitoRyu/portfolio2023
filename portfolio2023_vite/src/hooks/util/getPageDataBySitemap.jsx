import { sitemapData } from "../../data/sitemap";

export default function getPageDataBySitemap() {
  return sitemapData.find(d => d.path.includes(location.pathname)) ?? {};
}
