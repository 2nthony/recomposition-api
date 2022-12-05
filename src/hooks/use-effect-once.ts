import { EffectCallback, useEffect } from "react";
import { noop } from "../shared";

export function useEffectOnce(callback: EffectCallback = noop) {
  useEffect(callback, []);
}
