import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <footer className="border-t border-ink-border">
    <div className="mx-auto max-w-screen-lg px-6 py-8">
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-sand-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-display font-semibold text-sand-300">
            {AppConfig.site_name}
          </span>
          . Hak cipta dilindungi.
        </p>
        <a
          href={`mailto:${AppConfig.email}`}
          className="transition-colors duration-200 hover:text-flame"
        >
          {AppConfig.email}
        </a>
      </div>
    </div>
  </footer>
);

export { Footer };
