import { Link } from "@tanstack/react-router";
import womenswearImg from "@/assets/collection-womenswear.jpg";
import homeImg from "@/assets/collection-home.jpg";
import babyImg from "@/assets/collection-baby.jpg";

const collections = [
  {
    title: "Womenswear & Accessories",
    subtitle: "Effortless pieces in natural fabrics",
    image: womenswearImg,
    alt: "Curated womenswear flat-lay with sage dress and leather accessories",
  },
  {
    title: "Home & Lifestyle",
    subtitle: "Artisan ceramics, textiles & objects",
    image: homeImg,
    alt: "Handcrafted ceramics and woven textiles on wooden shelf",
  },
  {
    title: "For Baby & Kids",
    subtitle: "Soft, organic essentials for little ones",
    image: babyImg,
    alt: "Organic cotton baby onesie with wooden toys and knitted blanket",
  },
];

export function CollectionGrid() {
  return (
    <section className="section-padding">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Our Collections
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
          Thoughtfully Curated
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {collections.map((col) => (
          <Link to="/shop" key={col.title} className="collection-card group block">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={col.image}
                alt={col.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
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
        ))}
      </div>
    </section>
  );
}
