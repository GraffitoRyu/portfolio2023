import {
  DM_Serif_Display,
  Noto_Sans_KR,
  Noto_Serif_KR,
} from "next/font/google";

export const sans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--sans-kr",
  display: "swap",
  adjustFontFallback: false,
});

export const serif = Noto_Serif_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true,
  variable: "--serif-kr",
  display: "swap",
  adjustFontFallback: false,
});

export const serif_dm = DM_Serif_Display({
  weight: ["400"],
  style: "italic",
  subsets: ["latin"],
  variable: "--serif-dm",
  display: "swap",
  adjustFontFallback: false,
});
