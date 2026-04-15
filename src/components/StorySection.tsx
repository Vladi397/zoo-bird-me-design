import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import storefrontImg from "@/assets/storefront.jpg";

export function StorySection() {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={storefrontImg}
            alt="Fashion from Haven boutique storefront"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-snug mb-6">
            Your haven for<br />effortless style
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Fashion from Haven was born from a desire to create a curated haven for women who appreciate quality, style, and intention. Every piece in our collection is hand-selected for its craftsmanship, fabric, and timeless appeal.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            From premium apparel to statement accessories and refined home essentials, we curate a world where modern elegance meets industrial charm — a space where you can discover your next wardrobe staple.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="inline-block">
            <Link to="/about" className="btn-boutique-outline">
              Read Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
