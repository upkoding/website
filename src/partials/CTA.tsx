import { AppConfig } from '@/utils/AppConfig';

const CTA = () => (
  <section className="mx-auto max-w-screen-lg px-6 py-12">
    <div className="rounded-2xl border border-ink-border bg-ink-surface p-10 text-center">
      <p className="font-sans text-xs font-medium uppercase tracking-widest text-flame">
        Ayo ngobrol
      </p>
      <h2 className="mt-3 font-display text-2xl font-bold text-sand-100 md:text-3xl">
        Ada proyek menarik? Mari berkolaborasi.
      </h2>
      <p className="mx-auto mt-4 max-w-sm text-base text-sand-300">
        Terbuka untuk kolaborasi, konsultasi, atau sekadar diskusi soal
        teknologi dan produk.
      </p>
      <a
        href={`mailto:${AppConfig.email}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame px-6 py-2.5 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
      >
        {AppConfig.email}
      </a>
    </div>
  </section>
);

export { CTA };
