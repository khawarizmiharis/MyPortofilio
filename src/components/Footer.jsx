import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-indigo-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight">Khawarizmi</span>
              <p className="text-xs text-neutral-500">
                Modern Web Engineering & UI Design
              </p>
            </div>
          </div>

          <div className="text-xs text-neutral-400 flex items-center gap-1.5 font-mono">
            <span>Dibuat menggunakan</span>
            <span className="text-neutral-200">React + Vite + Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-900/80 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Khawarizmi. Hak Cipta Dilindungi. Desain modern & minimalis.
        </div>
      </div>
    </footer>
  );
}
