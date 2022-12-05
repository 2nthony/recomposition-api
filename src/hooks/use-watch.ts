import { noop } from "../shared";
import { DependencyList, useEffect, useState } from "react";
import { useIsFirstMount } from "./use-is-first-mount";
import { useMount } from "./use-mount";

export type WatchDep<T = DependencyList[0]> = T | T[];
export type WatchCallback = (newValue: WatchDep, oldValue: WatchDep) => void;
export type WatchOptions = {
  immediate?: boolean;
};

export function useWatch<T>(
  dep: WatchDep<T>,
  callback: WatchCallback = noop,
  options?: WatchOptions,
) {
  const { immediate = false } = options ?? {};
  let effectDep = dep as DependencyList;

  if (!Array.isArray(dep)) {
    effectDep = [dep];
  }

  const isFirstMount = useIsFirstMount();

  const [oldValue, setOldValue] = useState<T | T[] | undefined>(
    immediate ? undefined : dep,
  );

  const effect = () => {
    callback(dep, oldValue as T | T[]);
    setOldValue(dep);
  };

  useMount(() => {
    if (immediate) {
      effect();
    }
  });

  useEffect(() => {
    if (!isFirstMount) {
      effect();
    }
  }, effectDep);
}
