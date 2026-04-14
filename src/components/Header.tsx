import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M3 8h18M3 16h18" />
              </>
            )}
          </svg>
        </button>

        {/* Nav left */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/shop" className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Shop
          </Link>
          <Link to="/about" className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Our Story
          </Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="text-center">
          <h1 className="font-serif text-xl md:text-2xl font-medium tracking-wide text-foreground">
            Zoo Bird And Me
          </h1>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-0.5">
            for you + your baby
          </p>
        </Link>

        {/* Nav right */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/visit" className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Visit Us
          </Link>
          {/* Search icon */}
          <button aria-label="Search" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          {/* Cart icon */}
          <button aria-label="Cart" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>

        {/* Mobile cart */}
        <button aria-label="Cart" className="md:hidden text-foreground">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-4 bg-background">
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Shop</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Our Story</Link>
          <Link to="/visit" onClick={() => setMobileOpen(false)} className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Visit Us</Link>
        </nav>
      )}
    </header>
  );
}
