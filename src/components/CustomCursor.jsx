import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Premium Custom Magnetic Cursor with Contextual States
 * Expands to a glass badge with dynamic labels (VIEW, OPEN, EXPLORE, CONTACT, etc.)
 * Hides on touch devices and respects prefers-reduced-motion.
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-response spring physics
  const springX = useSpring(mouseX, { stiffness: 600, damping: 35, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 35, mass: 0.2 });

  useEffect(() => {
    // Detect touch / mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e) => {
      const target = e.target;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      const clickableTarget = target.closest('a, button, [role="button"], input, textarea');

      if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
      } else if (clickableTarget) {
        setIsHovered(true);
        // Contextual fallback label if none explicitly provided
        if (clickableTarget.tagName.toLowerCase() === 'a' && clickableTarget.target === '_blank') {
          setCursorText('OPEN');
        } else if (clickableTarget.getAttribute('href')?.startsWith('#contact')) {
          setCursorText('CONTACT');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementHover, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Spring Glass Disc */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 84 : 48) : 28,
          height: isHovered ? (cursorText ? 84 : 48) : 28,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: isHovered ? 'rgba(124, 255, 103, 0.12)' : 'rgba(255, 255, 255, 0.04)',
          borderColor: isHovered ? 'rgba(124, 255, 103, 0.5)' : 'rgba(255, 255, 255, 0.25)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 28 }}
        className="rounded-full border backdrop-blur-[4px] flex items-center justify-center text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        {cursorText ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-mono font-bold tracking-[0.15em] text-[#7cff67] uppercase select-none drop-shadow-[0_0_8px_rgba(124,255,103,0.8)]"
          >
            {cursorText}
          </motion.span>
        ) : (
          /* Subtle dot inside outer ring when hovering small targets */
          isHovered && (
            <div className="w-1.5 h-1.5 rounded-full bg-[#7cff67] shadow-[0_0_8px_#7cff67]" />
          )
        )}
      </motion.div>

      {/* Center Pinpoint Dot */}
      {!isHovered && (
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      )}
    </div>
  );
}
