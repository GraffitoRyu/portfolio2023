import {
  PortfolioCopyright,
  PortfolioDescription,
  PortfolioSummaryContainer,
} from "@/styles/styled/components/PageFooter";

export default function PortfolioSummary() {
  return (
    <PortfolioSummaryContainer>
      <PortfolioDescription>
        경력 4+ 년 프론트엔드 개발자 / 웹 퍼블리셔 <br />
        류대현 프로필 포트폴리오. <br />
        Next.js, Recoil, SCSS, Styled-components, Tailwind, GSAP, TypeScript,
        React Query, Firebase Database 등을 활용하여 구축 후 Vercel을 통해 배포.
        2023년 프로젝트.
      </PortfolioDescription>
      <PortfolioCopyright>&copy; 2023</PortfolioCopyright>
    </PortfolioSummaryContainer>
  );
}
