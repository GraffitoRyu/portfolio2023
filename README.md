# (리팩토링 진행중) 류대현 포트폴리오

2023년 제작했던, 제 소개를 위한 [프로필 포트폴리오](https://ryudh.com)입니다.

2024년 현재,
실무에서 작업한 경험을 바탕으로,
부족한 부분을 보완하고 지금의 제 역량을 기준으로한 코드를 보여드리기 위해
리팩토링을 진행하고 있습니다.

---

## 1. 링크

- [프로필](https://ryudh.com)
- [Github](https://github.com/GraffitoRyu)
- [Notion](https://www.notion.so/Ryu-Daehyeon-cc635240ed4f405ab6d27ec603f8b023)
- [랠릿](https://www.rallit.com/hub/resumes/69685)

---

## 2. 프레임워크 별 프로젝트

### 2-1. Next.js

- 메인 프로젝트
- 실무보면서 좀 더 성숙한 로직을 적용
- 상태관리 Recoil -> Jotai로 마이그레이션 중

```text
- /portfolio2023_next
```

### 2-2. Vite

- 포트폴리오 초기 구축 시, 첫 리액트 프로젝트로 진행
- Next.js 프로젝트 리팩토링 후 Vite로 리팩토링 예정

```text
- /deploy_vite (배포 전용 빌드 폴더)
- /portfolio2023_vite (작업 폴더)
```

---

## 3. 개발환경

- Next.js 프로젝트 기준입니다.

### 1) 코어

- Node.js v24.18.0 (`.nvmrc` 기준)
- Next.js v14; App Router
- TypeScript
- React v18

### 2) 상태관리

- React Query v5 (데이터 캐시 관리)
- ~~Recoil~~ -> Jotai (UI 상태관리, 마이그레이션중)

### 3) 스타일링

- Styled-components v6
- SCSS (주요 문법)
- TailwindCSS (reset.css 및 프로토타이핑)
- @svgr/webpack (svg 파일을 컴포넌트처럼 다루기위해 도입)
- next/font

### 4) 인터랙션

- GSAP
- Simplebar / Simplebar-react

### 5) 유틸리티

- ClipboardJS

<!-- ### 6) TDD

- Jest
- Testing-library -->

### 6) 컨벤션

- ESLint v8 (Next.js의 eslint v9 지원전까지 사용 보류)
- Prettier
- JSDoc

### 7) 패키지 관리

- pnpm v10.15.0 (`packageManager` 기준)
- 설치: `pnpm install`
- lockfile 검증 설치: `pnpm install --frozen-lockfile`

### 8) 배포

- vercel
