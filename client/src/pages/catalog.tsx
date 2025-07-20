
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// Static product data with working image URLs
const staticProducts = [
  {
    id: 1,
    name: "Toku Flow | Nattokinase (10,800 FU)",
    price: 59.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    category: "Supplements",
    isNew: true,
    badge: "*Perfect Keto Exclusive*",
    description: "Heart & Circulatory Health Support"
  },
  {
    id: 2,
    name: "Grass-Fed Collagen Peptides & MCT Brain Boost",
    price: 43.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    category: "Collagen",
    isNew: false,
    description: "Hair, Skin, Nails & Joints",
    flavors: ["Vanilla", "Mint Chocolate", "Salted Caramel", "Cinnamon Toast", "Strawberry", "Peanut Butter", "Chocolate", "Unflavored"]
  },
  {
    id: 3,
    name: "Collagen Protein Bars",
    price: 44.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=400&fit=crop",
    category: "Bars",
    isNew: false,
    description: "Collagen Protein Bar",
    flavors: ["Peanut Butter Chocolate Chip", "Chocolate Chip Cookie Dough", "Salted Caramel", "Almond Butter Brownie"]
  },
  {
    id: 4,
    name: "Nola Bars",
    price: 24.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
    category: "Bars",
    isNew: false,
    description: 'Keto "Granola" Bars',
    flavors: ["White Chocolate Macadamia", "Maple Pecan", "Coconut Chocolate Chip", "Peanut Butter"]
  },
  {
    id: 5,
    name: "Base Ketones - Exogenous Ketones Drink Mix",
    price: 42.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    category: "Supplements",
    isNew: false,
    description: "Increase Ketone Levels",
    flavors: ["Strawberry Lemonade", "Vanilla", "Peach Mango"]
  }
];

function ProductCard({ product }: { product: typeof staticProducts[0] }) {
  const [currentImage, setCurrentImage] = useState(product.image);

  return (
    <div className="group relative bg-white overflow-hidden">
      {/* Product Image */}
      <div 
        className="relative aspect-square bg-white overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          if (product.hoverImage) setCurrentImage(product.hoverImage);
        }}
        onMouseLeave={() => {
          setCurrentImage(product.image);
        }}
      >
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1">
            NEW
          </div>
        )}
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="pt-4 pb-2">
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Badge */}
        {product.badge && (
          <p className="text-xs font-bold text-green-700 mb-2">{product.badge}</p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>

        {/* Price Section */}
        <div className="mb-3">
          <div className="text-xs text-gray-500 mb-1">Sale price</div>
          <div className="flex items-baseline gap-2">
            {product.flavors && (
              <span className="text-xs text-gray-500">From</span>
            )}
            <span className="text-lg font-bold text-black">
              ${product.price}
            </span>
          </div>
        </div>

        {/* Quick Buy Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-xs border-gray-300 hover:bg-gray-50 mb-3"
        >
          Quick Buy
        </Button>

        {/* Flavor Selection for products with flavors */}
        {product.flavors && (
          <div className="space-y-2 mb-3">
            <div className="text-xs font-medium text-gray-700">Flavor</div>
            <select className="w-full text-xs border border-gray-300 rounded px-2 py-2 bg-white">
              {product.flavors.slice(0, 4).map((flavor, index) => (
                <option key={index} value={flavor}>
                  {flavor} / 1 Tub - ${product.price}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price breakdown for flavored products */}
        {product.flavors && (
          <div className="text-xs text-gray-600 space-y-1 mb-3">
            <div className="flex justify-between">
              <span>Sale price</span>
            </div>
            <div className="flex justify-between">
              <span>From</span>
              <span className="font-medium">${product.price}</span>
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <Button className="w-full bg-black hover:bg-gray-800 text-white text-sm font-medium">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Exact Perfect Keto styling */}
      <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">All products</h1>
            </div>
            <div className="hidden md:block">
              <div className="w-80 h-32 bg-yellow-400 rounded flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=320&h=128&fit=crop"
                  alt="Perfect Keto Products"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">{staticProducts.length} Products</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staticProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}