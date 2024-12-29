import { createJSONStorage } from "jotai/utils";
import type {
  AsyncStringStorage,
  SyncStringStorage,
} from "jotai/vanilla/utils/atomWithStorage";

const defaultStorage: AsyncStringStorage | SyncStringStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

/**
 * jotai; 로컬 스토리지 상태관리 json 생성
 */
const local = <AtomValueType>() =>
  createJSONStorage<AtomValueType>(() =>
    typeof window === "undefined" ? defaultStorage : localStorage,
  );

/**
 * jotai; 세션 스토리지 상태관리 json 생성
 */
const session = <AtomValueType>() =>
  createJSONStorage<AtomValueType>(() =>
    typeof window === "undefined" ? defaultStorage : sessionStorage,
  );

/**
 * jotai; 스토리지 상태관리 json 생성
 * - local: 로컬 스토리지
 * - session: 세션 스토리지
 */
const jotaiStorage = { local, session };

export default jotaiStorage;
