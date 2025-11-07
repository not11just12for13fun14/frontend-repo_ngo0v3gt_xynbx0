import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarav",
    text: "Quality products and super fast delivery. I love the eco-friendly packaging!",
  },
  {
    id: 2,
    name: "Neha",
    text: "Beautifully curated selection. The coffee beans are my absolute favorite!",
  },
  {
    id: 3,
    name: "Rahul",
    text: "Great customer service and easy returns. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-emerald-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">What customers say</h2>
        <p className="mt-1 text-sm text-slate-600">
          Real stories from real shoppers
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex items-center gap-1 text-amber-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <blockquote className="text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
