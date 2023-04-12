import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";

// components
import ProjectsPage from "./index";

// util
import { themeStateAtom } from "../../hooks/recoil/theme";

export default function projectsHelmet() {
  const theme = useRecoilValue(themeStateAtom);
  const metaColor = theme.theme == "dark" ? "#5a5a5a" : "#cccccc";
  return (
    <>
      <Helmet>
        <title>
          프로젝트 | 류대현 포트폴리오 :: Front-end Engineer / Web Publisher
        </title>
        <meta name="msapplication-TileColor" content={metaColor} />
        <meta name="theme-color" content={metaColor} />
      </Helmet>
      <ProjectsPage />
    </>
  );
}
