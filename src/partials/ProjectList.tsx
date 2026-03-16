import type { ReactNode } from 'react';

import { ArrowRight } from '@/components/ArrowRight';

const tagColors: Record<string, string> = {
  mobile: 'bg-sky-100 text-sky-700 border-sky-200',
  ai: 'bg-violet-100 text-violet-700 border-violet-200',
  ios: 'bg-lime-100 text-lime-700 border-lime-200',
  android: 'bg-green-100 text-green-700 border-green-200',
  free: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'e-book': 'bg-amber-100 text-amber-700 border-amber-200',
  'audio-book': 'bg-rose-100 text-rose-700 border-rose-200',
};

const BookIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="12" y1="6" x2="16" y2="6" />
    <line x1="12" y1="10" x2="16" y2="10" />
  </svg>
);

type ProjectBase = {
  name: string;
  description: string;
  link: string;
  tags: string[];
};

type Project = ProjectBase &
  (
    | { img: { src: string; alt: string }; icon?: never }
    | { icon: { node: ReactNode; bg: string; color: string }; img?: never }
  );

const projects: Project[] = [
  {
    name: 'RAI — Kalender Bali',
    description:
      'Kalender Saka Bali modern dengan asisten AI. Lengkap dengan Ala-Ayuning Dewasa, pengingat Otonan & Piodalan, dan fitur "Tanya RAI" untuk menjawab pertanyaan seputar budaya Bali. Gratis, tanpa iklan.',
    link: 'https://rai.upkoding.com/',
    img: { src: '/assets/images/rai.png', alt: 'RAI Kalender Bali' },
    tags: ['mobile', 'ai', 'ios', 'android', 'free'],
  },
  {
    name: 'E-book Zero To Programmer',
    description:
      'Rangkuman perjalanan dari nol mengarungi dunia IT — dari tidak tahu apa-apa sampai bisa membangun produk sendiri. Tersedia dalam format e-book dan audio-book, gratis untuk semua.',
    link: 'https://upkoding.gitbook.io/zero-to-programmer',
    icon: { node: <BookIcon />, bg: 'bg-amber-50', color: 'text-amber-600' },
    tags: ['free', 'e-book', 'audio-book'],
  },
];

const ProjectList = () => (
  <section className="mx-auto max-w-screen-lg px-6 py-12">
    <div className="mb-8 flex items-center gap-4">
      <h2 className="font-display text-2xl font-bold text-sand-100">
        Recent <span className="text-flame">Projects</span>
      </h2>
      <div className="h-px flex-1 bg-ink-border" />
    </div>

    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.link}
          target="_blank"
          className="group flex flex-col gap-5 rounded-xl border border-ink-border bg-ink-surface p-5 shadow-sm transition-all duration-200 hover:border-flame/40 hover:shadow-md md:flex-row md:items-center"
        >
          <div className="shrink-0">
            {project.img ? (
              <img
                className="h-20 w-20 rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                src={project.img.src}
                alt={project.img.alt}
                loading="lazy"
              />
            ) : (
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-ink-border transition-transform duration-300 group-hover:scale-105 ${project.icon.bg} ${project.icon.color}`}
              >
                {project.icon.node}
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-lg font-semibold text-sand-100 transition-colors duration-200 group-hover:text-flame">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                      tagColors[tag] ??
                      'border-ink-border bg-ink-elevated text-sand-300'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-sand-300">
              {project.description}
            </p>
          </div>

          <div className="shrink-0 text-sand-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-flame">
            <ArrowRight />
          </div>
        </a>
      ))}
    </div>
  </section>
);

export { ProjectList };
