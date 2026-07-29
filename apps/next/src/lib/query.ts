"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import type { ProjectItemData } from "@graffitoryu/preset-data";
import { source } from "@/data";

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
    queryKey: ["profile"],
    queryFn: () => source.getProfile(),
    select: ({ career }) => career,
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
    queryKey: ["profile"],
    queryFn: () => source.getProfile(),
    select: ({ experience }) => experience,
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
    queryKey: ["profile"],
    queryFn: () => source.getProfile(),
    select: ({ stackKeys }) => stackKeys,
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
    queryKey: ["profile"],
    queryFn: () => source.getProfile(),
    select: ({ stacks }) => stacks,
  });

/**
 * 프로젝트 목록 데이터 API fetch
 * @api
 * @method GET
 * @route /api/projects
 */
export const useQueryProjectListData = (): UseQueryResult<ProjectItemData[]> =>
  useQuery({
    queryKey: ["projects"],
    queryFn: () => source.getProjects(),
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
    queryFn: () => source.getProject(code),
    enabled: typeof code === "string" && code !== "",
  });
