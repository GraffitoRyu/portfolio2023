// 웹 호환성 처리
// 노트북 터치패드로부터 브라우처 핀치 줌 방지
// 특수한 목적으로 인해, 노트북 터치패드로 브라우저 줌을 제한해야 할 경우 활용한다.
// document.addEventListener('wheel', blockPageWheelZoom,{ passive: false })
// function blockPageWheelZoom(e) { if (e.ctrlKey) e.preventDefault(); }

// 접속한 브라우저 설정 언어 체크
let pageSettingLanguage = navigator.language || navigator.userLanguage;
let langCode = 'ko';
if (pageSettingLanguage.indexOf('ko') == -1) { locale = 'en-US'; langCode = 'en'; }
else { locale = 'ko-KR' };
document.querySelector(`html`).setAttribute('lang', langCode);

// 익스플로러 접속 시, 크롬
let browserCode = navigator.userAgent.toLowerCase();
if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)
  || browserCode.indexOf("msie") != -1) {
  alert('본 페이지는 익스플로러 브라우저를 지원하지 않습니다.\n최신 브라우저(크롬, 엣지, 파이어폭스, 사파리 등)로 접속해주세요.\n크롬 브라우저 설치 화면으로 이동합니다.');
  location.href = 'https://www.google.com/chrome/';
}

// 인터넷 익스플로러 구분 ; 익스플로러를 꼭 호환해야 하는 경우에만 사용
// var isIE = false;
// var agent = navigator.userAgent.toLowerCase();
// if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1)
//      || browserCode.indexOf("msie") != -1) {
//     isIE = true;
// }

let viewportOrientation = crossbrowsing__viewport__orientation__check__();
let innerWindowRatio = window.innerWidth / window.innerHeight;

let isMobile = crossbrowsing__mobile__check__();
let isAppleWeb = crossbrowing__apple__check__();
let isTablet = crossbrowing__tablet__check__();
let urlParams = get__url__params();

window.addEventListener('resize', () => {
  viewportOrientation = crossbrowsing__viewport__orientation__check__();
  isMobile = crossbrowsing__mobile__check__();
  isAppleWeb = crossbrowing__tablet__check__();
  isTablet = crossbrowing__tablet__check__();
  innerWindowRatio = window.innerWidth / window.innerHeight;
});

// 접속 환경이 모바일인지 체크
function crossbrowsing__mobile__check__() {
  return /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(navigator.userAgent)
}

// 접속 환경이 애플 기기인지 확인
function crossbrowing__apple__check__() {
  return /iP(hone|od|ad)|Mac/.test(navigator.userAgent)
}

// 접속 환경이 태블릿 PC인지 확인
function crossbrowing__tablet__check__() {
  return /Tablet|iPad/i.test(navigator.userAgent) && navigator.userAgent.indexOf('Mobile') == -1 && crossbrowsing__mobile__check__();
}

// 접속 화면이 가로/세로모드인지 확인
function crossbrowsing__viewport__orientation__check__() {
  return window.matchMedia(`(orientation: portrait)`).matches ? 'portrait' : 'landscape';
}

function get__url__params() {
  if (location.search) {
    const raw__params = decodeURI(location.search.substring(1));
    const url__params = `{\"${raw__params.replace(/"/g, '\\"').replace(/&/g, '\",\"').replace(/\=/g, '\":\"')}\"}`;
    return JSON.parse(url__params);
  }
  return undefined;
}