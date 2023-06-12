import {
  PDMediaDesc,
  PDMediaInfo,
  PDMediaName,
} from "@/styles/styled/components/ProjectDetail";

export default function DetailMediaInfo({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <PDMediaInfo>
      <PDMediaName>{title}</PDMediaName>
      <PDMediaDesc>{desc}</PDMediaDesc>
    </PDMediaInfo>
  );
}
