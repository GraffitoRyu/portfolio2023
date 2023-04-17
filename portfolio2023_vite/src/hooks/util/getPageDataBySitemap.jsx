import { sitemapData } from "../../data/sitemap";

export default function getPageDataBySitemap() {
  return sitemapData.find(d => location.pathname.includes(d.path)) ?? {};
}
