"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  getProfileCareerData,
  getProfileExperienceData,
  getProfileStackKeysList,
  getProfileStacksData,
  getProjectsData,
  getProjectsDetailData,
} from "./fetch.firebase";

/**
 * 프로필 > 커리어 데이터 API 쿼리
 * @api
 * @method GET
 * @route /api/profile/career
 */
export const useQueryProfileCareerData = (): UseQueryResult<
  CareerAPIDataType[]
> =>
  useQuery({
    queryKey: ["profile/career"],
    queryFn: () => getProfileCareerData(),
  });

/**
 * 프로필 > 경험 데이터 API fetch
 * @api
 * @method GET
 * @route /api/profile/experience
 */
export const useQueryProfileExperienceData = (): UseQueryResult<
  ExperienceAPIDataTypes[]
> =>
  useQuery({
    queryKey: ["profile/experience"],
    queryFn: () => getProfileExperienceData(),
  });

/**
 * 프로필 > 기술스택 카테고리 key 데이터 API fetch
 * @api
 * @method GET
 * @route /api/profile/stacks/key
 */
export const useQueryProfileStackKeys = (): UseQueryResult<
  StackKeyAPIDataTypes[]
> =>
  useQuery({
    queryKey: ["profile/stack/key"],
    queryFn: () => getProfileStackKeysList(),
  });

/**
 * 프로필 > 기술스택 데이터 API fetch
 * @api
 * @method GET
 * @route /api/profile/stacks
 */
export const useQueryProfileStacksData = (): UseQueryResult<
  StackAPIDataTypes[]
> =>
  useQuery({
    queryKey: ["profile/stack"],
    queryFn: () => getProfileStacksData(),
  });

/**
 * 프로젝트 목록 데이터 API fetch
 * @api
 * @method GET
 * @route /api/projects
 */
export const useQueryProjectListData = (): UseQueryResult<
  ProjectsAPIDataType[]
> =>
  useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjectsData(),
  });

/**
 * 프로젝트 상세 데이터 API fetch
 * @api
 * @method GET
 * @route /api/projects/{detailCode}
 * @param {string} code 프로젝트 코드
 */
export const useQueryProjectsDetailData = (
  code: string,
): UseQueryResult<ProjectsAPIDataType | undefined> =>
  useQuery({
    queryKey: ["projects/detail", code],
    queryFn: () => getProjectsDetailData(code),
    enabled: typeof code === "string" && code !== "",
  });
