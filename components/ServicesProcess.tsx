"use client";

import { motion } from "framer-motion";
import { whatWeDo, process } from "@/lib/data";
import FeaturedSlider from "./FeaturedSlider";
import {
  Grid3X3, // Interior Architecture (Clean block geometry look)
  Home, // Residential Interiors
  Building2, // Commercial Interiors
  Move3D, // Space Planning (Dynamic axes movement look)
  Armchair, // Furniture & Styling
  Lamp, // Lighting Design
  Grid2X2, // Material Selection (Hatched box pattern approximation)
} from "lucide-react";
import Image from "next/image";
import lamp from "../public/lamp.png";

// Exact same data list elements matching your new image structure completely
const whatWeDoData = [
  {
    text: "Interior Architecture",
    icon: Grid3X3,
  },
  { text: "Residential Interiors", icon: Home },
  {
    text: "Commercial Interiors",
    icon: Building2,
  },
  { text: "Space Planning", icon: Move3D },
  { text: "Furniture & Styling", icon: Armchair },
  { text: "Lighting Design", icon: Lamp },
  { text: "Material Selection", icon: Grid2X2 },
];

export default function ServicesProcess() {
  return (
    /* Full layout background color matching reference picture exactly with proper breathing page padding */
    <section
      id="services"
      className="w-full bg-[#fbf9f4] text-[#1a1a1a] py-16 px-6 sm:px-12 md:px-16 lg:px-24 rounded-xl"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* ========================================================================= */}
        {/* 🟢 PART 1: TOP SECTION - Slider & Main Project Metadata Block */}
        {/* ========================================================================= */}
        <div className="w-full mb-20 flex flex-col items-start">
          {/* Main Showcase Image/Slider Frame - Height exactly matched with image proportions */}
          <div className="w-full overflow-hidden rounded-sm  shadow-sm h-auto relative">
            <FeaturedSlider />
          </div>

          {/* Project Details Sheet - Tight text spacing and weights as shown in image */}
        </div>

        {/* ========================================================================= */}
        {/* 🔵 PART 2: MIDDLE SECTION - "What We Do" Asymmetrical Flex Grid */}
        {/* ========================================================================= */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1.1fr] items-center justify-between border-t border-zinc-200/80 pt-20">
          {/* Left Side: Staircase Column Vertical Frame (Aspect 4/5 for precise narrow look) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="w-full overflow-hidden rounded-sm aspect-[4/5] bg-zinc-100 shadow-sm max-w-[460px] mx-auto md:mx-0"
          >
            <div className="overflow-hidden rounded-sm w-full aspect-[4/5] sm:aspect-[1.1/1] md:aspect-[4/5] bg-zinc-100 shadow-sm max-w-[540px]">
              <img
                src="/foo.jpeg"
                alt="Minimal bathroom layout concept"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side: Clean Descriptive List layout with geometric clean bullet structures */}
          {/* Main container ki max-width ko mazeed barha diya taake dono side ko poori space mile */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1100px] gap-12 mx-auto px-4">
            {/* Left Side: Text and List Content (Width barha kar flex-1 kiye taake text kharab na ho) */}
            <div className="flex flex-col justify-center w-full md:flex-1 max-w-[580px]">
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-serif text-4xl sm:text-4xl md:text-[52px] text-[#1a1a1a] font-bold tracking-normal mb-8 text-left"
              >
                What We Do
              </motion.h3>

              <ul className="space-y-5 w-full text-left">
                {whatWeDoData.map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={item.text}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                      }}
                      className="flex items-center gap-5 text-[#1a1a1a] py-0.5 group"
                    >
                      {/* DYNAMIC ACCURATE CUSTOM BLACK ICON */}
                      <div className="shrink-0 text-[#1a1a1a] transition-transform duration-300 group-hover:scale-105">
                        <IconComponent
                          size={22}
                          className="stroke-[1.5px]"
                        />
                      </div>

                      {/* LIST TEXT CONTENT (whitespace-nowrap ya md:min-w-max lagane se text single line me rahega) */}
                      <span className="text-[15px] sm:text-[16px] md:text-[18px] font-normal tracking-wide text-[#1a1a1a] md:whitespace-nowrap">
                        {item.text}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Right Side: Image with adjusted height */}
            <div className="w-full md:w-[200px] h-[450px] md:h-[550px] relative shrink-0 opacity-[0.1] hidden lg:flex">
              <Image
                src={lamp}
                alt="Lamp"
                fill
                className="object-contain ani"
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 🟡 PART 3: BOTTOM SECTION - Horizontal 4-Column Step Flow Line */}
        {/* ========================================================================= */}
        <div
          id="process"
          className="mt-32 pt-16 border-t border-zinc-200/80 w-full"
        >
          {/* Main Step mapping Grid system */}
          <div
            id="process"
            className=" w-full relative"
          >
            {/* 🟢 MAIN TIMELINE GRID LAYER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 md:gap-6 lg:gap-10 relative w-full">
              {process.map((p, i) => {
                const isFirst = i === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                    }}
                    className="flex flex-col text-left relative pt-8 group"
                  >
                    {/* ========================================================================= */}
                    {/* 🛠️ TOP TIMELINE TRACK & NODES (Exact duplicate matching your reference image) */}
                    {/* ========================================================================= */}
                    <div className="absolute top-0 left-0 w-full flex items-center z-10">
                      {/* Dynamic Step Node Indicator (Dot/Circle) */}
                      {isFirst ? (
                        /* 01 Step: Solid Filled Black Dot */
                        <div className="w-2.5 h-2.5 bg-[#1a1a1a] rounded-full shrink-0 relative z-20" />
                      ) : (
                        /* 02, 03, 04 Steps: Beautiful Hollow Minimal Circles */
                        <div className="w-2.5 h-2.5 rounded-full border border-zinc-300 bg-[#fbf9f4] shrink-0 relative z-20" />
                      )}

                      {/* Connecting Horizontal Line (Desktop par continuous track show karega) */}
                      <div className="absolute left-0 right-0 h-[1px] bg-zinc-200/80 z-0 pointer-events-none w-full" />

                      {/* Animated Loading Overlay Line Effect */}
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{
                          width: "100%",
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.15,
                          ease: "easeInOut",
                        }}
                        className="absolute left-0 h-[1px] bg-zinc-400 z-10 origin-left"
                      />
                    </div>

                    {/* ========================================================================= */}
                    {/* 📄 TEXT CONTENT BLOCK */}
                    {/* ========================================================================= */}
                    {/* Step Index Heading Title */}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[14px] md:text-[18px] font-serif font-bold text-[#1a1a1a] tracking-tight">
                        {p.step}
                      </span>
                      <span className="text-zinc-400 text-xs font-light">
                        —
                      </span>
                      <span className="text-[14px] md:text-[18px] font-serif font-bold text-[#1a1a1a] tracking-tight">
                        {p.title}
                      </span>
                    </div>

                    {/* Description Subtext */}
                    <p className="text-[12px] md:text-[13px] leading-[1.6] text-zinc-600 font-normal mt-2 max-w-[260px]">
                      {p.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Smooth Center-expanding tracking Rule line separator */}
          <div className="relative mt-12 h-[1px] w-full bg-zinc-200">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 h-full bg-zinc-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
