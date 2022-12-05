import { useRef } from "react";

export function useIsFirstMount() {
  const isFirstMount = useRef(true);

  if (isFirstMount.current) {
    isFirstMount.current = false;
    return true;
  }

  return isFirstMount.current;
}
