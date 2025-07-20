
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// Static product data with actual Perfect Keto images
const staticProducts = [
  {
    id: 1,
    name: "Toku Flow | Nattokinase (10,800 FU)",
    price: 59.99,
    originalPrice: null,
    image: "https://shop.perfectketo.com/cdn/shop/files/Toku-Flow-Nattokinase_{width}x.png?v=1744732620",
    hoverImage: "https://shop.perfectketo.com/cdn/shop/files/TOKU_IMAGES_3.png?v=1749740576&width=533",
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
    image: "https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03_{width}x.png?v=1733936162",
    hoverImage: "https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Chocolate-Tub_24-07-03.png?v=1752762697&width=533",
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
    image: "https://shop.perfectketo.com/cdn/shop/files/PK_CollagenProteinBars-ChocolateAlmondBrownie-RENDER-Film_Box_24-07-08_{width}x.png?v=1721765759",
    hoverImage: "https://shop.perfectketo.com/cdn/shop/files/collagen-protein-bar-cookie-dough-mct-boost_4.png?v=1724791243&width=533",
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
    image: "https://shop.perfectketo.com/cdn/shop/files/PK_Nola-Bar_Box_White-Choc-Macadamia_RENDER_24-07-26_{width}x.png?v=1724780571",
    hoverImage: "https://shop.perfectketo.com/cdn/shop/files/Nola_Bars.png?v=1688758543&width=533",
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
    image: "https://shop.perfectketo.com/cdn/shop/files/PK_Base-Ketones-Tub-Strawberry-Lemonade_RENDER_950x950_61dc97c4-9d01-4fac-b997-29f865ec008b_{width}x.png?v=1736348870",
    hoverImage: "https://shop.perfectketo.com/cdn/shop/files/base-ketones-pink-lemonade.png?v=1736348630&width=533",
    category: "Supplements",
    isNew: false,
    description: "Increase Ketone Levels",
    flavors: ["Strawberry Lemonade", "Vanilla", "Peach Mango"]
  }
];

function ProductCard({ product }: { product: typeof staticProducts[0] }) {
  const [currentImage, setCurrentImage] = useState(product.image);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Product Image */}
      <div 
        className="relative aspect-square bg-gray-50 overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          setIsHovered(true);
          if (product.hoverImage) setCurrentImage(product.hoverImage);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentImage(product.image);
        }}
      >
        {product.isNew && (
          <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
            NEW
          </div>
        )}
        <img
          src={currentImage.replace('{width}', '400')}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-3 space-y-2">
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 hover:text-blue-600 cursor-pointer">
          {product.name}
        </h3>

        {/* Badge */}
        {product.badge && (
          <p className="text-xs font-bold text-green-700">{product.badge}</p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

        {/* Price Section */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">Sale price</span>
          </div>
          <div className="flex items-center gap-2">
            {product.flavors && (
              <span className="text-xs text-gray-500">From</span>
            )}
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
          </div>
        </div>

        {/* Quick Buy Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-xs border-gray-300 hover:bg-gray-50 py-1.5"
        >
          Quick Buy
        </Button>

        {/* Flavor Selection for products with flavors */}
        {product.flavors && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-700">Flavor</span>
            </div>
            <select className="w-full text-xs border border-gray-300 rounded px-2 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500">
              {product.flavors.slice(0, 3).map((flavor, index) => (
                <option key={index} value={flavor}>
                  {flavor} / 1 Tub - ${product.price}
                </option>
              ))}
            </select>
            <div className="text-xs text-gray-500 space-y-0.5">
              <div className="flex justify-between">
                <span>Sale price</span>
              </div>
              <div className="flex justify-between">
                <span>From</span>
                <span className="font-medium">${product.price}</span>
              </div>
              <div className="text-xs space-y-1 max-h-20 overflow-y-auto">
                {product.flavors.map((flavor, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="truncate">{flavor} / 1 Tub</span>
                    <span>- ${product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Add to Cart Button */}
        <Button className="w-full bg-black hover:bg-gray-800 text-white text-sm py-2 font-medium">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">All products</h1>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03_400x.png?v=1733936162"
                alt="Perfect Keto Products"
                className="w-80 h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div>
          {/* Products Grid */}
          <div>
            {/* Product Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">{staticProducts.length} Products</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {staticProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}