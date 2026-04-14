import { createFileRoute } from "@tanstack/react-router";
import storefrontImg from "@/assets/storefront.jpg";
import heroImg from "@/assets/hero-lifestyle.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Zoo Bird And Me" },
      { name: "description", content: "Discover the inspiration behind Zoo Bird And Me and our dedication to conscious, beautiful curation." },
      { property: "og:title", content: "Our Story — Zoo Bird And Me" },
      { property: "og:description", content: "Beautiful things, thoughtfully chosen for a balanced life." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <img src={storefrontImg} alt="Zoo Bird And Me boutique" className="absolute inset-0 w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground font-medium">Our Story</h2>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">The Beginning</p>
        <h3 className="font-serif text-3xl font-medium text-foreground mb-8 leading-snug">
          A space where beauty meets intention
        </h3>
        <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
          <p>
            Zoo Bird And Me began with a simple vision: to create a space where the things we bring into our homes and lives are chosen with care, crafted with integrity, and designed to bring joy.
          </p>
          <p>
            Every item in our collection tells a story. From hand-thrown ceramics by independent artisans to organic cotton essentials for your little ones, we believe that quality and consciousness can coexist beautifully.
          </p>
          <p>
            Our name reflects the playful, curious spirit we bring to curation — the zoo of textures, the birds-eye view of design, and the deeply personal &quot;me&quot; that makes every choice meaningful.
          </p>
        </div>
      </section>

      {/* Philosophy image */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <img src={heroImg} alt="Curated lifestyle goods" className="w-full h-[40vh] object-cover" loading="lazy" width={1920} height={1080} />
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Values</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Conscious Curation", text: "Every piece is hand-selected for quality, sustainability, and beauty." },
              { title: "Artisan First", text: "We champion independent makers and ethical production practices." },
              { title: "Family at Heart", text: "From you to your baby — essentials that grow with your family." },
            ].map((v) => (
              <div key={v.title}>
                <h4 className="font-serif text-lg font-medium text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
