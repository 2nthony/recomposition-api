// WARNING: emulate

import { noop } from ".";

export function nextTick(callback = noop) {
  Promise.resolve().then(callback);
}

