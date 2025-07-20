
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
    <div className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Product Image */}
      <div 
        className="relative aspect-square bg-gray-50 overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          if (product.hoverImage) setCurrentImage(product.hoverImage);
        }}
        onMouseLeave={() => {
          setCurrentImage(product.image);
        }}
      >
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </div>
        )}
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
          {product.name}
        </h3>

        {/* Badge */}
        {product.badge && (
          <p className="text-sm font-bold text-green-700 mb-2">{product.badge}</p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow">{product.description}</p>

        {/* Price and Button - Aligned to bottom */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-xs text-gray-500 mb-1">Sale price</p>
            <p className="text-xl font-bold text-gray-900">${product.price}</p>
          </div>
          <button className="px-6 py-2 border-2 border-gray-900 text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-200">
            Quick Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Exact Perfect Keto replica */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-gray-900">All products</h1>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-96 h-32 rounded-lg overflow-hidden">
                {/* Light blue background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                
                {/* Collagen products arrangement - exact replica */}
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  {/* Background decorative elements */}
                  <div className="absolute bottom-8 left-12 w-6 h-6 bg-green-200 rounded-full opacity-60"></div>
                  <div className="absolute bottom-12 right-16 w-4 h-8 bg-amber-700 rounded opacity-40"></div>
                  
                  {/* Product arrangement */}
                  <div className="relative flex items-end space-x-1">
                    {/* Left green collagen jar */}
                    <div className="w-12 h-16 bg-gradient-to-b from-green-100 to-green-200 rounded-lg border border-gray-300 shadow-sm relative">
                      <div className="absolute top-1 inset-x-1 h-2 bg-gray-800 rounded-sm"></div>
                      <div className="absolute top-4 inset-x-2 h-6 bg-white rounded text-xs flex items-center justify-center">
                        <div className="w-1 h-4 bg-green-500"></div>
                      </div>
                    </div>
                    
                    {/* Center back tall jar */}
                    <div className="w-14 h-20 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg border border-gray-300 shadow-md relative -mb-2">
                      <div className="absolute top-1 inset-x-1 h-2 bg-gray-800 rounded-sm"></div>
                      <div className="absolute top-4 inset-x-2 h-8 bg-white rounded text-xs flex items-center justify-center">
                        <div className="w-1 h-6 bg-amber-600"></div>
                      </div>
                    </div>
                    
                    {/* Center front medium jar */}
                    <div className="w-13 h-18 bg-gradient-to-b from-orange-100 to-orange-200 rounded-lg border border-gray-300 shadow-sm relative">
                      <div className="absolute top-1 inset-x-1 h-2 bg-gray-800 rounded-sm"></div>
                      <div className="absolute top-3 inset-x-2 h-6 bg-white rounded text-xs flex items-center justify-center">
                        <div className="w-1 h-4 bg-orange-500"></div>
                      </div>
                    </div>
                    
                    {/* Right teal jar */}
                    <div className="w-12 h-17 bg-gradient-to-b from-teal-100 to-teal-200 rounded-lg border border-gray-300 shadow-sm relative">
                      <div className="absolute top-1 inset-x-1 h-2 bg-gray-800 rounded-sm"></div>
                      <div className="absolute top-4 inset-x-2 h-5 bg-white rounded text-xs flex items-center justify-center">
                        <div className="w-1 h-3 bg-teal-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Yellow accent bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Product Count */}
        <div className="mb-8 pb-4 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-700">{staticProducts.length} Products</p>
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