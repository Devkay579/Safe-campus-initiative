"use client";

import { useEffect, useRef } from 'react';

export default function VisitorTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    const controller = new AbortController();
    const run = async () => {
      try {
        await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ page: window.location.pathname }),
          signal: controller.signal,
          keepalive: true,
        });
      } catch {
        // Silently ignore tracking errors.
      }
    };

    void run();
    return () => controller.abort();
  }, []);

  return null;
}
