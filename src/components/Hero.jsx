import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs sm:text-sm font-medium text-neutral-300 mb-8 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Tersedia untuk proyek freelance & full-time</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Membangun Solusi Digital dengan{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-200 bg-clip-text text-transparent">
              Presisi & Estetika.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed font-normal">
            Halo, saya <span className="text-neutral-200 font-semibold">Khawarizmi</span> — seorang Full-Stack Developer & UI Designer yang berdedikasi merancang aplikasi web modern yang cepat, elegan, dan intuitif.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <a
              href="#proyek"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <span>Jelajahi Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-800 rounded-xl transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <span>Hubungi Saya</span>
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2 text-neutral-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/80 border border-neutral-800/80 hover:text-white transition-all hover:scale-105"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/80 border border-neutral-800/80 hover:text-white transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:halo@khawarizmi.dev"
              aria-label="Email"
              className="p-2.5 rounded-lg bg-neutral-900/50 hover:bg-neutral-800/80 border border-neutral-800/80 hover:text-white transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 pt-10 border-t border-neutral-800/70 w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">3+</span>
              <span className="text-xs sm:text-sm text-neutral-400 mt-1">Tahun Pengalaman</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">25+</span>
              <span className="text-xs sm:text-sm text-neutral-400 mt-1">Proyek Terselesaikan</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">15+</span>
              <span className="text-xs sm:text-sm text-neutral-400 mt-1">Klien Bahagia</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">99%</span>
              <span className="text-xs sm:text-sm text-neutral-400 mt-1">Tepat Waktu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
