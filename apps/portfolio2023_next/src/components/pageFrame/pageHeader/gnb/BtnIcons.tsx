import ExternalIconGithub from "@/svg/header/github_icon.svg";
import ExternalIconNotion from "@/svg/header/notion_icon.svg";

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
