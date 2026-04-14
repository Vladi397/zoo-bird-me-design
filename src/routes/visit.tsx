import { createFileRoute } from "@tanstack/react-router";
import storefrontImg from "@/assets/storefront.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Zoo Bird And Me" },
      { name: "description", content: "Find us in store. Opening hours, directions, and a peek inside our boutique." },
      { property: "og:title", content: "Visit Us — Zoo Bird And Me" },
      { property: "og:description", content: "Find us in store. Opening hours and directions." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <main className="pt-[72px]">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Come Say Hello</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Visit Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">Location</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  13 Brugsstraat<br />
                  City Center<br />
                  Belgium
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">Opening Hours</h3>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex justify-between max-w-xs">
                    <span>Monday</span><span>Closed</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Tuesday – Friday</span><span>10:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Saturday</span><span>10:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Sunday</span><span>Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">Contact</h3>
                <p className="text-sm text-muted-foreground">hello@zoobirdandme.com</p>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src={storefrontImg}
                alt="Zoo Bird And Me boutique storefront"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
