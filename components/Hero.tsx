"use client";

import { motion } from "motion/react";
import banner from "../public/new6.jpeg";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[100vh] min-h-[690px] w-full items-center justify-center overflow-hidden px-6 pt-16"
    >
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: "easeOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src={banner}
          alt="Alpha Design interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl text-center text-cream">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="mb-4 text-xs tracking-widest2 text-cream/80"
        >
          INTERIOR ARCHITECTURE &amp; DESIGN
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="font-serif text-4xl tracking-wide sm:text-5xl md:text-6xl"
        >
          ALPHA DESIGN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.75,
            duration: 0.8,
          }}
          className="mt-3 font-serif text-2xl italic sm:text-3xl"
        >
          &ldquo;Spaces That Feel Like You.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mt-5 max-w-md text-sm text-cream/85"
        >
          Interior architecture and design crafted
          around timeless materials, thoughtful
          details and the way you live.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.3,
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#F4EFE7",
            color: "#1C1A17",
          }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-block  border border-cream/70 px-8 py-3 text-sm tracking-wide text-cream transition-colors"
        >
          Explore Our Work →
        </motion.a>
      </div>
    </section>
  );
}
