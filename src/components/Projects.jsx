import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'webapp', label: 'Web App' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const projectList = [
    {
      id: 1,
      title: 'SaaS Analytics Platform',
      category: 'dashboard',
      description: 'Platform analitik cloud berkecepatan tinggi dengan visualisasi metrik data real-time, manajemen tim, dan export laporan otomatis.',
      tags: ['React', 'Tailwind CSS', 'TypeScript', 'Chart.js'],
      metrics: 'Real-time WebSocket',
      accent: 'from-blue-600/30 via-indigo-600/20 to-neutral-900',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'AI Prompt Studio & Workspace',
      category: 'webapp',
      description: 'Workspace generasi prompt AI cerdas dengan kolaborasi multi-agent, token counter, dan template library kustom.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'OpenAI API'],
      metrics: 'AI-Powered',
      accent: 'from-violet-600/30 via-purple-600/20 to-neutral-900',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Minimalist Storefront & Cart',
      category: 'ecommerce',
      description: 'Toko online bertema monokromatik modern dengan sistem checkout Stripe terintegrasi, filter instan, dan optimasi SEO.',
      tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Zustand'],
      metrics: '+45% Konversi',
      accent: 'from-emerald-600/30 via-teal-600/20 to-neutral-900',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Developer Portfolio Generator',
      category: 'webapp',
      description: 'Generator website portofolio instan berbasis konfigurasi Markdown dan tema dark mode estetik untuk para pengembang software.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Markdown'],
      metrics: '1.2k+ Stars',
      accent: 'from-amber-600/30 via-orange-600/20 to-neutral-900',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Financial Task & Budget Manager',
      category: 'dashboard',
      description: 'Aplikasi pelacak keuangan pribadi dan manajemen anggaran bulanan dengan visualisasi grafik interaktif dan enkripsi lokal.',
      tags: ['React', 'Tailwind CSS', 'IndexedDB', 'PWA'],
      metrics: 'Offline-First',
      accent: 'from-cyan-600/30 via-blue-600/20 to-neutral-900',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Artisan Coffee Roasters Web',
      category: 'ecommerce',
      description: 'Website katalog interaktif dan pemesanan biji kopi artisan dengan micro-interactions halus dan story brand autentik.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      metrics: 'Aset Kustom',
      accent: 'from-rose-600/30 via-pink-600/20 to-neutral-900',
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projectList
    : projectList.filter((p) => p.category === filter);

  return (
    <section id="proyek" className="py-24 relative border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono font-semibold tracking-widest text-indigo-400 uppercase mb-3 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-800/40">
            Galeri Proyek
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Karya Terpilih & Eksplorasi Digital
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-base">
            Koleksi proyek yang memadukan rekayasa fungsional, performa tinggi, dan pengalaman visual modern.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-neutral-900/80 rounded-xl border border-neutral-800/80 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  filter === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-950/20 overflow-hidden"
            >
              <div className={`relative h-48 w-full bg-gradient-to-br ${project.accent} p-6 flex flex-col justify-between overflow-hidden border-b border-neutral-800/60`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-neutral-950/70 text-neutral-200 border border-neutral-700/60 backdrop-blur-md">
                    {project.metrics}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="z-10 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950/80 border border-neutral-700/60 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block">
                      {project.category}
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-950 text-neutral-400 border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 text-xs font-semibold">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                  >
                    <span>Lihat Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Kode Sumber</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
