/**
 * 프로필 > 경력 데이터 API fetch
 * @api
 * @method GET
 * @route /api/profile/career
 */
export const getProfileCareerData = async () =>
  await (await fetch(`/api/profile/career`)).json();

/**
 * 프로필 > 경험 데이터 API fetch
 * @api
 * @method GET
 * @route /api/profile/experience
 */
export const getProfileExperienceData = async () =>
  await (await fetch(`/api/profile/experience`)).json();

/**
 * 프로필 > 기술스택 카테고리 key 데이터 API fetch
 * @api
 * @method GET
 * @route /api/profile/stacks/key
 */
export const getProfileStackKeysList = async () =>
  await (await fetch(`/api/profile/stacks/key`)).json();

/**
 * 프로필 > 기술스택 데이터 API fetch
 * @api
 * @method GET
 * @route /api/profile/stacks
 */
export const getProfileStacksData = async () =>
  await (await fetch(`/api/profile/stacks`)).json();

/**
 * 프로젝트 목록 데이터 API fetch
 * @api
 * @method GET
 * @route /api/projects
 */
export const getProjectsData = async () =>
  await (await fetch(`/api/projects`)).json();

/**
 * 프로젝트 상세 데이터 API fetch
 * @api
 * @method GET
 * @route /api/projects/{detailCode}
 */
export const getProjectsDetailData = async (code: string) =>
  await (await fetch(`/api/projects/${code}`)).json();
