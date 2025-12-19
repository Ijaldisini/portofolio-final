"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Portofolio", href: "#portofolio", id: "portofolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      {/* Container Navbar Glassmorphism */}
      <div className="flex items-center gap-1 md:gap-4 px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-lg transition-all duration-300">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={() => setActiveSection(link.id)}
            className={`
              relative text-sm font-medium transition-all duration-300
              ${
                activeSection === link.id
                  ? /* STATE AKTIF: Teks Hijau + Efek Glow Neon (Tanpa Background Box) */
                    "text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] scale-105"
                  : /* STATE TIDAK AKTIF: Abu-abu biasa */
                    "text-gray-400 hover:text-emerald-300"
              }
            `}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
