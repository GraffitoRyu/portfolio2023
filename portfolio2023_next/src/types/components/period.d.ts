/**
 * 기간표현 컴포넌트 props
 */
interface PeriodProps {
  /**
   * class
   */
  className?: string;
  /**
   * 기간 범위 데이터
   * - [start date key, end date key]
   */
  date: (Date | string)[];
}
