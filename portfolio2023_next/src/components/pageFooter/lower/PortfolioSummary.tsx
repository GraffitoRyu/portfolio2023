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
        Figma로 레이아웃 디자인. Next.js와 Recoil, TypeScript로 환경 기반 구축,
        TailwindCSS로 프로토타이핑 후 SCSS와 Styled-components로 반응형 레이아웃
        작업, GSAP을 통한 스크롤 인터랙션 적용, Firebase Realtime Database를
        활용한 페이지 데이터 관리, React Query를 활용한 클라이언트 사이드 데이터
        fetching 등을 활용하여 구축. Vercel을 통해 배포. 2023년 프로젝트.
      </PortfolioDescription>
      <PortfolioCopyright>&copy; 2023</PortfolioCopyright>
    </PortfolioSummaryContainer>
  );
}
