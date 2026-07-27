"use client";

import { Icon, Link } from "@graffitoryu/ui";

// style component
import { StyledDefaultBtn } from "@/styles/styled/preset/buttons";

// hooks
import useHover from "@/hooks/interaction/useHover";

// svg
import LinkIcon from "@/svg/btn/link.svg";

/**
 * 버튼 컴포넌트; 닫기
 * @component
 * @param {ExternalLinkButtonProps} props
 * @param {string} props.href
 * @param {string} props.ariaLabel
 * @param {React.ReactNode} props.children
 */
export default function ExternalLinkButton({
  href,
  ariaLabel,
  children,
}: ExternalLinkButtonProps) {
  const { state, hoverHandler } = useHover();

  return (
    <StyledDefaultBtn
      as={Link}
      className={`text-type ${state ? "hover" : ""}`}
      href={href}
      target="_blank"
      {...hoverHandler()}
      aria-label={ariaLabel}
    >
      {children}
      <Icon>
        <LinkIcon />
      </Icon>
    </StyledDefaultBtn>
  );
}
