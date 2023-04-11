import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import PageHeader from "../../components/common/pageHeader";
import PageFooter from "../../components/common/pageFooter";
import Contents from "./index";

import { themeStateAtom } from "../../hooks/recoil/theme";
import { useRecoilValue } from "recoil";

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
      <div className="transition-container">
        <div className="sticky-container relative">
          <PageHeader />
          <Contents />
        </div>
        <PageFooter />
      </div>
    </>
  );
}
