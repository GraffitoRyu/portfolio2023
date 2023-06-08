import tool_html from "/img/tools/html.png";
import tool_css from "/img/tools/css.png";
import tool_javascript from "/img/tools/javascript.png";
import tool_jquery from "/img/tools/jquery.png";
import tool_d3js from "/img/tools/d3js.png";
import tool_ejs from "/img/tools/ejs.png";
import tool_figma from "/img/tools/figma.png";
import tool_git from "/img/tools/git.png";
import tool_google_maps_api from "/img/tools/google_maps_api.png";
import tool_nextjs from "/img/tools/nextjs.png";
import tool_photoshop from "/img/tools/photoshop.png";
import tool_php from "/img/tools/php.png";
import tool_react from "/img/tools/react.png";
import tool_sass from "/img/tools/sass.png";
import tool_vite from "/img/tools/vite.png";
import tool_zeplin from "/img/tools/zeplin.png";
import { StaticImageData } from "next/image";

type ToolsIconTypes = {
  [index: string]: StaticImageData;
  html: StaticImageData;
  css: StaticImageData;
  javascript: StaticImageData;
  jquery: StaticImageData;
  d3js: StaticImageData;
  ejs: StaticImageData;
  figma: StaticImageData;
  git: StaticImageData;
  google_maps_api: StaticImageData;
  nextjs: StaticImageData;
  photoshop: StaticImageData;
  php: StaticImageData;
  react: StaticImageData;
  sass: StaticImageData;
  vite: StaticImageData;
  zeplin: StaticImageData;
};

const ToolsIcon: ToolsIconTypes = {
  html: tool_html,
  css: tool_css,
  javascript: tool_javascript,
  jquery: tool_jquery,
  d3js: tool_d3js,
  ejs: tool_ejs,
  figma: tool_figma,
  git: tool_git,
  google_maps_api: tool_google_maps_api,
  nextjs: tool_nextjs,
  photoshop: tool_photoshop,
  php: tool_php,
  react: tool_react,
  sass: tool_sass,
  vite: tool_vite,
  zeplin: tool_zeplin,
};

export default ToolsIcon;
