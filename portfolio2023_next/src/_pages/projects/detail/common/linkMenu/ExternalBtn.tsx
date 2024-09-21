// components
import ExternalLinkButton from "@/components/buttons/Link";

// style components
import {
  StyledPDLinkBtn,
  StyledPDLinkItem,
  StyledPDLinkName,
} from "@/styles/styled/components/ProjectDetail";

export default function DetailExternalBtn({ name, url }: LinkType) {
  return (
    <StyledPDLinkItem>
      <StyledPDLinkBtn
        as={ExternalLinkButton}
        href={url}
        ariaLabel={`다음의 외부 링크로 이동하기, ${name}`}
      >
        <StyledPDLinkName>{name}</StyledPDLinkName>
      </StyledPDLinkBtn>
    </StyledPDLinkItem>
  );
}
