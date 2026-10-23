import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  Home, User, Code2, Briefcase, Clock, Layers, Mail, Settings, 
  Sparkles, Terminal, Compass, FolderGit2
} from "lucide-react";
import { cn } from "@/lib/cn";

// Icon resolver for string icon names or direct React elements
const resolveIcon = (icon, className = "w-4 h-4 sm:w-5 sm:h-5") => {
  if (React.isValidElement(icon)) return icon;
  
  const iconMap = {
    home: Home,
    overview: Home,
    about: User,
    user: User,
    philosophy: Compass,
    skills: Code2,
    code: Code2,
    craft: Code2,
    work: Briefcase,
    projects: FolderGit2,
    journey: Clock,
    timeline: Clock,
    clock: Clock,
    stack: Layers,
    layers: Layers,
    contact: Mail,
    mail: Mail,
    settings: Settings,
    sparkles: Sparkles,
    terminal: Terminal,
  };

  const IconComponent = typeof icon === "string" ? iconMap[icon.toLowerCase()] || Sparkles : Sparkles;
  return <IconComponent className={className} />;
};

function DockIconItem({ item, mouseX, isActive, onClick }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate distance from mouseX to item center
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Smooth magnification width & height transformation
  const widthTransform = useTransform(distance, [-120, 0, 120], [40, 56, 40]);
  const heightTransform = useTransform(distance, [-120, 0, 120], [40, 56, 40]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 220, damping: 14 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 220, damping: 14 });

  return (
    <motion.a
      ref={ref}
      href={item.href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor={item.title?.toUpperCase() || "NAV"}
      style={{ width, height }}
      className={cn(
        "relative rounded-full flex items-center justify-center transition-colors duration-200 select-none",
        isActive 
          ? "bg-[#1C1917] text-[#FAFAF8] shadow-[0_4px_16px_rgba(28,25,23,0.2)]" 
          : "bg-white/70 hover:bg-white text-[#57534E] hover:text-[#1C1917] border border-[#292524]/08 hover:border-[#292524]/20 shadow-[0_2px_8px_rgba(41,37,36,0.03)]"
      )}
    >
      {/* Icon */}
      <span className="flex items-center justify-center pointer-events-none">
        {resolveIcon(item.icon, isActive ? "text-[#FAFAF8]" : "text-current")}
      </span>

      {/* Active Indicator Under-Dot */}
      {isActive && (
        <motion.span
          layoutId="activeDockDot"
          className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#1C1917]"
        />
      )}

      {/* Floating Tooltip Label on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full mt-2.5 px-2.5 py-1 rounded-md bg-[#1C1917] text-[#FAFAF8] text-[10px] font-mono tracking-wider uppercase whitespace-nowrap pointer-events-none shadow-[0_6px_20px_rgba(28,25,23,0.18)] z-50 flex items-center gap-1"
          >
            <span>{item.title}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export function GlassDock({
  items = [],
  className,
  brandName = "SAHIL LALE",
  brandSubtitle = "SOFTWARE ENGINEER",
  brandHref = "#home",
  activeSection,
  onItemClick,
  onOpenCommand,
  ...props
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none",
        className
      )}
      {...props}
    >
      <nav
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto max-w-full flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full bg-[#FAFAF8]/80 backdrop-blur-xl border border-[#292524]/10 shadow-[0_12px_40px_rgba(41,37,36,0.08)]"
      >
        {/* Brand Monogram & Name Pill */}
        {brandName && (
          <a
            href={brandHref}
            data-cursor="SAHIL"
            className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/80 border border-[#292524]/08 hover:border-[#1C1917] transition-all text-[#1C1917] group"
          >
            <span className="font-heading text-sm sm:text-base font-bold tracking-tight flex items-center gap-0.5">
              SL<span className="w-1.5 h-1.5 rounded-full bg-[#57534E] ml-0.5" />
            </span>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-[11px] font-mono font-semibold tracking-wider text-[#1C1917] leading-none">
                {brandName}
              </span>
              <span className="text-[9px] font-mono text-[#78716C] leading-tight tracking-wider mt-0.5">
                {brandSubtitle}
              </span>
            </div>
          </a>
        )}

        {/* Divider hairline */}
        <div className="w-[1px] h-6 bg-[#292524]/10 mx-0.5" />

        {/* Dynamic Glass Dock Items with Magnification */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {items.map((item, idx) => {
            const sectionTarget = item.href?.replace(/^#/, "");
            const isItemActive = activeSection === sectionTarget;

            return (
              <DockIconItem
                key={item.title || idx}
                item={item}
                mouseX={mouseX}
                isActive={isItemActive}
                onClick={(e) => onItemClick?.(item, e)}
              />
            );
          })}
        </div>

        {/* Right Quick Action: Command Palette + Email button */}
        <div className="hidden sm:flex items-center gap-1.5 pl-1">
          <button
            type="button"
            onClick={onOpenCommand}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-wider text-[#78716C] hover:text-[#1C1917] bg-[#292524]/04 hover:bg-[#292524]/08 border border-[#292524]/08 transition-all"
            title="Search & Jump (⌘K / Ctrl+K)"
          >
            <span className="font-sans text-[11px] font-semibold">⌘</span>
            <span>K</span>
          </button>

          <a
            href="mailto:sahillale17@gmail.com"
            data-cursor="EMAIL"
            className="px-3 py-1.5 rounded-full text-[11px] font-mono font-medium tracking-wider uppercase text-[#1C1917] bg-[#292524]/05 hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-all"
          >
            LET'S TALK
          </a>
        </div>
      </nav>
    </div>
  );
}

export default GlassDock;
