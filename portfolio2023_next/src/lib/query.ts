"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  getProfileCareerData,
  getProfileExperienceData,
  getProfileStackKeysList,
  getProfileStacksData,
  getProjectsData,
} from "./fetch";

/**
 * 프로필 > 커리어 데이터 API 쿼리
 * @api
 * @method GET
 * @route /api/profile/career
 */
export const useQueryProfileCareerData = (): UseQueryResult<CareerTypes[]> =>
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
  ExperienceTypes[]
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
export const useQueryProfileStackKeys = (): UseQueryResult<StackKeyTypes[]> =>
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
export const useQueryProfileStacksData = (): UseQueryResult<StackTypes[]> =>
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
export const useQueryProjectListData = (): UseQueryResult<ProjectsType[]> =>
  useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjectsData(),
  });

/**
 * 프로젝트 상세 데이터 API fetch
 * @api
 * @method GET
 * @route /api/projects/{detailCode}
 */
export const useQueryProjectsDetailData = (
  code?: string,
): UseQueryResult<ProjectsType> =>
  useQuery({
    queryKey: ["projects/detail", code],
    queryFn: () => getProjectsData(),
    enabled: typeof code === "string" && code !== "",
  });
