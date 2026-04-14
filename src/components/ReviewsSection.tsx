const reviews = [
  {
    name: "Anne-Marie Hendriks",
    text: "Zo'n gezellige winkel en enthousiaste eigenaresse. Met modieuze kleurrijke collectie en hebbedingen. Moeilijk om zonder iets te kopen de deur uit te gaan.",
    stars: 5,
  },
  {
    name: "Laura Van Bussel",
    text: "Hele leuke winkel met een lieve en enthousiaste eigenaresse! De producten worden mooi geëtaleerd en er worden zowel leuke kledingstukken als mooie accessoires verkocht.",
    stars: 5,
  },
  {
    name: "Cynthia De Bruin",
    text: "Super leuke winkel met kleding, sieraden en accessoires. Wendy helpt je goed bij het uitzoeken van mooie dingen en je krijgt een eerlijk advies van haar.",
    stars: 5,
  },
  {
    name: "Marian Rooyakkers",
    text: "Vorige week deze leuke boetiek aan de Edisonstraat voor de 1e keer een bezoek gebracht. Het is echt heaven. Lekker rustig op je gemak winkelen. Veel keuze, goed advies en leuke prijzen.",
    stars: 5,
  },
  {
    name: "Sancha Schuurs",
    text: "Heel mooi winkeltje met een steeds wisselende collectie. Prima prijzen en eigenares Wendy is een kei in adviseren!",
    stars: 5,
  },
  {
    name: "Bianca Blokzijl",
    text: "Super leuke winkel! Wendy geeft altijd goed advies en is ook heel eerlijk als iets minder staat. Aanrader!",
    stars: 5,
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
      <div className="text-center mb-14">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-card border border-border p-6 flex flex-col"
          >
            <StarRating />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-secondary-foreground">
                {review.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="text-sm font-medium text-foreground">
                {review.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
