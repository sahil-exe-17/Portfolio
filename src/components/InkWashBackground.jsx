import React, { forwardRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { cn } from "@/lib/cn";

export const InkWashBackground = forwardRef(
  ({ children, className, interactive = true, ...props }, ref) => {
    // Mouse tracking for fluid parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 40, damping: 25 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const blob1X = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
    const blob1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
    const blob2X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
    const blob2Y = useTransform(smoothY, [-0.5, 0.5], [25, -25]);

    // Scroll parallax with lightweight transforms
    const { scrollYProgress } = useScroll();
    const scrollParallax1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const scrollParallax2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Click ripples
    const [ripples, setRipples] = useState([]);

    const handlePointerMove = (e) => {
      if (!interactive) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleClick = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const removeRipple = (id) => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    };

    return (
      <div
        ref={ref}
        data-slot="ink-wash-background"
        onPointerMove={handlePointerMove}
        onClick={handleClick}
        className={cn(
          "relative isolate overflow-hidden bg-[#FAFAF8] text-[#1C1917]",
          className
        )}
        {...props}
      >
        {/* Base Atmospheric Light Radial Gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-30 bg-[radial-gradient(circle_at_50%_0%,#FFFFFF_0%,#FAFAF8_55%,#F5F5F2_100%)]"
        />

        {/* High-Performance GPU-Accelerated Ink Blooms (Radial Gradients - 0 CPU re-rasterization) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
        >
          {/* Blob 1 - Warm Stone (#A8A29E) */}
          <motion.div
            style={{ x: blob1X, y: blob1Y, translateY: scrollParallax1 }}
            animate={{
              scale: [1, 1.08, 0.96, 1],
              rotate: [0, 6, -4, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[2%] left-[4%] w-[55vw] h-[55vw] max-w-[680px] max-h-[680px] 2xl:max-w-[950px] 2xl:max-h-[950px] 4xl:max-w-[1500px] 4xl:max-h-[1500px] rounded-full bg-[radial-gradient(circle,rgba(168,162,158,0.24)_0%,transparent_70%)] will-change-transform"
          />

          {/* Blob 2 - Medium Stone (#78716C) */}
          <motion.div
            style={{ x: blob2X, y: blob2Y, translateY: scrollParallax2 }}
            animate={{
              scale: [0.95, 1.06, 1, 0.95],
              rotate: [0, -8, 6, 0],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[24%] right-[2%] w-[50vw] h-[50vw] max-w-[620px] max-h-[620px] 2xl:max-w-[900px] 2xl:max-h-[900px] 4xl:max-w-[1400px] 4xl:max-h-[1400px] rounded-full bg-[radial-gradient(circle,rgba(120,113,108,0.18)_0%,transparent_70%)] will-change-transform"
          />

          {/* Blob 3 - Deep Charcoal Ink Accent (#57534E) */}
          <motion.div
            style={{ x: blob1X, y: blob2Y }}
            animate={{
              scale: [1, 0.94, 1.05, 1],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[4%] left-[20%] w-[52vw] h-[52vw] max-w-[640px] max-h-[640px] 2xl:max-w-[920px] 2xl:max-h-[920px] 4xl:max-w-[1450px] 4xl:max-h-[1450px] rounded-full bg-[radial-gradient(circle,rgba(87,83,78,0.14)_0%,transparent_70%)] will-change-transform"
          />
        </div>

        {/* Microscopic Ink Dot Grid Pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 [background-image:radial-gradient(circle_at_center,#292524_1px,transparent_1px)] [background-size:5px_5px] opacity-[0.03]"
        />

        {/* Interactive Click Water Ripples */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.35 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              onAnimationComplete={() => removeRipple(ripple.id)}
              style={{
                position: "absolute",
                left: ripple.x,
                top: ripple.y,
                width: 120,
                height: 120,
                marginLeft: -60,
                marginTop: -60,
                borderRadius: "50%",
                border: "1.5px solid rgba(87, 83, 78, 0.25)",
                background: "radial-gradient(circle, rgba(168, 162, 158, 0.1) 0%, transparent 70%)",
              }}
            />
          ))}
        </div>

        {/* Main Content Slot */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
      </div>
    );
  }
);

InkWashBackground.displayName = "InkWashBackground";

export default InkWashBackground;
