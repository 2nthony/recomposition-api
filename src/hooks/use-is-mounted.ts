import { useRef } from "react";
import { useMount } from "./use-mount";
import { useUnmount } from "./use-unmount";

export function useIsMounted() {
  const isMounted = useRef(false);

  useMount(() => {
    isMounted.current = true;
  });

  useUnmount(() => {
    isMounted.current = false;
  });

  return isMounted.current;
}
