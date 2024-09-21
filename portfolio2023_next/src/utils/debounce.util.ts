/**
 * 실행 지연 함수
 * @util
 * @param {Function} callback 실행함수
 * @param {number} delay 지연시간 (ms)
 */
export default function debounce<
  CallbackType extends (
    ...args: Parameters<CallbackType>
  ) => ReturnType<CallbackType>,
>(callback: CallbackType, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | NodeJS.Timeout | null = null;

  return (...args: Parameters<CallbackType>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => callback(...args), delay);
  };
}
