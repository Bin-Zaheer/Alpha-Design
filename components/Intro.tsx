"use client";

import { motion } from "framer-motion"; // 'motion/react' ko generic safe package se handle kiya
import { projects } from "@/lib/data";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Intro() {
  return (
    /* Reference pic ke mutabik background color [#fbf9f4] (soft off-white cream) aur extra tracking sets update kiye hain */
    <section
      id="about"
      className="w-full bg-[#fbf9f4] text-[#1a1a1a] mx-auto px-6 py-24 md:px-16 lg:px-24 rounded-xl"
    >
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-start justify-between">
        {/* 🟢 LEFT SIDE: Text Section (Reference Image Alignment) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col justify-center max-w-[690px] md:text-start text-left"
        >
          {/* Main Serif Big Headline (Exact same text breaking styling) */}
          <h2 className="font-serif lg:text-6xl text-4xl font-bold leading-[1.1]  tracking-tight text-[#1a1a1a]">
            We design spaces with character,
            balance and intention.
          </h2>

          {/* Detailed Paragraph Text */}
          <p className="text-[12px] sm:text-[18px] leading-[1.6] text-zinc-700 font-semibold mt-10 max-w-[660px]">
            <span className="font-bold text-[#1a1a1a] tracking-wide">
              ALPHA DESIGN
            </span>{" "}
            is an interior design studio dedicated
            to creating timeless residential and
            commercial spaces that seamlessly
            blend aesthetics and functionality.
            Our approach is rooted in a deep
            understanding of your lifestyle,
            focusing on natural materials, refined
            details, and a sense of enduring
            quality.
          </p>
          <p className="text-[12px] sm:text-[18px] leading-[1.6] text-zinc-700 font-semibold mt-5 max-w-[660px]">
            ALPHA DESIGN is an interior design
            studio dedicated to creating timeless
            residential and commercial spaces that
            seamlessly blend aesthetics and
            functionality.
          </p>
        </motion.div>

        {/* 🔵 RIGHT SIDE: Single Image Grid (Jo pehle do cards mien broken tha, ab single clear frame hai image ki tarah) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="w-full flex justify-end md:justify-end justify-center"
        >
          {/* Image Aspect ratio reference pic ke rectangular vertical cuts se map kiya */}
          <div className="overflow-hidden rounded-sm w-full md:max-w-[420px] aspect-[3/4] shadow-sm">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              src="/project1.jpeg" // Aapki stairs architectural image path
              alt="Entrance and staircase details"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* --- Rest of your Sections: Projects Grid Section --- */}
      <div
        id="projects"
        className="mt-24 max-w-7xl mx-auto px-1"
      >
        {/* --- LINE 1: Top 2 Big Images (Desktop par 2 columns, Mobile par default stack ya grids) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-12">
          {projects.slice(0, 2).map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="group overflow-hidden"
            >
              {/* Reference pic ke mutabik top large content boxes aspect ratio [1/1] (Square) ya [4/3] rectangle set kiya */}
              <div className="overflow-hidden aspect-square bg-zinc-100 rounded-sm">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-[15px] md:text-[18px] font-serif text-[#1a1a1a] tracking-normal font-bold">
                {p.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* --- LINE 2: Bottom 3 Smaller Images (Desktop par 3 columns, Tablet pe 3, Small mobile par 1 ya 2 columns auto grid) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(2, 5).map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              className="group overflow-hidden"
            >
              {/* Niche wale 3 grids ke aspect ratios ko image ke exact vertically matching dimensions [4/5] frame par clamp kiya */}
              <div className="overflow-hidden aspect-[4/5] bg-zinc-100 rounded-sm">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[14px] md:text-[16px] font-serif text-[#1a1a1a] tracking-normal font-bold">
                {p.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* --- Blockquote Editorial Banner Section --- */}
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        /* Reference image ke mutabik top border, custom padding, aur balanced grid alignment adjust ki hai */
        className="mt-28 grid gap-12 md:gap-16 border-t border-zinc-200/60 pt-20 md:grid-cols-[1fr_1fr] max-w-7xl mx-auto px-1 items-center"
      >
        {/* 🟢 LEFT SIDE: Vertical Minimal Image Block */}
        <div className="overflow-hidden rounded-sm w-full aspect-[4/5] sm:aspect-[1.1/1] md:aspect-[4/5] bg-zinc-100 shadow-sm max-w-[540px]">
          <Image
            src="/mini.jpeg"
            alt="Minimal bathroom layout concept"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 🔵 RIGHT SIDE: Text Content Box (Perfect alignment with reference pic) */}
        <div className="flex flex-col justify-center max-w-[580px] md:text-start text-left">
          {/* Large Serif Blockquote Headline (Bina extra quotes character scaling ke, bold elegant style) */}
          <h3 className="font-serif text-4xl sm:text-4xl md:text-[60px] text-[#1a1a1a] font-bold leading-[1.15] md:leading-[1.15]">
            “Less, but never ordinary.”
          </h3>

          {/* Detailed Brand Paragraph Text */}
          <p className="mt-6 text-[14px] sm:text-[18px] leading-[1.65] text-zinc-700  font-bold">
            At{" "}
            <span className="font-bold text-[#1a1a1a]  tracking-wide">
              ALPHA DESIGN
            </span>
            , we believe in design that embraces
            simplicity and purpose. We focus on
            clean lines, honest materials, and
            thoughtful compositions, creating
            spaces that are refined, serene, and
            ultimately, timeless.
          </p>
        </div>
      </motion.blockquote>
    </section>
  );
}
