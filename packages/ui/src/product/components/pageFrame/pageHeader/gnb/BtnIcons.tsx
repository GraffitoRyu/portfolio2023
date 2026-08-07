import ExternalIconGithub from "@graffitoryu/ui/product/svg/header/github_icon.svg";
import ExternalIconNotion from "@graffitoryu/ui/product/svg/header/notion_icon.svg";

export default function ExternalIcon({ menuName }: { menuName: string }) {
  switch (menuName) {
    case "Github":
      return <ExternalIconGithub />;
    case "Notion":
      return <ExternalIconNotion />;
    default:
      return menuName;
  }
}
