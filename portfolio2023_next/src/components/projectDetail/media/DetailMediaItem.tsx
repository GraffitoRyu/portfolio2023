// components
import DetailMediaContents from "../common/media/DetailMediaContents";

// style components
import {
  PDMediaFigure,
  PDMediaItem,
} from "@/styles/styled/components/ProjectDetail";

// types
import { MediaType } from "@/types/projects";

export default function DetailMediaItem({ data }: { data: MediaType }) {
  return (
    <PDMediaItem>
      <PDMediaFigure>
        <DetailMediaContents
          referType={data.referType}
          src={data.src}
          alt={data.alt}
        />
      </PDMediaFigure>
    </PDMediaItem>
  );
}
