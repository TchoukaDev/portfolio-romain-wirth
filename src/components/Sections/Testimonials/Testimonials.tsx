export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alain",
      job: "Entraîneur au club de marche aquatique Les Randonneurs des Sables et administrateur du site",
      quote:
        "Nous avons fait confiance à ce jeune développeur pour créer un site dédié à une activité particulière et méconnue et le résultat dépasse nos espérances… Consciencieux, très disponible, toujours à la recherche du meilleur compromis, notre site est devenu très rapidement une référence consultée dans notre spécialité !",
      source: "Envoyé par email le 19/01/2026",
    },
  ];

  return (
    <section id="testimonials" className="card spy">
      <h2>Témoignages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:gap-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-primary/50 p-6 rounded-lg border border-blue-500/20 shadow-md shadow-blue-900/30 space-y-4"
          >
            <div className="flex items-start gap-2">
              <span className="text-blue-400 text-4xl leading-none font-playfair">&quot;</span>
              <p className="italic leading-relaxed pt-2">{testimonial.quote}</p>
              <span className="text-blue-400 text-4xl leading-none font-playfair self-end">&quot;</span>
            </div>
            
            <div className="border-t border-blue-500/20 pt-4 space-y-1">
              <h3 className="mb-1">{testimonial.name}</h3>
              <p className="text-xs sm:text-sm text-gray-300">{testimonial.job}</p>
              <p className="text-xs text-gray-400 italic text-right">{testimonial.source}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}