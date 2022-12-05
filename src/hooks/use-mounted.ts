import { nextTick, noop } from "../shared";
import { useIsMounted } from "./use-is-mounted";
import { useWatch } from "./use-watch";

export function useMounted(callback = noop) {
  const isMounted = useIsMounted();

  useWatch(isMounted, (v) => {
    if (v) {
      nextTick(() => {
        callback();
      });
    }
  });
}
