import ThemeIconLight from "@/svg/btn/theme_light.svg";
import ThemeIconDark from "@/svg/btn/theme_dark.svg";
import ThemeIconSystem from "@/svg/btn/theme_system.svg";

export default function ThemeIcon({
  themeCode,
  className,
}: {
  themeCode: string;
  className?: string;
}) {
  switch (themeCode) {
    case "light":
      return <ThemeIconLight {...{ className }} />;
    case "dark":
      return <ThemeIconDark {...{ className }} />;
    case "system":
      return <ThemeIconSystem {...{ className }} />;
    default:
      return null;
  }
}
