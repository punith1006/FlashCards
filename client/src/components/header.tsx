import { ShoppingBag } from "lucide-react";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-semibold hover:text-gray-300 transition-colors">
              AI Cards
            </Link>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <Link href="/cart" className="flex flex-col items-center text-white hover:text-gray-300 transition-colors group">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-xs mt-1 uppercase tracking-wide">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}