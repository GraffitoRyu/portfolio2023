/**
 * 실행 지연 함수
 * @util
 * @template F - 함수 타입
 * @param {Function} callback 실행함수
 * @param {number} delay 지연시간 (ms)
 */
export default function debounce<
  F extends (...args: Parameters<F>) => ReturnType<F>,
>(callback: F, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | NodeJS.Timeout | null = null;

  return (...args: Parameters<F>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => callback(...args), delay);
  };
}
