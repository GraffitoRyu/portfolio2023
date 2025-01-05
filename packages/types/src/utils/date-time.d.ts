export type UtilDateTimeFormatOptions = {
  /**
   * new Intl.DateTimeFormat(formatTimezone, formatOptions) 옵션
   */
  formatTimezone: Intl.LocalesArgument;
  /**
   * new Intl.DateTimeFormat(formatTimezone, formatOptions) 옵션
   */
  formatOptions: Intl.DateTimeFormatOptions;
  /**
   * Date Time 한국어 포맷 적용; yyyy년 mm월 dd일
   * @desc
   * - boolean; yyyy년 mm월 dd일
   * - [(년)boolean, (월)boolean?, (일)boolean?]; [yyyy년, mm월, dd일]
   */
  isKorean: boolean | boolean[];
  /**
   * timezone 보정
   * @see correctTimezone()
   */
  isCorrection: boolean;
  /**
   * ISO 문자열로 반환; yyyy-mm-dd
   */
  isISOString: boolean;
};
