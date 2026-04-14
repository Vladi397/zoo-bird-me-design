import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-lifestyle.jpg";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Curated lifestyle goods on natural wood table"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/80 mb-6 animate-fade-in-up">
            Curated with intention
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up-delay">
            Beautiful goods<br />for you + your baby
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/80 max-w-md mb-10 leading-relaxed animate-fade-in-up-delay-2">
            Conscious essentials for your home and family, thoughtfully chosen for a balanced life.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-2">
            <Link to="/shop" className="btn-boutique bg-primary-foreground text-foreground border-primary-foreground hover:bg-transparent hover:text-primary-foreground">
              Shop Womenswear
            </Link>
            <Link to="/shop" className="btn-boutique bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              Shop for Baby
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
