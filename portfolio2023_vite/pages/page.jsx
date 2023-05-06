import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot, RecoilEnv } from "recoil";
import { HelmetProvider } from "react-helmet-async";

import "../src/scss/tailwind.scss";
import "../src/scss/reset.scss";
import "../src/scss/cursor.scss";
import "../src/scss/btn.scss";
import "../src/scss/common.scss";
import "../src/scss/pageTransition.scss";
import "../src/scss/pageHeader.scss";
import "../src/scss/pageFooter.scss";
import "../src/scss/introSection.scss";
import "../src/scss/profile.scss";
import "../src/scss/projects.scss";
import "../src/scss/projectDetails.scss";

// components
import App from "../src/App";
import CustomCursor from "../src/components/cursor/Cursor";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const pageContainer = document.querySelector("#pageContainer");
ReactDOM.createRoot(pageContainer).render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvider>
        <App />
      </HelmetProvider>
      <CustomCursor />
    </RecoilRoot>
  </React.StrictMode>
);
