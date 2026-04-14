import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="section-padding bg-cream">
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
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
          <motion.button
            type="submit"
            className="btn-boutique-primary whitespace-nowrap"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Subscribe
          </motion.button>
        </form>

        <p className="text-[11px] text-muted-foreground mt-4">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}
