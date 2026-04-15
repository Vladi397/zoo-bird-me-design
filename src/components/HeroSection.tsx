import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lifestyle.png";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src={heroImage}
          alt="Fashion from Haven boutique interior with curated womenswear and accessories"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/25" />
      </motion.div>

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-primary-foreground/80 mb-6"
          >
            Your haven for curated modern style
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.1] mb-6"
          >
            Effortless style,<br />curated for you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-sm md:text-base text-primary-foreground/80 max-w-md mb-10 leading-relaxed"
          >
            Premium womenswear, accessories, and lifestyle essentials — thoughtfully chosen for the modern woman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link to="/shop" className="btn-boutique bg-primary-foreground text-foreground border-primary-foreground hover:bg-transparent hover:text-primary-foreground">
                Shop New Arrivals
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Link to="/shop" className="btn-boutique bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Shop Accessories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
