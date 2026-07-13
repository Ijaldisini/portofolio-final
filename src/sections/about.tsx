import { ArrowUpRight, Award, Code2, Download, Globe, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="relative -scroll-mt-25 min-h-screen flex items-center py-20 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
              <Zap size={16} className="fill-emerald-400" />
              About Me
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              My name is <br />
              <span className="text-emerald-400">Raditya Fahrizal Diandra</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Mahasiswa S1 Informatika Universitas Jember dengan fokus pada
              pengembangan aplikasi Full-Stack. Berpengalaman membangun sistem
              yang scalable menggunakan React, Laravel, Flutter, dan Supabase,
              serta teruji dalam kepemimpinan organisasi teknis. Berkomitmen
              untuk menghadirkan solusi digital inovatif melalui kode yang
              efisien dan kolaborasi tim yang solid.
            </p>

            <div className="border-l-4 border-emerald-500 bg-white/5 p-4 rounded-r-xl mb-8 backdrop-blur-sm">
              <p className="italic text-gray-300 font-medium">
                "First, solve the problem. Then, write the code."
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://drive.google.com/drive/folders/14pIFOUKDUVJVl3Z8DW9a8a-1HPjXojg3?usp=sharing"
                className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <Download size={20} />
                Download CV
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full transform scale-90 -z-10"></div>

            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-4 border-emerald-500/30 overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Raditya Profile"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <span className="text-4xl font-bold text-white">5</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Total Projects
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Building Digital Impact</span>
              <ArrowUpRight
                size={16}
                className="group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <span className="text-4xl font-bold text-white">5</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Certificates
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Specialized AI & Tech Training</span>
              <ArrowUpRight
                size={16}
                className="group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <span className="text-4xl font-bold text-white">1+</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Years Experience
            </h3>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>Continuous learning journey</span>
              <ArrowUpRight
                size={16}
                className="group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
