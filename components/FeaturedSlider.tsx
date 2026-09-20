"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { featuredSlides } from "@/lib/data";

const AUTOPLAY_MS = 5000;

export default function FeaturedSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex(
      (i) => (i + 1) % featuredSlides.length,
    );
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex(
      (i) =>
        (i - 1 + featuredSlides.length) %
        featuredSlides.length,
    );
  };

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  const slide = featuredSlides[index];

  // Map numbers to text prefixes matching your layout style dynamically
  const stepNumber = String(index + 1).padStart(
    2,
    "0",
  );

  return (
    <>
      <div className="relative overflow-hidden w-full h-full rounded-sm group">
        {/* Slider Box Frame Wrapper */}
        <div className="relative w-full h-[500px] md:h-[650px] lg:h-[550px] transition-all duration-300">
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="popLayout"
          >
            <motion.img
              key={slide.title}
              src={slide.image}
              alt={slide.title}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 60 : -60,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -60 : 60,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="absolute inset-0 h-full w-full object-cover rounded-xl"
            />
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-zinc-900 opacity-0 transition-opacity duration-300 hover:bg-white group-hover:opacity-100 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2.5 text-zinc-900 opacity-0 transition-opacity duration-300 hover:bg-white group-hover:opacity-100 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>

          {/* Bottom Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {featuredSlides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => {
                  setDirection(
                    i > index ? 1 : -1,
                  );
                  setIndex(i);
                }}
                aria-label={`Go to ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🟢 DYNAMIC BOTTOM TEXT AREA - Styled exactly as you requested */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="mt-8 flex flex-col items-start w-full text-left space-y-1"
        >
          {/* Label index counter part */}
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] font-bold text-zinc-800">
            {stepNumber} —{" "}
            {slide.label ||
              `RESIDENCE NO. ${stepNumber}`}
          </p>

          {/* Main big headline quotation styling */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[45px] font-normal leading-tight text-[#1a1a1a] tracking-normal pt-1 pb-2">
            “{slide.title}”
          </h2>

          {/* Location & Details Info Sheet block */}
          <div className="text-[13px] sm:text-[14px] leading-[1.5] text-zinc-800 font-medium space-y-0.5">
            <p className="font-bold text-[#1a1a1a]">
              Singapore
            </p>
            <p>
              {slide.type ||
                "Residential Interior"}
            </p>
            <p>{slide.year || "2026"}</p>
          </div>

          {/* Action button redirection trigger */}
          <a
            href="#projects"
            className="text-[12px] font-bold tracking-widest uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-zinc-500 hover:border-zinc-400 transition-all duration-300 mt-5 block"
          >
            View Project →
          </a>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
