import type {
  WebpackConfigType,
  WebpackModuleRuleType,
} from "@portfolio/types";

/**
 * SVGR 설정; Storybook
 * @see https://blog.betaman.kr/132
 */
const svgrConfigStorybook = (config: WebpackConfigType) => {
  if (!config.module || !config.module.rules) {
    return config;
  }

  config.module.rules = [
    ...config.module.rules.map((rule: WebpackModuleRuleType) => {
      if (!rule || rule === "...") {
        return rule;
      }

      if (rule.test && /svg/.test(String(rule.test))) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    }),

    {
      test: /\.svg$/,

      use: ["@svgr/webpack"],
    },
  ];

  return config;
};

export default svgrConfigStorybook;
