import { useEffect } from 'react';
import { enableSwarm } from '@leozodiac/swarm66';

/**
 * Custom hook to activate the Swarm66 autonomous cursor builder effect on a specific page.
 * Automatically cleans up (destroys the overlay and resets styles) when navigating away.
 */
export const useSwarm = (options) => {
  useEffect(() => {
    const swarm = enableSwarm({
      agentCount: 28,
      buildDuration: 280,
      hideOnStart: true,
      typewriterEffect: true,
      vanishAtCursor: true,
      ...options,
    });

    return () => {
      swarm.destroy?.();
    };
  }, []);
};

export default useSwarm;
