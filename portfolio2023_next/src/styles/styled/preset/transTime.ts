export const transTime = {
  common: {
    initComplete: 1000, // PageLoadEvent에서 init을 충족한 뒤 애니메이션 대기 시간 (페이지 첫 진입 후 로딩 완료)
    initFade: 1000,
    coverUp: 1200, // initCover 또는 transCover 슬라이드 시간
    loadComplete: 400, // initCover 또는 transCover 비활성화 완료 처리
  },
  color: 200,
  visual: {
    fadeInUp: 800,
    intro: 800,
  },
  career: 800,
  tooltip: 400,
  detail: {
    sheetSlide: 800,
  },
};

export type TransTimeTypes = keyof typeof transTime;
