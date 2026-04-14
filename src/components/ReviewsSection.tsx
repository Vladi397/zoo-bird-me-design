import { motion } from "framer-motion";

const reviews = [
  {
    name: "Anne-Marie Hendriks",
    text: "Zo'n gezellige winkel en enthousiaste eigenaresse. Met modieuze kleurrijke collectie en hebbedingen. Moeilijk om zonder iets te kopen de deur uit te gaan.",
  },
  {
    name: "Laura Van Bussel",
    text: "Hele leuke winkel met een lieve en enthousiaste eigenaresse! De producten worden mooi geëtaleerd en er worden zowel leuke kledingstukken als mooie accessoires verkocht.",
  },
  {
    name: "Cynthia De Bruin",
    text: "Super leuke winkel met kleding, sieraden en accessoires. Wendy helpt je goed bij het uitzoeken van mooie dingen en je krijgt een eerlijk advies van haar.",
  },
  {
    name: "Marian Rooyakkers",
    text: "Vorige week deze leuke boetiek aan de Edisonstraat voor de 1e keer een bezoek gebracht. Het is echt heaven. Lekker rustig op je gemak winkelen. Veel keuze, goed advies en leuke prijzen.",
  },
  {
    name: "Sancha Schuurs",
    text: "Heel mooi winkeltje met een steeds wisselende collectie. Prima prijzen en eigenares Wendy is een kei in adviseren!",
  },
  {
    name: "Bianca Blokzijl",
    text: "Super leuke winkel! Wendy geeft altijd goed advies en is ook heel eerlijk als iets minder staat. Aanrader!",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-mustard mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
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
          What Our Customers Say
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
          Loved by Many
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5 text-mustard">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">5.0 on Google</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card border border-border p-6 flex flex-col transition-shadow duration-300 hover:shadow-lg"
          >
            <StarRating />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-secondary-foreground">
                {review.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="text-sm font-medium text-foreground">
                {review.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
