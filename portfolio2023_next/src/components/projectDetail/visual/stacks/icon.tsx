import { StaticImageData } from "next/image";

import icon_html from "img/tools/html.png";
import icon_css from "img/tools/css.png";
import icon_javascript from "img/tools/javascript.png";
import icon_jquery from "img/tools/jquery.png";
import icon_d3js from "img/tools/d3js.png";
import icon_figma from "img/tools/figma.png";
import icon_git from "img/tools/git.png";
import icon_google_maps_api from "img/tools/google_maps_api.png";
import icon_nextjs from "img/tools/nextjs.png";
import icon_photoshop from "img/tools/photoshop.png";
import icon_php from "img/tools/php.png";
import icon_react from "img/tools/react.png";
import icon_sass from "img/tools/sass.png";
import icon_vite from "img/tools/vite.png";
import icon_zeplin from "img/tools/zeplin.png";

interface ToolIconTypes {
  [index: string]: StaticImageData | null;
}
const toolIcons: ToolIconTypes = {
  html: icon_html,
  css: icon_css,
  javascript: icon_javascript,
  jquery: icon_jquery,
  d3js: icon_d3js,
  figma: icon_figma,
  git: icon_git,
  google_maps_api: icon_google_maps_api,
  nextjs: icon_nextjs,
  photoshop: icon_photoshop,
  php: icon_php,
  react: icon_react,
  sass: icon_sass,
  vite: icon_vite,
  zeplin: icon_zeplin,
  ejs: null,
  ajax: null,
  websocket: null,
  json: null,
};

export default toolIcons;
