"use client";

import { Github, Linkedin, Instagram, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Typewriter from "typewriter-effect";

// Import animasi JSON (Pastikan file sudah ada di folder public/animations/)
import developerAnimation from "../../public/animations/Developer.json";

// Load Lottie secara dynamic agar tidak memberatkan server
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-0 overflow-hidden">
      {/* Container Utama: Menggunakan Grid untuk membagi 2 kolom */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* --- KOLOM KIRI: Teks & Tombol --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          {/* Badge Atas */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Projects
          </div>

          {/* Judul Utama */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Hello I'm <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              iZall.
            </span>
            <h1 className="text-1xl md:text-3xl font-bold tracking-tight leading-tight text-gray-300">
              <Typewriter
                options={{
                  strings: ["Website Development.", "Website Designer."],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 60,
                }}
              />
            </h1>
          </h1>

          <p className="mt-6 max-w-lg text-gray-400 text-lg leading-relaxed">
            Menciptakan Website Yang Inovatif, Fungsional, dan User-Friendly
            untuk Solusi Digital.
          </p>

          {/* Tombol Utama */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition-all font-semibold shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 text-white"
            >
              Projects <ExternalLink size={18} />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-semibold flex items-center gap-2 text-white"
            >
              Contact <Mail size={18} />
            </Link>
          </div>

          {/* Social Media Icons (Link Milikmu) */}
          <div className="mt-10 flex gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/Ijaldisini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/raditya-fahrizal-7b2779330"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/rdtyazall"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* --- KOLOM KANAN: Animasi Lottie --- */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-full max-w-[350px] md:max-w-[500px]">
            <Lottie animationData={developerAnimation} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
