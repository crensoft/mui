import { useState, useEffect } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

/**
 * Defaults to window object
 * Optionally can pass another node using id without '#'
 * @param param0
 */
export default function useScrollEffect({ scrollTarget }: { scrollTarget: any }) {
  if (typeof window === 'undefined') {
    return false;
  }
  const [scrollElement, setScrollTarget] = useState<any>(window);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollElement,
  });

  useEffect(() => {
    if (scrollTarget) {
      const newScrollTarget = document.getElementById(scrollTarget);
      if (newScrollTarget) {
        setScrollTarget(newScrollTarget);
      }
    }
  }, []);

  return trigger;
}
