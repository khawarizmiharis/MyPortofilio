import React, { useState } from 'react';
import { Code2, Palette, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'Semua Keahlian' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Database' },
    { id: 'tools', label: 'Tools & Desain' },
  ];

  const skills = [
    { name: 'React.js', category: 'frontend', level: 'Mahir', desc: 'SPA, Hooks, Context, State Management' },
    { name: 'Vite', category: 'frontend', level: 'Mahir', desc: 'Modern Build Tool, HMR, Optimal Bundling' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Mahir', desc: 'Utility-first, Responsive & Dark Theme UI' },
    { name: 'TypeScript', category: 'frontend', level: 'Menengah', desc: 'Type Safety, Interface, Maintainable Code' },
    { name: 'Next.js', category: 'frontend', level: 'Menengah', desc: 'SSR, SSG, Server Components, SEO' },
    { name: 'HTML5 & CSS3', category: 'frontend', level: 'Mahir', desc: 'Semantic HTML, Flexbox, Grid, Animasi' },
    { name: 'Node.js', category: 'backend', level: 'Menengah', desc: 'Runtime Server, RESTful API, NPM' },
    { name: 'Express.js', category: 'backend', level: 'Menengah', desc: 'Routing, Middleware, Backend API' },
    { name: 'PostgreSQL', category: 'backend', level: 'Menengah', desc: 'Relational Database, Schema Design, SQL' },
    { name: 'MongoDB', category: 'backend', level: 'Menengah', desc: 'NoSQL Document Database, Mongoose' },
    { name: 'RESTful API', category: 'backend', level: 'Mahir', desc: 'Endpoint Architecture, CRUD, JWT Auth' },
    { name: 'Figma', category: 'tools', level: 'Mahir', desc: 'UI/UX Prototyping, Wireframing, Design System' },
    { name: 'Git & GitHub', category: 'tools', level: 'Mahir', desc: 'Version Control, Branching, Collaboration' },
    { name: 'Docker', category: 'tools', level: 'Dasar', desc: 'Containerization, Environment Consistency' },
    { name: 'Postman', category: 'tools', level: 'Mahir', desc: 'API Testing & Documentation' },
    { name: 'Vercel / Netlify', category: 'tools', level: 'Mahir', desc: 'CI/CD, Deployment & Hosting' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(item => item.category === activeTab);

  return (
    <section id="tentang" className="py-24 relative border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-indigo-400 uppercase mb-3 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-800/40">
            Tentang Saya
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Kombinasi Rekayasa Kode & Desain Visual
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-base">
            Mengenal perjalanan saya dalam menciptakan produk digital yang berdampak nyata, mudah digunakan, dan berarsitektur kokoh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-indigo-400">#</span> Siapa Saya?
            </h3>
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Saya adalah software engineer yang berfokus pada frontend modern dan ekosistem web interaktif. Saya percaya bahwa kode yang baik tidak hanya efisien di balik layar, tetapi juga menyajikan pengalaman visual yang mulus dan menyenangkan bagi pengguna akhir.
              </p>
              <p>
                Dengan latar belakang pemecahan masalah logis dan apresiasi mendalam terhadap desain minimalis, saya menggabungkan React, Tailwind CSS, dan arsitektur backend modern untuk mewujudkan ide menjadi produk nyata.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-800/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Clean Architecture</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Kode modular, teruji, dan mudah dipelihara jangka panjang.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Responsif & Aksesibel</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Pengalaman konsisten dari layar ponsel hingga monitor 4K.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white mb-1">Frontend Engineering</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Spesialisasi dalam ekosistem React, manajemen state, rendering dinamis, dan optimasi performa web.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-all">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white mb-1">UI/UX & Design Systems</h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Menerapkan prinsip desain modern: hierarki visual yang jelas, dark mode presisi, dan konsistensi token desain.
              </p>
            </div>
          </div>
        </div>

        <div id="keahlian" className="pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Daftar Keahlian & Teknologi
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                Kumpulan teknologi dan toolset yang saya gunakan dalam alur kerja harian.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-900/80 rounded-xl border border-neutral-800/80 self-start sm:self-auto">
              {skillCategories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group p-5 rounded-xl bg-neutral-900/30 hover:bg-neutral-900/70 border border-neutral-800/70 hover:border-neutral-700/80 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700/50">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
