import { ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/hooks/use-cart";

export function Header() {
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
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
            <button 
              onClick={toggleCart}
              className="flex flex-col items-center text-white hover:text-gray-300 transition-colors group relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="text-xs mt-1 uppercase tracking-wide">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}