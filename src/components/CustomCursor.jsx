import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let isIcons = false;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    let animId;
    const tick = () => {
      if (!isIcons) {
        curX += (targetX - curX) * 0.22;
        curY += (targetY - curY) * 0.22;
        cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      }
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animId = requestAnimationFrame(tick);

    const onMouseOver = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (!el) return;
      const cursorType = el.getAttribute('data-cursor');
      if (cursorType === 'icons') {
        const rect = el.getBoundingClientRect();
        cursor.classList.add('cursor-icons');
        cursor.style.transform = `translate3d(${rect.left}px, ${rect.top}px, 0)`;
        cursor.style.setProperty('--cursorH', `${rect.height}px`);
        isIcons = true;
      } else if (cursorType === 'disable') {
        cursor.classList.add('cursor-disable');
      }
    };

    const onMouseOut = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (!el) return;
      cursor.classList.remove('cursor-disable', 'cursor-icons');
      isIcons = false;
    };

    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef} aria-hidden="true" />;
}
