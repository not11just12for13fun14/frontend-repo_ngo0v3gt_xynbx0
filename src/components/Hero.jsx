import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            <Star className="h-3 w-3" /> Handpicked eco-friendly picks
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Premium Organic Goods for Conscious Living
          </h1>
          <p className="mt-4 text-slate-600">
            Discover thoughtfully crafted products that blend sustainability with style. Shop confidently with fast shipping and easy returns.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-800 hover:border-emerald-600 hover:text-emerald-700"
            >
              Learn More
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div>
              <span className="font-bold text-slate-900">Free</span> shipping over $50
            </div>
            <div>
              <span className="font-bold text-slate-900">4.9/5</span> customer rating
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
              alt="Featured eco products"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
