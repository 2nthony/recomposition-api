import { noop } from "../shared";
import { useEffect } from "react";

export function useUnmount(callback = noop) {
  useEffect(() => callback, []);
}
