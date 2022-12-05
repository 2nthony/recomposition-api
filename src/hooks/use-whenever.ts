import { noop } from "../shared";
import { useWatch, WatchCallback, WatchDep, WatchOptions } from "./use-watch";

const every = (dep: WatchDep<any>) => {
  dep = Array.isArray(dep) ? dep : [dep];
  return dep.every(Boolean);
};

export function useWhenever<T>(
  dep: WatchDep<T>,
  callback: WatchCallback = noop,
  options?: WatchOptions,
) {
  return useWatch(
    dep,
    (val, oldVal) => {
      if (every(val)) {
        callback(val, oldVal);
      }
    },
    options,
  );
}
