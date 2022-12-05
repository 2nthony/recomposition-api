import { noop } from "../shared";
import { useWatch } from "./use-watch";
import { useUnmount } from "./use-unmount";

type InferEventTarget<Event> = {
  addEventListener(event: Event, fn?: any, options?: any): void;
  removeEventListener(event: Event, fn?: any, options?: any): void;
};

type EventListenerOptions = boolean | AddEventListenerOptions;

export type WindowEventName = keyof WindowEventMap;
export type DocumentEventName = keyof DocumentEventMap;

export type GeneralEventListener<E = Event> = (event: E) => void;

export function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: E,
  listener: (this: Window, event: WindowEventMap[E]) => any,
  options?: EventListenerOptions,
): void;

export function useEventListener<E extends keyof DocumentEventName>(
  target: Document,
  event: E,
  listener: (this: Document, event: DocumentEventName[E]) => any,
  options?: EventListenerOptions,
): void;

export function useEventListener<Name extends string, EventType = Event>(
  target: InferEventTarget<Name>,
  event: Name,
  listener: GeneralEventListener<EventType>,
  options?: EventListenerOptions,
): void;

export function useEventListener(...args: any[]) {
  let target: EventTarget | undefined;
  let event: string;
  let listener: Function;
  let options: EventListenerOptions;

  [target, event, listener, options] = args;

  if (!target) {
    return noop;
  }

  let cleanup: Function;

  const listen = (el: any, event: any, listener: any) => {
    el.addEventListener(event, listener, options);
    return () => {
      el.removeEventListener(event, listener, options);
    };
  };

  useWatch(
    target,
    () => {
      if (!target) {
        return;
      }

      if (cleanup) {
        cleanup();
      }

      cleanup = listen(target, event, listener);
    },
    { immediate: true },
  );

  useUnmount(() => {
    if (cleanup) {
      cleanup();
    }
  });
}
