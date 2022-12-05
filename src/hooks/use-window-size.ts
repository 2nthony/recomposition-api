import { useState } from "react";
import { useMount } from "./use-mount";
import { useUnmount } from "./use-unmount";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function handleResize() {
    setWindowSize(getWindowSize());
  }

  useMount(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  useUnmount(() => {
    window.removeEventListener("resize", handleResize);
  });

  return windowSize;
}

// https://github.com/jaredLunde/react-hook/blob/60a6913d1920cee9f99c94f572a88d481fcd39ed/packages/window-size/src/index.tsx#L14-L18
function getWindowSize() {
  const el = document?.documentElement;

  if (!el) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: el.clientWidth,
    height: el.clientHeight,
  };
}
