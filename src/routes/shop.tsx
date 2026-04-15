import { createFileRoute } from "@tanstack/react-router";
import womenswearImg from "@/assets/collection-womenswear.png";
import accessoriesImg from "@/assets/collection-accessories.png";
import bagsImg from "@/assets/collection-bags.png";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Fashion from Haven" },
      { name: "description", content: "Browse our curated collections of premium womenswear, jewels & accessories, and shoes & bags." },
      { property: "og:title", content: "Shop — Fashion from Haven" },
      { property: "og:description", content: "Browse our curated collections." },
    ],
  }),
  component: ShopPage,
});

const categories = [
  { name: "New Arrivals", image: womenswearImg, count: "48 pieces" },
  { name: "Jewels & Accessories", image: accessoriesImg, count: "32 pieces" },
  { name: "Shoes & Bags", image: bagsImg, count: "24 pieces" },
];

function ShopPage() {
  return (
    <main className="pt-[72px]">
      <section className="section-padding">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Collections</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">The Shop</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="collection-card group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-primary-foreground font-medium">{cat.name}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mt-1">{cat.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Full product catalog coming soon. Visit our store to see the complete collection.
          </p>
        </div>
      </section>
    </main>
  );
}
