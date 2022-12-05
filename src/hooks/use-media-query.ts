import { useState } from "react";
import { useEventListener } from "./use-event-listener";
import { useWatch } from "./use-watch";

export type MediaQueryListEventName = keyof MediaQueryListEventMap;

export function useMediaQuery(query: string) {
  const getMatchMedia = () => window.matchMedia(query);

  const [mediaQuery, setMediaQuery] = useState(getMatchMedia());
  const [matches, setMatches] = useState(mediaQuery.matches);

  const update = (e: MediaQueryListEvent) => {
    setMatches(e.matches);
  };

  useWatch(query, () => {
    setMediaQuery(getMatchMedia());
  });

  useEventListener<MediaQueryListEventName, MediaQueryListEvent>(
    mediaQuery,
    "change",
    update,
  );

  return matches;
}
