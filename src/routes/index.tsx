import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { CollectionGrid } from "@/components/CollectionGrid";
import { StorySection } from "@/components/StorySection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fashion from Haven — Curated Modern Style" },
      { name: "description", content: "Your haven for curated modern style. Premium womenswear, accessories, and lifestyle essentials." },
      { property: "og:title", content: "Fashion from Haven — Curated Modern Style" },
      { property: "og:description", content: "Your haven for curated modern style." },
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
