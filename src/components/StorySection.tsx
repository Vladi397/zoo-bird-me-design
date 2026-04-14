import { Link } from "@tanstack/react-router";
import storefrontImg from "@/assets/storefront.jpg";

export function StorySection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={storefrontImg}
            alt="Zoo Bird And Me boutique storefront with warm interior lighting"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-snug mb-6">
            Beautiful things,<br />thoughtfully chosen
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Zoo Bird And Me was born from a simple belief: the things we surround ourselves and our families with should be beautiful, conscious, and intentionally made. Every piece in our collection is hand-picked for its craftsmanship, materials, and the story behind it.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            From artisan ceramics to organic baby essentials, we curate a world where quality meets warmth — a space where you can slow down and choose with care.
          </p>
          <Link to="/about" className="btn-boutique-outline">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
