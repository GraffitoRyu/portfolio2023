"use client";

import { Button, Icon } from "@graffitoryu/ui";

// style components
import { StyledDefaultBtn } from "@graffitoryu/ui/product/styles/styled/preset/buttons";

// hooks
import useHover from "@graffitoryu/ui/product/hooks/interaction/useHover";

// svg
import CloseIcon from "@graffitoryu/ui/product/svg/btn/close.svg";

/**
 * 버튼 컴포넌트; 닫기
 * @component
 * @param {CloseButtonProps} props
 * @param {string} props.ariaLabel
 * @param {Function} props.clickEvent
 */
export default function CloseButton({
  ariaLabel,
  clickEvent,
}: CloseButtonProps) {
  const { state, hoverHandler } = useHover();

  return (
    <StyledDefaultBtn
      as={Button}
      className={state ? "hover" : ""}
      {...hoverHandler()}
      onClick={clickEvent}
      aria-label={ariaLabel}
    >
      <Icon>
        <CloseIcon />
      </Icon>
    </StyledDefaultBtn>
  );
}
