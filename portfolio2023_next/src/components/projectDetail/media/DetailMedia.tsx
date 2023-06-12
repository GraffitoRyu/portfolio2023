import { useSearchParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";

// components
import DetailMediaItem from "./DetailMediaItem";

// style components
import { PDMediaContainer } from "@/styles/styled/components/ProjectDetail";

// types
import { MediaType } from "@/types/projects";
import { DetailTypes } from "@/types/projectDetails";

// state
import { detailData } from "@/states/detail";

export default function DetailMediaContainer() {
  const params = useSearchParams();
  const code = params.get("code");
  const data = useRecoilValue<DetailTypes>(detailData);
  const [media, setMedia] = useState<MediaType[] | []>([]);

  useLayoutEffect(() => {
    if (!code) return;

    const d = data[code]?.media;
    if (d) setMedia(d);
  }, [code, data]);

  return (
    <PDMediaContainer>
      {media.map((m: MediaType, i: number) => (
        <DetailMediaItem key={`detailMedia_${code}_${i}`} data={m} />
      ))}
    </PDMediaContainer>
  );
}
