"use client";

import { useRef } from "react";
import type { TouchEvent } from "react";

export default function useHorizontalSwipe(move: (direction: number) => void) {
  const start = useRef<{ x: number; y: number } | null>(null);

  return {
    onTouchStart(event: TouchEvent<HTMLElement>) {
      const touch = event.touches[0];
      start.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
    },
    onTouchEnd(event: TouchEvent<HTMLElement>) {
      const origin = start.current;
      start.current = null;
      if (!origin) return;

      const touch = event.changedTouches[0];
      const horizontal = touch.clientX - origin.x;
      const vertical = touch.clientY - origin.y;
      if (Math.abs(horizontal) >= 48 && Math.abs(horizontal) > Math.abs(vertical) * 1.4) {
        move(horizontal < 0 ? 1 : -1);
      }
    },
    onTouchCancel() {
      start.current = null;
    },
  };
}
