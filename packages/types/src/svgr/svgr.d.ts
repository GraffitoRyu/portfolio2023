/**
 * svgr 타입 정의 지원파일
 * @desc
 * - 타입스크립트 호환을 위한 svg import 모듈 타입 선언
 * - 각 프로젝트의 tsconfig.json 파일 내의 "include"에, 상태경로 추가
 * @see https://react-svgr.com/docs/types/
 * @example
 * ```json
 * {
 *  ...,
 *  "include": [..., "../packages/next-config/src/svgr/types/svgr.d.ts"],
 *  ...,
 * }
 * ```
 */

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: unknown;
  export default content;
}
