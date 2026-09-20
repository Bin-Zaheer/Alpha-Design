"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  projects,
  testimonials,
} from "@/lib/data";
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
  const [
    currentTestimonial,
    setCurrentTestimonial,
  ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1
          ? 0
          : prev + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1,
    );
  };

  return (
    <section
      id="about"
      className="w-full bg-[#fbf9f4] text-[#1a1a1a] mx-auto px-6 py-24 md:px-16 lg:px-24 lg:rounded-xl"
    >
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-[1.2fr_0.8fr] items-start justify-between">
        {/* LEFT SIDE: Text Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col justify-center max-w-[690px] md:text-start text-left"
        >
          <p className="text-[#1a1a1a] pb-5 text-lg border-1 border-[#1a1a1a] lg:pt-10 -mt-10 lg:-mt-0">
            Who We Are
          </p>

          <h2 className="font-serif lg:text-6xl text-4xl font-bold leading-[1.1] lg:pb-3 tracking-tight text-[#1a1a1a]">
            Where imagination meets reality
          </h2>

          <p className="text-lg sm:text-[18px] leading-[1.6] text-zinc-700 font-semibold mt-10 max-w-[630px]">
            We are a collective of visual
            architects and strategic thinkers. At
            Alpha Design, we don’t just follow
            trends; we set the pace. Founded on
            the principle that great design is the
            bridge between a vision and its
            audience, we specialize in creating
            bold, functional aesthetics that
            demand attention.
          </p>
        </motion.div>

        {/* RIGHT SIDE: Single Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="w-full flex justify-end md:justify-end justify-center"
        >
          <div className="overflow-hidden rounded-sm w-full md:max-w-[420px] aspect-[3/4] shadow-sm">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              src="/new7.jpeg"
              alt="Entrance and staircase details"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* --- Projects Grid Section --- */}
      <div
        id="projects"
        className="mt-24 max-w-7xl mx-auto px-1"
      >
        {/* LINE 1: Top 2 Big Images */}
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

              <figcaption className="mt-4 text-[15px] md:text-[18px]  text-[#1a1a1a] tracking-normal font-medium">
                {p.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* LINE 2: Bottom 3 Smaller Images */}
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

              <figcaption className="mt-3 text-[14px] md:text-[18px]  text-[#1a1a1a] tracking-normal font-medium">
                {p.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* --- Testimonials Slider Section --- */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mt-28 border-t border-zinc-200/60 pt-20 max-w-7xl mx-auto px-1"
      >
        <div className="grid gap-12 md:gap-16 md:grid-cols-[1fr_1fr] items-center">
          {/* LEFT SIDE: Testimonial Image */}
          <div className="overflow-hidden rounded-sm w-full aspect-[4/5] sm:aspect-[1.1/1] md:aspect-[4/5] bg-zinc-100 shadow-sm max-w-[540px]">
            <motion.img
              src={"/new7.jpeg"}
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT SIDE: Testimonial Content */}
          <div className="flex flex-col justify-center max-w-[580px] md:text-start text-left">
            <h2 className="font-serif lg:text-6xl text-4xl font-bold leading-[1.1] pb-10 tracking-tight text-[#1a1a1a] ">
              What Our Clients Say
            </h2>

            <motion.h3
              key={
                testimonials[currentTestimonial]
                  .text
              }
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-lg sm:text-xl  text-zinc-700 font-light leading-[1.15]"
            >
              “
              {
                testimonials[currentTestimonial]
                  .text
              }
              ”
            </motion.h3>

            {/* Client Name + Title */}
            <motion.div
              key={
                testimonials[currentTestimonial]
                  .role
              }
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="mt-8"
            >
              <p className="text-[16px] font-bold text-[#1a1a1a] uppercase">
                {
                  testimonials[currentTestimonial]
                    .author
                }
              </p>
            </motion.div>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full border border-zinc-300 flex items-center justify-center text-lg transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a]"
                aria-label="Previous testimonial"
              >
                ←
              </button>

              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full border border-zinc-300 flex items-center justify-center text-lg transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a]"
                aria-label="Next testimonial"
              >
                →
              </button>

              <span className="ml-2 text-sm text-zinc-500 tracking-wider">
                {String(
                  currentTestimonial + 1,
                ).padStart(2, "0")}{" "}
                /{" "}
                {String(
                  testimonials.length,
                ).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
