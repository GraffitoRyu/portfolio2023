import assert from "node:assert/strict";
import test from "node:test";

import { watchSystemTheme } from "./theme.util.ts";

test("시스템 테마 변경을 구독하고 해제한다", t => {
  let matches = false;
  let listener;
  const originalWindow = globalThis.window;

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      matchMedia: () => ({
        get matches() {
          return matches;
        },
        addEventListener: (_event, handler) => {
          listener = handler;
        },
        removeEventListener: (_event, handler) => {
          if (listener === handler) listener = undefined;
        },
      }),
    },
  });
  t.after(() =>
    Object.defineProperty(globalThis, "window", {
      configurable: true,
      value: originalWindow,
    }),
  );

  const themes = [];
  const unwatch = watchSystemTheme(theme => themes.push(theme));

  assert.deepEqual(themes, ["light"]);
  matches = true;
  listener();
  assert.deepEqual(themes, ["light", "dark"]);

  unwatch();
  assert.equal(listener, undefined);
});
