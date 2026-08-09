import assert from "node:assert/strict";
import test from "node:test";

import { resolvePageLoadChange } from "./pageLoadChange.ts";

test("같은 페이지의 상세 경로 변경은 진행 중인 전환 상태를 보존한다", () => {
  const state = {
    currentPage: "projects",
    loaded: false,
  };

  assert.strictEqual(resolvePageLoadChange(state, "projects"), state);
});

test("메인 페이지 변경은 새 페이지의 로드 완료 상태로 전환한다", () => {
  assert.deepEqual(
    resolvePageLoadChange(
      {
        currentPage: "projects",
        loaded: false,
      },
      "profile",
    ),
    {
      currentPage: "profile",
      loaded: true,
    },
  );
});
