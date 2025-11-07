import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Coffee Beans",
    price: 18.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502465771179-51f3535da42e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 24.5,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Bamboo Toothbrush Set",
    price: 12.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Eco Laundry Detergent",
    price: 15.49,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
            <p className="mt-1 text-sm text-slate-600">
              Shop our best-sellers, curated for quality and sustainability.
            </p>
          </div>
          <a href="#" className="text-emerald-700 hover:underline">View all</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-square w-full bg-slate-50">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-1 font-semibold text-slate-900">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">${p.price.toFixed(2)}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-amber-600">
                    <Star className="h-4 w-4 fill-amber-500 text-amber-500" /> {p.rating}
                  </span>
                </div>
                <button className="mt-4 w-full rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
