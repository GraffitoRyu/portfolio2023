/**
 * 버튼; 닫기
 */
interface CloseButtonProps {
  ariaLabel: string;
  clickEvent: (e: React.SyntheticEvent) => void;
}

/**
 * 버튼; 링크
 */
interface ExternalLinkButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}
