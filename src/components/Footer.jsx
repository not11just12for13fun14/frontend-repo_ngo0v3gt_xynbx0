export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold">E</span>
              <span className="text-lg font-semibold tracking-tight">EcoGoods</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Thoughtfully designed products for a greener lifestyle.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-emerald-700">About us</a></li>
              <li><a href="#" className="hover:text-emerald-700">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-700">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Help</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-700">Shipping</a></li>
              <li><a href="#" className="hover:text-emerald-700">Returns</a></li>
              <li><a href="#" className="hover:text-emerald-700">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} EcoGoods. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
