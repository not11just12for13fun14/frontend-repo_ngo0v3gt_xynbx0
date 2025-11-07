import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold">E</span>
          <span className="text-lg font-semibold tracking-tight">EcoGoods</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#products" className="hover:text-emerald-600 transition-colors">Products</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-emerald-600 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-600 hover:text-emerald-700">
            <ShoppingCart className="h-4 w-4" />
            Cart
          </button>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 space-y-2">
            <a href="#products" className="block rounded-md px-2 py-2 hover:bg-slate-50">Products</a>
            <a href="#about" className="block rounded-md px-2 py-2 hover:bg-slate-50">About</a>
            <a href="#testimonials" className="block rounded-md px-2 py-2 hover:bg-slate-50">Reviews</a>
            <a href="#contact" className="block rounded-md px-2 py-2 hover:bg-slate-50">Contact</a>
            <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-600 hover:text-emerald-700">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
