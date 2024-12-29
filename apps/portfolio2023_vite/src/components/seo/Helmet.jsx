import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";

// util
import getPageDataBySitemap from "../../hooks/util/getPageDataBySitemap";

// data
import { themeStateAtom } from "../../hooks/state/theme";

export default function SeoHelmet() {
  const { theme } = useRecoilValue(themeStateAtom);
  const metaColor = theme == "dark" ? "#5a5a5a" : "#cccccc";
  const pageData = getPageDataBySitemap();
  const pageName = pageData ? pageData.name + " | " : "";
  return (
    <Helmet>
      <title>
        {pageName}류대현 포트폴리오 :: Front-end Engineer / Web Publisher
      </title>
      <meta name="msapplication-TileColor" content={metaColor} />
      <meta name="theme-color" content={metaColor} />
    </Helmet>
  );
}
