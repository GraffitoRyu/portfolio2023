/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true, // 리액트 엄격모드
  swcMinify: true,
  compiler: {
    // styled-components 사용 옵션
    styledComponents: true,
  },
  // scss 컴파일 옵션
  sassOptions: {
    includesPaths: [path.join(__dirname, "styles")],
  },
  // 외부 이미지 접근 설정
  images: {
    remotePatterns: [
      // 프로젝트 상세 영상
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc",
      },
      {
        protocol: "https",
        hostname: "drive.usercontent.google.com",
        pathname: "/uc",
      },
    ],
  },
  // svg 컴포넌트 변환을 위한 설정
  webpack(config) {
    /**
     * -------- SVGR 설정 시작
     */
    // Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
    // into React components. See https://react-svgr.com/docs/next/

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    /**
     * -------- SVGR 설정 끝
     */

    return config;
  },
};

module.exports = nextConfig;
