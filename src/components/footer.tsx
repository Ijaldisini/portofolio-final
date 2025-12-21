"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const myEmail = "radityafd07@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Ijaldisini",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/raditya-fahrizal-7b2779330",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/rdtyazall",
      icon: <Instagram size={20} />,
    },
    {
      name: "Email",
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`,
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Background Glow Halus di bawah */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">
              i<span className="text-emerald-500">Zall.</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm">
              Membangun pengalaman digital yang imersif dan fungsional. Mari
              berkolaborasi dan ciptakan sesuatu yang luar biasa.
            </p>
          </div>

          {/* Social Links (Connect with Me) */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-sm font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
              Connect With Me
            </span>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank" // Membuka di tab baru
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Raditya. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Back to Top
            <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
