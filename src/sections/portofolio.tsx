"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Code2,
  Award,
  Cpu,
  ExternalLink,
  ArrowRight,
  Layers,
} from "lucide-react";

import {
  SiPython,
  SiPhp,
  SiDart,
  SiFlutter,
  SiSharp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiReact,
  SiDjango,
  SiFigma,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Mobile LeafnLoaf",
    desc: "Aplikasi mobile yang berfokus pada pengembangan arsitektur backend relasional menggunakan Supabase (PostgreSQL). Mengimplementasikan sistem autentikasi pengguna, manajemen penyimpanan file media, serta menerapkan Row Level Security (RLS) untuk menjamin keamanan hak akses data pengguna.",
    image: "/projects/leafnloaf-mobile.png",
    // demo: "",
    repo: "https://github.com/Ijaldisini/leafnloaff-mobile",
  },
  {
    id: 2,
    title: "LeafnLoaf",
    desc: "Platform pemesanan berbasis batch yang dikembangkan menggunakan React 19, Tailwind CSS v4, dan Supabase sebagai backend. Dilengkapi fitur Admin Dashboard untuk manajemen pesanan, integrasi Leaflet API untuk pemetaan lokasi, serta sistem pembayaran QRIS untuk alur checkout yang efisien.",
    image: "/projects/leafnloaf.png",
    demo: "https://leafnloaff.vercel.app/",
    repo: "https://github.com/Ijaldisini/Leaf-Loaf",
  },
  {
    id: 3,
    title: "SpareLog",
    desc: "SpareLog adalah website manajemen bengkel otomotif yang mendigitalisasi layanan dan stok untuk mengatasi kendala pencatatan manual. Solusi ini meningkatkan akurasi dan efisiensi operasional, menjadikan bisnis lebih profesional dan siap berkembang.",
    image: "/projects/sparelog.png",
    // demo: "",
    repo: "https://github.com/Ijaldisini/website-sparelog",
  },
  {
    id: 4,
    title: "BrownyGift",
    desc: "BrownyGift adalah website penyedia rangkaian bunga. Kami hadir sebagai solusi untuk menyampaikan pesan yang tak terucap melalui desain floral yang artistik. Dengan sentuhan personal di setiap rangkaian, BrownyGift memastikan setiap pemberian menjadi simbol apresiasi yang elegan dan berkesan bagi penerimanya.",
    image: "/projects/brownygift.png",
    // demo: "",
    repo: "https://github.com/Ijaldisini/BrownyGift",
  },
  {
    id: 5,
    title: "FarmEquip",
    desc: "FarmEquip adalah platform web full-stack untuk rental alat-alat pertanian modern. Proyek ini menggabungkan Laravel (PHP) sebagai frontend dan Go (Golang) sebagai REST API backend, dengan database MySQL dan penyimpanan gambar di Cloudinary.",
    image: "/projects/farmequip.png",
    // demo: "",
    repo: "https://github.com/Darrel-jpg/FarmEquip",
  },
];

const certificates = [
  "/certificates/AI-For-Automation.png",
  "/certificates/AI-For-Content-Creator.png",
  "/certificates/AI-For-Freelancer.png",
  "/certificates/AI-For-Self-Space.png",
  "/certificates/Peserta-I-Reach-2025.png",
];

const techStack = [
  {
    name: "Python",
    icon: <SiPython className="w-8 h-8 text-[#3776AB]" />,
  },
  {
    name: "PHP",
    icon: <SiPhp className="w-8 h-8 text-[#777BB4]" />,
  },
  {
    name: "Dart",
    icon: <SiDart className="w-8 h-8 text-[#0175C2]" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-8 h-8 text-[#02569B]" />,
  },
  {
    name: "C#",
    icon: <SiSharp className="w-8 h-8 text-[#68217A]" />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" />,
  },
  {
    name: "CSS",
    icon: <SiCss className="w-8 h-8 text-[#1572B6]" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
  },
  {
    name: "Go",
    icon: <SiGo className="w-8 h-8 text-[#00ADD8]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="w-8 h-8 text-[#7952B3]" />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="w-8 h-8 text-[#FF2D20]" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
  },
  {
    name: "Django",
    icon: <SiDjango className="w-8 h-8 text-[#092E20]" />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
  },
];

export default function Portofolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portofolio"
      className="relative -scroll-mt-30 min-h-screen flex items-center py-24 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Portofolio <span className="text-emerald-400">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian
            teknis. Setiap bagian mewakili tonggak pencapaian dalam pembelajaran
            saya.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
              activeTab === "projects"
                ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Code2 size={20} /> Projects
          </button>

          <button
            onClick={() => setActiveTab("certificates")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
              activeTab === "certificates"
                ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Award size={20} /> Certificates
          </button>

          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
              activeTab === "tech"
                ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Layers size={20} /> Tech Stack
          </button>
        </div>

        <div className="min-h-[400px]">
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-gray-800 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Image Preview
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed text-justify">
                      {project.desc}
                    </p>

                    <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a
                        href={project.repo}
                        className="flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-400 transition-colors ml-auto"
                      >
                        Details <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-white/5 group"
                >
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                    Certificate Image
                  </div>
                  <Image
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"></div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tech" && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    {typeof tech.icon === "string" ? (
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      tech.icon
                    )}
                  </div>
                  <span className="font-semibold text-gray-300 group-hover:text-emerald-400 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
