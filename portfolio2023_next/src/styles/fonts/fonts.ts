import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

export const sans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  preload: true,
  variable: "--sans-kr",
  display: "swap",
});
export const serif = Noto_Serif_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  preload: true,
  variable: "--serif-kr",
  display: "swap",
});
