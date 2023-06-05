import { SyntheticEvent } from "react";

export default function navDelay({
  delay,
  e,
  clickEvent,
  navEvent,
}: {
  delay: number; // ms
  e: SyntheticEvent;
  clickEvent: () => void;
  navEvent: () => void;
}) {
  // 페이지 전환을 위한 내비게이션 지연
  e.preventDefault();

  // 클릭 시 바로 실행
  clickEvent();

  // 지연시간 후 페이지 이동
  setTimeout(() => {
    navEvent();
  }, delay);
}
