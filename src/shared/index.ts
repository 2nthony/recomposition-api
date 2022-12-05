export * from "./next-tick";

export function noop() {}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
