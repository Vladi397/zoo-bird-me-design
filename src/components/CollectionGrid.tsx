import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import womenswearImg from "@/assets/collection-womenswear.jpg";
import homeImg from "@/assets/collection-home.jpg";
import shoesBagsImg from "@/assets/collection-baby.jpg";

const collections = [
  {
    title: "New Arrivals",
    subtitle: "The latest in effortless premium fashion",
    image: womenswearImg,
    alt: "Curated womenswear flat-lay with tailored blazer and silk blouse",
  },
  {
    title: "Home & Wellness",
    subtitle: "Luxury candles, ceramics & wellness essentials",
    image: homeImg,
    alt: "Minimalist ceramics and luxury candles on wood shelving",
  },
  {
    title: "Shoes & Bags",
    subtitle: "Statement leather accessories for every occasion",
    image: shoesBagsImg,
    alt: "Premium designer shoes and leather handbags on display",
  },
];

export function CollectionGrid() {
  return (
    <section className="section-padding">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Our Collections
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
          Thoughtfully Curated
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {collections.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <Link to="/shop" className="collection-card group block">
              <motion.div
                className="aspect-[4/5] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={col.image}
                  alt={col.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </motion.div>
              <div className="pt-5">
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {col.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {col.subtitle}
                </p>
                <span className="inline-block mt-3 text-xs tracking-[0.2em] uppercase text-foreground border-b border-foreground pb-0.5 group-hover:border-accent transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
