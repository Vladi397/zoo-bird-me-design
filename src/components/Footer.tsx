import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4">Fashion from Haven</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Your haven for curated modern style. Premium womenswear, accessories, and lifestyle essentials.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-2">Explore</h4>
            <Link to="/shop" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Shop All</Link>
            <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Our Story</Link>
            <Link to="/visit" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Visit Us</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase mb-2">Connect</h4>
            <p className="text-sm text-primary-foreground/70">hello@fashionfromhaven.com</p>
            <p className="text-sm text-primary-foreground/70">Mon – Sat: 10am – 6pm</p>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Instagram" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="divider-texture mt-12 mb-6 opacity-20" />
        <p className="text-xs text-primary-foreground/40 tracking-wider">
          © 2026 Fashion from Haven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
