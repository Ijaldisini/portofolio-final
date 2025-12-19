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

// --- DATA DUMMY (Ganti dengan data aslimu nanti) ---

const projects = [
  {
    id: 1,
    title: "Aritmatika Solver",
    desc: "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal matematika dasar dengan cepat.",
    image: "/projects/project1.jpg", // Pastikan gambar ada di folder public/projects
    tags: ["React", "Tailwind", "Vite"],
    demo: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "AutoChat Discord",
    desc: "Bot otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal dan terorganisir.",
    image: "/projects/project1.jpg",
    tags: ["Node.js", "Discord.js"],
    demo: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "Buku Catatan Digital",
    desc: "Website pencatat sederhana dengan fitur CRUD lengkap dan penyimpanan lokal browser.",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "Firebase"],
    demo: "#",
    repo: "#",
  },
];

const certificates = [
  "/certificates/cert1.jpg", // Ganti dengan nama file sertifikatmu
  "/certificates/cert1.jpg",
  "/certificates/cert1.jpg",
  "/certificates/cert1.jpg",
];

const techStack = [
  { name: "HTML", icon: "/tech/html.png" }, // Ganti dengan icon logomu
  { name: "CSS", icon: "/tech/css.png" },
  { name: "JavaScript", icon: "/tech/js.png" },
  { name: "Tailwind", icon: "/tech/tailwind.png" },
  { name: "React", icon: "/tech/react.png" },
  { name: "Next.js", icon: "/tech/next.png" },
];

// --- COMPONENT UTAMA ---

export default function Portofolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="portofolio" className="relative py-24 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER SECTION */}
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

        {/* TAB NAVIGATION */}
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

        {/* KONTEN UTAMA (Berubah sesuai Tab) */}
        <div className="min-h-[400px]">
          {/* 1. TAB PROJECTS */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    {/* Placeholder jika gambar belum ada */}
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                      Image Preview
                    </div>
                    {/* Hapus komentar di bawah ini jika gambar sudah siap */}
                    {/* <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" /> */}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-white/5">
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.repo}
                        className="flex items-center gap-1 text-sm font-medium text-white hover:text-emerald-400 transition-colors ml-auto"
                      >
                        Details <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. TAB CERTIFICATES */}
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-white/5 group"
                >
                  {/* Placeholder */}
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500">
                    Certificate Image
                  </div>
                  {/* <Image src={cert} alt={`Certificate ${index + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" /> */}

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Lihat Detail</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. TAB TECH STACK */}
          {activeTab === "tech" && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 hover:border-emerald-500/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    {/* Ganti dengan <Image> jika punya icon PNG/SVG */}
                    <Cpu size={24} />
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
