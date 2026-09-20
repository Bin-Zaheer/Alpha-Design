"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  FileText,
} from "lucide-react"; // Icons properly loaded for premium look

export default function Footer() {
  return (
    /* Background and layout wrapping perfectly matched with the editorial theme */
    <footer className="w-full bg-[#fbf9f4] text-[#1a1a1a] pt-16 pb-8 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* 🟢 TOP LAYER: Brand Headline & Right Navigation Links Group */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 w-full">
          {/* Left Block: Serif Branding Typography exactly like "BIN ZAHEER" in photo */}
          <div className="flex flex-col text-left space-y-1">
            <h2 className="font-serif text-3xl md:text-[36px] font-normal tracking-wide text-[#1a1a1a] uppercase leading-none">
              ALPHA DESIGN
            </h2>
            <p className="text-[12px] md:text-[13px] tracking-wide text-zinc-500 font-normal">
              Interior Architecture &amp; Design
            </p>
          </div>

          {/* Right Block: Interactive Links Group with Solid Black Icons */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 text-[13px] sm:text-[14px] font-medium text-[#1a1a1a]">
            <a
              href="#"
              className="flex items-center gap-1.5 hover:text-zinc-500 transition-colors duration-300 group"
            >
              <Instagram
                size={15}
                className="text-[#1a1a1a] stroke-[2px] transition-transform group-hover:scale-110"
              />
              <span className="border-b border-transparent group-hover:border-[#1a1a1a] pb-0.5">
                Instagram
              </span>
            </a>

            <a
              href="mailto:hello@alphadesign.com"
              className="flex items-center gap-1.5 hover:text-zinc-500 transition-colors duration-300 group"
            >
              <Mail
                size={15}
                className="text-[#1a1a1a] stroke-[2px] transition-transform group-hover:scale-110"
              />
              <span className="border-b border-transparent group-hover:border-[#1a1a1a] pb-0.5">
                Email
              </span>
            </a>

            <a
              href="tel:+923000000000"
              className="flex items-center gap-1.5 hover:text-zinc-500 transition-colors duration-300 group"
            >
              <Phone
                size={15}
                className="text-[#1a1a1a] stroke-[2px] transition-transform group-hover:scale-110"
              />
              <span className="border-b border-transparent group-hover:border-[#1a1a1a] pb-0.5">
                Phone
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-1.5 hover:text-zinc-500 transition-colors duration-300 group"
            >
              <MapPin
                size={15}
                className="text-[#1a1a1a] stroke-[2px] transition-transform group-hover:scale-110"
              />
              <span className="border-b border-transparent group-hover:border-[#1a1a1a] pb-0.5">
                Location
              </span>
            </a>
          </div>
        </div>

        {/* Full-width continuous thin line separator from the picture */}
        <div className="w-full h-[1px] bg-zinc-200" />

        {/* ========================================================================= */}
        {/* 🔵 BOTTOM LAYER: Copyright Disclaimer & Legals (Privacy / Terms) */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 text-[11px] md:text-[12px] uppercase tracking-wider font-semibold text-zinc-500">
          {/* Copyright String */}
          <p>© COPYRIGHT 2026 ALPHA DESIGN</p>

          {/* Added Legal Policy Modals Grid Links */}
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="flex items-center gap-1.5 hover:text-[#1a1a1a] transition-colors duration-300 group"
            >
              <ShieldCheck
                size={13}
                className="text-zinc-400 group-hover:text-[#1a1a1a] transition-colors"
              />
              <span>Privacy Policy</span>
            </a>
            <a
              href="#terms"
              className="flex items-center gap-1.5 hover:text-[#1a1a1a] transition-colors duration-300 group"
            >
              <FileText
                size={13}
                className="text-zinc-400 group-hover:text-[#1a1a1a] transition-colors"
              />
              <span>Terms of Service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
