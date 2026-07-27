import type { BundleAssetPath, PublicAssetPath } from "@portfolio/types";

export const assetManifest = {
  bundle: {
    icons: {
      close: "svg/btn/close.svg",
      link: "svg/btn/link.svg",
      projectOpen: "svg/btn/project_open.svg",
      themeDark: "svg/btn/theme_dark.svg",
      themeLight: "svg/btn/theme_light.svg",
      themeSystem: "svg/btn/theme_system.svg",
      footerCopy: "svg/footer/link_copy.svg",
      footerDownload: "svg/footer/link_download.svg",
      footerExternal: "svg/footer/link_external.svg",
      github: "svg/header/github_icon.svg",
      notion: "svg/header/notion_icon.svg",
    } satisfies Record<string, BundleAssetPath>,
  },
  public: {
    common: {
      siteThumbnail: "/img/common/site_thumb.jpg",
    } satisfies Record<string, PublicAssetPath>,
    downloads: {
      projects: "/download/projects_v2023_07_20.pdf",
      resume: "/download/resume_v2023_07_18.pdf",
    } satisfies Record<string, PublicAssetPath>,
    favicons: {
      android192: "/favicon/android-icon-192x192.png",
      apple57: "/favicon/apple-icon-57x57.png",
      apple60: "/favicon/apple-icon-60x60.png",
      apple72: "/favicon/apple-icon-72x72.png",
      apple76: "/favicon/apple-icon-76x76.png",
      apple114: "/favicon/apple-icon-114x114.png",
      apple120: "/favicon/apple-icon-120x120.png",
      apple144: "/favicon/apple-icon-144x144.png",
      apple152: "/favicon/apple-icon-152x152.png",
      apple180: "/favicon/apple-icon-180x180.png",
      favicon: "/favicon/favicon.ico",
      favicon16: "/favicon/favicon-16x16.png",
      favicon32: "/favicon/favicon-32x32.png",
      favicon96: "/favicon/favicon-96x96.png",
    } satisfies Record<string, PublicAssetPath>,
    projects: {
      teamsolution: {
        intro: "/img/details/intro_teamsolution.jpg",
        subVisual: "/img/details/subVisual_teamsolution.jpg",
        media: [
          "/img/details/media_teamsolution_promotion.jpg",
          "/img/details/media_teamsolution_app.jpg",
          "/img/details/media_teamsolution_control.jpg",
        ],
      },
      racesolution: {
        intro: "/img/details/intro_racesolution.jpg",
        subVisual: "/img/details/subVisual_racesolution.jpg",
        media: [
          "/img/details/media_racesolution_pc.jpg",
          "/img/details/media_racesolution_hud.jpg",
        ],
      },
      solutionmaster: {
        intro: "/img/details/intro_solutionmaster.jpg",
        subVisual: "/img/details/subVisual_solutionmaster.jpg",
        media: [
          "/img/details/media_solutionmaster_manager.jpg",
          "/img/details/media_solutionmaster_host_control.jpg",
          "/img/details/media_solutionmaster_control.jpg",
        ],
      },
      lapvslap: {
        intro: "/img/details/intro_lapvslap.jpg",
        subVisual: "/img/details/subVisual_lapvslap.jpg",
        media: [
          "/img/details/media_lapvslap.jpg",
          "/img/details/media_lapvslap_lapchart.jpg",
          "/img/details/media_lapvslap_comment.jpg",
        ],
      },
    } satisfies Record<
      string,
      {
        intro: PublicAssetPath;
        subVisual: PublicAssetPath;
        media: readonly PublicAssetPath[];
      }
    >,
  },
} as const;
