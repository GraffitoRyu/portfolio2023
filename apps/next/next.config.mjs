/** @type {import('next').NextConfig} */

import path from "path";
import svgrConfigNextjs from "./config/svgr/config.nextjs.mjs";
import openBrowserLocalNextServer from "./config/dev/openBrowser.mjs";

const root = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  reactStrictMode: true, // 리액트 엄격모드
  swcMinify: true,
  compiler: {
    // styled-components 사용 옵션
    styledComponents: true,
  },
  // scss 컴파일 옵션
  sassOptions: {
    includesPaths: [path.join(root, "styles")],
  },
  // svg 컴포넌트 변환을 위한 설정
  webpack(config) {
    svgrConfigNextjs(config);
    return config;
  },
  async redirects() {
    // 로컬 서버 구동 시, 브라우저 창 열기
    // NODE_ENV === "development"에서만 열림
    openBrowserLocalNextServer();
    return [];
  },
};

export default nextConfig;
