import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
          Join Our World
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          Be the first to discover new arrivals, curated edits, and receive 10% off your first order.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            required
          />
          <button
            type="submit"
            className="btn-boutique-primary whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-[11px] text-muted-foreground mt-4">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
