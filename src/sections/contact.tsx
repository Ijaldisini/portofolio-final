"use client";

import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

export default function Contact() {
  // ID Formspree kamu
  const [state, handleSubmit] = useForm("mojalvvl");

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto max-w-4xl">
        
        {/* --- HEADER SECTION (TETAP ADA / STATIC) --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
            <Mail size={16} />
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Hubungi <span className="text-emerald-500">Saya</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Punya pertanyaan atau ingin berkolaborasi? Kirimi saya pesan, dan
            saya akan segera membalasnya.
          </p>
        </div>

        {/* --- LOGIKA PERPINDAHAN TAMPILAN (FORM vs SUKSES) --- */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-500">
          
          {/* Dekorasi Garis Halus */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

          {state.succeeded ? (
            
            /* --- TAMPILAN JIKA SUKSES (Center & Rapi) --- */
            <div className="flex flex-col items-center justify-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-emerald-500/30 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Pesan Telah Terkirim!</h3>
              <p className="text-gray-400 text-center max-w-md mb-8 leading-relaxed">
                Terima kasih telah menghubungi saya. Pesan Anda sudah masuk dan akan segera saya balas melalui email.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="group px-8 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-emerald-600 hover:border-emerald-500 hover:text-white text-gray-300 transition-all duration-300 flex items-center gap-2 font-medium"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Kembali ke Form
              </button>
            </div>

          ) : (
            
            /* --- TAMPILAN FORMULIR (Normal) --- */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Input Nama */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors">
                  <User size={20} />
                </div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Input Email */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-400 transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Input Pesan */}
              <div className="relative group">
                <div className="absolute left-4 top-6 text-gray-400 group-focus-within:text-emerald-400 transition-colors">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tulis pesan Anda di sini..."
                  rows={5}
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Tombol Kirim */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  "Mengirim..."
                ) : (
                  <>
                    <Send size={20} />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          )}

        </div>

        {/* --- FOOTER INFO KECIL (TETAP ADA / STATIC) --- */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-emerald-500" />
            <span>radityafd07@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-emerald-500" />
            <span>Indonesia, Jember, Jawa Timur</span>
          </div>
        </div>

      </div>
    </section>
  );
}