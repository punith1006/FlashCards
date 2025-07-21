import { ShoppingCart, Search, CircleUserRound, MapPin, Info } from "lucide-react";
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

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="flex flex-col items-center text-white hover:text-gray-300 transition-colors group">
              <Search className="h-5 w-5" />
              <span className="text-xs mt-1 uppercase tracking-wide">Search</span>
            </button>

            

            {/* Learn */}
            <button className="flex flex-col items-center text-white hover:text-gray-300 transition-colors group">
              <MapPin className="h-5 w-5" />
              <span className="text-xs mt-1 uppercase tracking-wide">Learn</span>
            </button>

            
          </div>
        </div>
      </div>
    </header>
  );
}