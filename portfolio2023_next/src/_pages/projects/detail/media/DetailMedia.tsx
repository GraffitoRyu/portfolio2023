import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useAtomValue } from "jotai";

// components
import DetailMediaItem from "./DetailMediaItem";

// style components
import { PDMediaSection } from "@/styles/styled/components/ProjectDetail";

// state
import { projectDetailDataState } from "@/jotai/pages/project.detail.state";

export default function DetailMediaContainer() {
  const { category } = useParams();
  const data = useAtomValue<DetailTypes>(projectDetailDataState);
  const [media, setMedia] = useState<MediaType[] | []>([]);

  useLayoutEffect(() => {
    if (typeof category !== "string" || !data?.[category]) return;

    const d = data[category]?.media;
    if (d) setMedia(d);
  }, [category, data]);

  return (
    <PDMediaSection>
      {media.map((m: MediaType, i: number) => (
        <DetailMediaItem key={`detailMedia_${category}_${i}`} data={m} />
      ))}
    </PDMediaSection>
  );
}
