import type { WritableAtom } from "jotai";

/**
 * Client-Server 동기화 상태관리를 위한 사전설정 데이터의 Atom 타입
 */
type JotaiServerAtom<AtomValueType> = WritableAtom<
  AtomValueType | Promise<AtomValueType>,
  [AtomValueType],
  void
>;
