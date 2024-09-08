import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

/**
 * 프로젝트 각 상세 데이터 상태관리
 * @state
 * @return {DetailDataCollectionTypes}
 */
export const projectDetailDataState = atom<DetailDataCollectionTypes>({});

/**
 * 프로젝트 카테고리별 데이터
 * @state
 */
export const projectCategoryDetailDataState = atomFamily(
  (category: string | undefined) =>
    atom(
      get => (category ? get(projectDetailDataState)[category] : undefined),
      (get, set, state: ProjectsAPIDataType | undefined) => {
        if (!category) return;

        const prev = get(projectDetailDataState);
        set(projectDetailDataState, { ...prev, [category]: state });
      },
    ),
);
