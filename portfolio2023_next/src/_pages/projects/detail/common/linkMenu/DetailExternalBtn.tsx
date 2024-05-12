// components
import ExternalLinkButton from "@/components/buttons/Link";

// style components
import {
  PDLinkBtn,
  PDLinkItem,
  PDLinkName,
} from "@/styles/styled/components/ProjectDetail";

// types
import { LinkType } from "@/types/projects";

export default function DetailExternalBtn({ name, url }: LinkType) {
  return (
    <PDLinkItem>
      <PDLinkBtn
        as={ExternalLinkButton}
        href={url}
        ariaLabel={`다음의 외부 링크로 이동하기, ${name}`}
      >
        <PDLinkName>{name}</PDLinkName>
      </PDLinkBtn>
    </PDLinkItem>
  );
}
