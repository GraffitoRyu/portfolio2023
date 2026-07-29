import type { NextConfig } from "next";

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
};

export default nextConfig;
