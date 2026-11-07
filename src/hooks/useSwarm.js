import { useEffect } from 'react';
import { enableSwarm } from '@leozodiac/swarm66';

/**
 * Custom hook to activate the Swarm66 autonomous cursor builder effect on a specific page.
 * Automatically cleans up (destroys the overlay and resets styles) when navigating away.
 */
export const useSwarm = (options) => {
  useEffect(() => {
    let swarm = null;

    // Small delay to let page transitions and framer-motion elements mount
    const timer = setTimeout(() => {
      swarm = enableSwarm({
        hideOnStart: true,
        typewriterEffect: true,
        vanishAtCursor: true,
        ...options,
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      if (swarm) {
        swarm.destroy?.();
      }
    };
  }, [options]);
};

export default useSwarm;
