import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/app";

import "../src/scss/reset.scss";
import "../src/scss/tailwind.scss";
import "../src/scss/common.scss";
import "../src/scss/header.scss";
import "../src/scss/footer.scss";
import "../src/scss/profile.scss";
import "../src/scss/projects.scss";

import "../src/scss/page_transition.scss";

const pageContainer = document.querySelector("#pageContainer");
ReactDOM.createRoot(pageContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
