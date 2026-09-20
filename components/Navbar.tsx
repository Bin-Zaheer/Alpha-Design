"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
} from "framer-motion"; // Pure framer-motion library integration
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Faq's", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener(
        "scroll",
        onScroll,
      );
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      /* 🟢 700ms smooth transition background and shadow transitions layout layer */
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 transition-all duration-500 ease-in-out">
        {/* Logo container wrapper */}
        <a
          href="#home"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Alpha Design"
            width={140}
            height={48}
            /* transition-all handle karne se height size change super fluid hoga */
            className={`w-auto object-contain transition-all duration-500 ease-in-out ${
              scrolled ? "h-12" : "h-13"
            }`}
            priority
          />
        </a>

        {/* 🔵 Desktop Links - Smooth 500ms multi-color transitions added */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 + i * 0.05,
                duration: 0.5,
              }}
              className={`reveal-underline text-lg tracking-wide transition-colors duration-500 ease-in-out ${
                scrolled
                  ? "text-charcoal"
                  : "text-white"
              } hover:text-charcoal`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* 🟡 Call To Action Button - Smooth borders color blending handles */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className={`hidden bg-transparent border-2 px-9 py-2.5 text-sm md:inline-block transition-all duration-500 ease-in-out ${
            scrolled
              ? "border-charcoal text-charcoal"
              : "border-white text-cream"
          }`}
        >
          Let's Talk
        </motion.a>

        {/* Mobile Hamburger menu toggle actions */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors duration-500 ease-in-out ${
            scrolled || open
              ? "text-charcoal"
              : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </div>

      {/* 🟢 Mobile Menu Panel Dropdown Animation Wrapper */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-1 bg-cream px-6 pb-6 md:hidden overflow-hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-charcoal/80 hover:text-charcoal transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-charcoal px-6 py-2.5 text-center text-sm text-cream transition-transform duration-300 active:scale-95 block"
            >
              Let's Talk
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
