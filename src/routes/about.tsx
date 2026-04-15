import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import storefrontImg from "@/assets/storefront.png";
import interiorImg from "@/assets/interior-clothing.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Fashion from Haven" },
      { name: "description", content: "Discover the inspiration behind Fashion from Haven and our dedication to curated, effortless modern style." },
      { property: "og:title", content: "Our Story — Fashion from Haven" },
      { property: "og:description", content: "Your haven for curated modern style." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-[72px]">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img src={storefrontImg} alt="Fashion from Haven boutique storefront" className="w-full h-full object-cover" width={1200} height={800} />
          <div className="absolute inset-0 bg-foreground/30" />
        </motion.div>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground font-medium">Our Story</h2>
        </motion.div>
      </section>

      <section className="section-padding max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">The Beginning</p>
          <h3 className="font-serif text-3xl font-medium text-foreground mb-8 leading-snug">
            A curated haven for the modern woman
          </h3>
          <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
            <p>
              Fashion from Haven began with a simple vision: to create a space where women can discover quality fashion and lifestyle pieces that feel effortless, refined, and deeply personal.
            </p>
            <p>
              Every item in our collection is hand-selected for its craftsmanship, fabric quality, and timeless design. From tailored blazers to artisan leather accessories, we believe in pieces that elevate your everyday.
            </p>
            <p>
              Our boutique at Brugsstraat 13 — with its warm interior, golden shelving, and carefully styled displays — reflects the balance we seek in fashion: playful meets refined, modern meets classic.
            </p>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="px-6 md:px-12 lg:px-24 pb-20"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <img src={interiorImg} alt="Fashion from Haven interior with clothing racks" className="w-full h-[40vh] object-cover" loading="lazy" width={1920} height={1080} />
      </motion.section>

      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Curated Quality", text: "Every piece is hand-selected for craftsmanship, premium fabrics, and enduring style." },
              { title: "Modern Elegance", text: "We champion effortless fashion that transitions from day to evening with ease." },
              { title: "Intentional Living", text: "From fashion to home — curated essentials that bring beauty to your everyday." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <h4 className="font-serif text-lg font-medium text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
