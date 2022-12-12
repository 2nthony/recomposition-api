// WARNING: emulate

import { noop } from ".";

/**
 * @description emulate next tick, with risk!
 */
export function nextTick(callback = noop) {
  Promise.resolve().then(callback);
}
