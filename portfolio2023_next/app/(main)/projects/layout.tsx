/**
 * 레이아웃; 프로젝트 라우트 레이아웃
 * @NextLayout
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} props.detail (parallel route) 프로젝트 상세 bottom sheet
 * @desc
 * 프로젝트 상세 bottom sheet 추가
 */
export default function ProjectsLayout({
  children,
  detail,
}: {
  children: React.ReactNode;
  detail: React.ReactNode;
}) {
  return (
    <>
      {children}
      {detail}
    </>
  );
}
