import { useRef } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

/**
 * 디버깅; 렌더링 유발 디펜던시 체크
 * @example
 * ```typescript
 * useEffectRenderDebug(() => {
 *   if (condition) setState(newValue)
 * }, [condition, newValue], ["condition", "newValue"])
 * ```
 * ```console
 * [변경 deps] condition
 * ```
 */
export default function useEffectRenderDebug(
  callback: React.EffectCallback,
  dependencies: React.DependencyList,
  dependencyNames: string[] = [],
) {
  const previousDeps = useRef<React.DependencyList>(dependencies);

  interface ChangedDepsType {
    [dependencyKey: string]: {
      before: unknown;
      after: unknown;
    };
  }
  useIsomorphicLayoutEffect(() => {
    const changedDeps = dependencies.reduce<ChangedDepsType>(
      (acc, dep, index) => {
        if (dep !== previousDeps.current[index]) {
          const depName = dependencyNames[index] || `Dependency[${index}]`;
          return {
            ...acc,
            [depName]: {
              before: previousDeps.current[index],
              after: dep,
            },
          };
        }
        return acc;
      },
      {},
    );

    if (Object.keys(changedDeps).length) {
      console.log("%c[변경 deps]", "color:orange;", changedDeps);
    }

    previousDeps.current = dependencies;
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
