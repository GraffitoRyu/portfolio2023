import type { NextConfig } from "next";
import { openBrowserLocalNextServer } from "@graffitoryu/preset-config";

const nextConfig: NextConfig = {
  reactStrictMode: true, // 리액트 엄격모드
  compiler: {
    // styled-components 사용 옵션
    styledComponents: true,
  },
  // scss 컴파일 옵션
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  // Turbopack에서 svg를 React 컴포넌트로 변환
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  async redirects() {
    // 로컬 서버 구동 시, 브라우저 창 열기
    // NODE_ENV === "development"에서만 열림
    openBrowserLocalNextServer();
    return [];
  },
};

export default nextConfig;
