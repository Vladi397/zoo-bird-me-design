import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { CollectionGrid } from "@/components/CollectionGrid";
import { StorySection } from "@/components/StorySection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zoo Bird And Me — Curated Goods for You + Your Baby" },
      { name: "description", content: "Beautiful, conscious essentials for your home and family. Curated womenswear, home goods, beauty, and baby essentials." },
      { property: "og:title", content: "Zoo Bird And Me — Curated Goods for You + Your Baby" },
      { property: "og:description", content: "Beautiful, conscious essentials for your home and family." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="pt-[72px]">
      <HeroSection />
      <CollectionGrid />
      <StorySection />
      <ReviewsSection />
      <NewsletterSection />
    </main>
  );
}
