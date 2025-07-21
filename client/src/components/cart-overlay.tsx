import { X, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export function CartOverlay({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartOverlayProps) {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const hasItems = items.length > 0;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Cart Overlay */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">
            My Cart ({items.length})
          </h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {hasItems && (
          <div className="px-4 py-2 bg-green-50 border-b">
            <div className="text-center text-sm">
              <span className="text-gray-600">Congrats! You've earned </span>
              <span className="font-semibold">Free Shipping</span>
            </div>
            <div className="w-full bg-green-500 h-1 rounded-full mt-2"></div>
          </div>
        )}

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {!hasItems ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Your cart is currently empty.</h3>
              <p className="text-gray-600 mb-6">
                Fill your cart with some amazing products to get you into ketosis.
              </p>
              <Button 
                onClick={onClose}
                className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full"
              >
                Shop Now
              </Button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 pb-4 border-b last:border-b-0">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">IMG</div>';
                      }}
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h4 className="font-medium text-sm leading-tight mb-1">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-xs mb-2">{item.variant}</p>
                    <p className="font-semibold text-sm mb-3">${item.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 py-1 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-xs text-gray-500 hover:text-gray-700 underline"
                      >
                        Remove
                      </button>
                    </div>
                    
                    
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Footer */}
        {hasItems && (
          <div className="border-t p-4">
            <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full text-base font-semibold">
              Checkout • ${subtotal.toFixed(2)}
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              By clicking the Checkout button, I represent I agree to the Terms of Service
            </p>
          </div>
        )}
      </div>
    </>
  );
}