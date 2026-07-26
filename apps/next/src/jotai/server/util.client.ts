import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

import type { JotaiServerAtom } from "@/types/state/server.export";

import { parseData, string } from "@portfolio/utils";
import { getFetchServerState, postFetchServerState } from "@/lib/fetch.system";

/**
 * 서버 쿠키로부터 상태값 추출하는 API fetch 호출
 * @util
 * @method GET
 * @route /api/serverState/{stateKey}
 */
export const getAtomServerState = async <AtomValueType>(
  stateKey: string,
  storageValue?: AtomValueType,
) => {
  // 스토리지 값이 존재하는 경우, 스토리지 상태값으로 반환
  if (storageValue) return storageValue;

  // API fetch를 통해 서버 쿠키로 저장된 상태값 호출
  const { value } = await getFetchServerState(stateKey);

  // string으로 넘어오기 때문에, 원래의 상태 타입으로 parsing
  return parseData(value) as AtomValueType;
};

/**
 * atom 생성 (서버, 로컬스토리지, 클라이언트 모두 활용할 상태 atom)
 * @util
 * @param {string} stateKey
 */
export const createServerAtom = <AtomValueType>(
  stateKey: string,
  a: JotaiServerAtom<AtomValueType>,
) =>
  atom(
    get => {
      const storageStateValue = get(a);
      const { data } = get(
        // 서버 쿠키에 저장된 상태값 가져오기
        atomWithQuery<AtomValueType>(() => ({
          queryKey: [stateKey, storageStateValue],
          queryFn: async () =>
            await getAtomServerState(stateKey, storageStateValue),
        })),
      );
      return data;
    },
    async (get, set, newValue: AtomValueType) => {
      await postFetchServerState({ key: stateKey, value: string(newValue) });
      set(a, newValue);
    },
  );
