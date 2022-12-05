import { useMediaQuery } from "./use-media-query";

export type ColorSchemeType = "light" | "dark" | "no-preference";

const mq = (scheme: string) => `(prefers-color-scheme: ${scheme})`;

export function usePreferredColorScheme(): ColorSchemeType {
  const isLight = useMediaQuery(mq("light"));
  const isDark = useMediaQuery(mq("dark"));

  if (isLight) {
    return "light";
  }
  if (isDark) {
    return "dark";
  }
  return "no-preference";
}
