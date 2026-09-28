import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('halo@khawarizmi.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Mengirim pesan...' });

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Terima kasih! Pesan Anda telah berhasil terkirim. Saya akan segera menghubungi Anda.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus({ state: 'idle', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="kontak" className="py-24 relative border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-indigo-400 uppercase mb-3 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-800/40">
            Formulir Kontak
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mari Memulai Sesuatu Bersama
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-base">
            Punya ide proyek, tawaran kerja sama, atau sekadar ingin berdiskusi seputar teknologi? Kirimkan pesan melalui formulir di bawah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Informasi Kontak</h3>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan peluang baru, proyek inovatif, atau tantangan rekayasa frontend yang menarik.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-500 font-mono block">EMAIL</span>
                      <span className="text-xs sm:text-sm font-medium text-neutral-200">halo@khawarizmi.dev</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                    title="Salin email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-mono block">LOKASI</span>
                    <span className="text-xs sm:text-sm font-medium text-neutral-200">Jakarta, Indonesia (GMT+7)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-500 font-mono block">STATUS</span>
                    <span className="text-xs sm:text-sm font-medium text-emerald-400">Menerima Project Baru</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 text-xs text-neutral-400 leading-relaxed">
              <span className="text-indigo-300 font-semibold block mb-1">⏱ Respon Cepat</span>
              Biasanya saya membalas email dan pesan masuk dalam kurun waktu kurang dari 24 jam di hari kerja.
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-neutral-300 mb-2">
                    NAMA LENGKAP <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-neutral-300 mb-2">
                    ALAMAT EMAIL <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-neutral-300 mb-2">
                  SUBJEK / TOPIK
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Tawaran Proyek Web App"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-neutral-300 mb-2">
                  PESAN <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Jelaskan gambaran proyek, target waktu, atau pesan yang ingin disampaikan..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-neutral-800 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-y"
                ></textarea>
              </div>

              {status.state === 'success' && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-sm animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-50 rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/50 cursor-pointer"
              >
                {status.state === 'loading' ? (
                  <span>Mengirim...</span>
                ) : (
                  <>
                    <span>Kirim Pesan</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
