const Navbar = () => (
  <nav className="sticky top-0 z-50 border-b border-ink-border bg-ink-base/85 backdrop-blur-md">
    <div className="mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
      <a href="/">
        <span className="font-display text-lg font-extrabold tracking-tight text-sand-100">
          up<span className="text-flame">koding</span>
        </span>
      </a>

      <div className="flex items-center gap-6">
        <a
          href="https://blog.upkoding.com/"
          target="_blank"
          className="text-sm text-sand-300 transition-colors duration-200 hover:text-sand-100"
        >
          Blog
        </a>
        <a
          href="https://github.com/ekaputra07"
          target="_blank"
          className="rounded-full border border-ink-border bg-ink-surface px-4 py-1.5 text-sm text-sand-300 transition-all duration-200 hover:border-flame/40 hover:text-sand-100"
        >
          GitHub
        </a>
      </div>
    </div>
  </nav>
);

export { Navbar };
