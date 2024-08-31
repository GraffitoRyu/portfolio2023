import { atomWithStorage } from "jotai/utils";

import { createServerAtom } from "./util.client";
import jotaiStorage from "../persistence/storage.util";

/**
 * 시스템 언어 상태관리
 * @state
 * @desc
 * - localStorage에 저장
 * - "ko", "en", string
 */
export const systemLocaleState = createServerAtom<SystemLanguageType>(
  "systemLocale",
  atomWithStorage<SystemLanguageType>(
    "systemLocale",
    "ko",
    jotaiStorage.local<SystemLanguageType>(),
  ),
);
