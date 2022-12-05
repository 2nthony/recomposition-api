import { usePreferredColorScheme } from "./use-preferred-color-scheme";

export function useIsDark() {
  const isDark = usePreferredColorScheme() === "dark";
  return isDark;
}
