// style components
import {
  StyledExpContents,
  StyledExpDesc,
  StyledExpItem,
  StyledExpTitle,
} from "@/styles/styled/components/ProfileExperience";

/**
 * 프로필 > 경험; 각 항목 컴포넌트
 * @component
 * @param {ExpItemProps} props
 * @param {string} props.code 구분 코드
 * @param {string} [props.title] 항목 타이틀
 * @param {string[]} props.desc 항목 설명 정보
 * @param {boolean} props.isActive 활성화 여부
 * @param {number} props.$totalLength 스타일 계산을 위한 목록 총 개수
 */
export default function ProfileExperienceItem({
  code,
  title,
  desc,
  isActive,
  $totalLength,
}: ExpItemProps) {
  return (
    <StyledExpItem className={isActive ? "on" : ""} $totalLength={$totalLength}>
      <StyledExpContents>
        <StyledExpTitle>
          <span>{title || code}</span>
        </StyledExpTitle>
        {desc?.map((p: string, i: number) => (
          <StyledExpDesc key={`exp_${code}_depth1_${i}`}>
            <span>{p}</span>
          </StyledExpDesc>
        ))}
      </StyledExpContents>
    </StyledExpItem>
  );
}
