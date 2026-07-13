"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, Variants } from "framer-motion";
import developerAnimation from "../../public/animations/Robot says hello.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const TITLES = [
  "Informatics Student",
  "Software Developer",
  "Website Developer",
  "Mobile Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const swing3D = (delay: number): Variants => ({
    hidden: { opacity: 0, rotateX: -60, y: 50, z: -100 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      z: 0,
      transition: {
        duration: 1,
        delay: delay,
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-0 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            variants={swing3D(0.1)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Projects
          </motion.div>

          <motion.div
            variants={swing3D(0.2)}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col items-center md:items-start"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Hello I'm <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                iZall.
              </span>
            </h1>

            <div
              className="relative mt-2 w-full h-[40px] md:h-[50px]"
              style={{ perspective: "1000px" }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, rotateX: -90, y: 20 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: 90, y: -20 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  className="absolute flex justify-center md:justify-start w-full text-xl md:text-3xl font-bold text-gray-300 origin-center"
                >
                  {TITLES[titleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            variants={swing3D(0.3)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-lg text-gray-400 text-lg leading-relaxed"
          >
            Membangun solusi digital yang scalable, efisien, dan berorientasi
            pada pengalaman pengguna.
          </motion.p>

          <motion.div
            variants={swing3D(0.5)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex gap-5"
          >
            {[
              { icon: Github, href: "https://github.com/Ijaldisini" },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/raditya-fahrizal-7b2779330",
              },
              { icon: Instagram, href: "https://instagram.com/rdtyazall" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-2"
              >
                <social.icon
                  size={22}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 90, z: -200 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotateX: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[350px] md:max-w-[500px]"
          >
            <Lottie animationData={developerAnimation} loop={true} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
