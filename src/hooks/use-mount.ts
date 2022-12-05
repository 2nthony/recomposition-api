import { noop } from "../shared";
import { useEffectOnce } from "./use-effect-once";

export function useMount(callback = noop) {
  useEffectOnce(callback);
}
