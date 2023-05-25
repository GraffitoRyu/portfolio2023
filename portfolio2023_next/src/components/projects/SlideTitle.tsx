import { styled } from "styled-components";

const TitleSpan = styled.span`
  font-size: 240px;
  font-weight: 700;
  animation: slideText 2s linear 0s infinite;
  @keyframes slideText {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export default function SlideTitle({
  text,
  duration,
}: {
  text: string;
  duration: number;
}) {
  const titleArr: string[] = new Array(3).fill(text);

  return titleArr.map((title: string, i: number) => (
    <TitleSpan key={i} style={{ animationDuration: `${duration}s` }}>
      {title}
    </TitleSpan>
  ));
}
