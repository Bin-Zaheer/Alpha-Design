"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function CTA() {
  return (
    <section
      id="contact"
      className="mx-auto lg:max-w-7xl px-6 pb-6 md:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative overflow-hidden rounded-2xl"
      >
        <Image
          width={1920} // Apni image ke aspect ratio ke hisaab se width set karein
          height={384}
          src="/foot.jpeg"
          alt="Living room"
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/40 px-6 text-center text-cream">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="font-serif text-3xl italic sm:text-4xl"
          >
            &ldquo;Small Footprint. Grand
            Vision&rdquo;
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-3 text-sm text-cream/85"
          >
            Don’t let square footage limit your
            lifestyle. We turn compact spaces into
            expansive sanctuaries.
          </motion.p>
          <motion.a
            href="mailto:hello@alphadesign.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-block border-2 border-cream  px-7 py-3 text-sm text-cream"
          >
            Start a Conversation →
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
