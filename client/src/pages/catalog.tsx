import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Static product data based on Perfect Keto reference
const staticProducts = [
  {
    id: 1,
    name: "Toku Flow | Nattokinase (10,800 FU)",
    price: 59.99,
    originalPrice: null,
    image: "https://cdn.shopify.com/s/files/1/1786/3461/files/toku-flow-product.jpg?v=1672945200",
    category: "Supplements",
    isNew: true,
    reviews: 20,
    rating: 4.8,
    badge: "*Perfect Keto Exclusive*",
    description: "Heart & Circulatory Health Support"
  },
  {
    id: 2,
    name: "Grass-Fed Collagen Peptides & MCT Brain Boost",
    price: 43.99,
    originalPrice: null,
    image: "https://cdn.shopify.com/s/files/1/1786/3461/files/collagen-vanilla-tub.jpg?v=1672945200",
    category: "Collagen",
    isNew: false,
    reviews: 5951,
    rating: 4.9,
    description: "Hair, Skin, Nails & Joints",
    flavors: ["Vanilla", "Mint Chocolate", "Salted Caramel", "Chocolate"]
  },
  {
    id: 3,
    name: "Collagen Protein Bars",
    price: 44.99,
    originalPrice: null,
    image: "https://cdn.shopify.com/s/files/1/1786/3461/files/collagen-bars-box.jpg?v=1672945200",
    category: "Bars",
    isNew: false,
    reviews: 4477,
    rating: 4.7,
    description: "Collagen Protein Bar",
    flavors: ["Peanut Butter Chocolate Chip", "Chocolate Chip Cookie Dough", "Salted Caramel"]
  },
  {
    id: 4,
    name: "Nola Bars",
    price: 24.99,
    originalPrice: null,
    image: "https://cdn.shopify.com/s/files/1/1786/3461/files/nola-bars-box.jpg?v=1672945200",
    category: "Bars",
    isNew: false,
    reviews: 1239,
    rating: 4.6,
    description: 'Keto "Granola" Bars',
    flavors: ["White Chocolate Macadamia", "Maple Pecan", "Coconut Chocolate Chip"]
  },
  {
    id: 5,
    name: "Base Ketones - Exogenous Ketones Drink Mix",
    price: 42.99,
    originalPrice: 44.99,
    image: "https://cdn.shopify.com/s/files/1/1786/3461/files/base-ketones-tub.jpg?v=1672945200",
    category: "Supplements",
    isNew: false,
    reviews: 5032,
    rating: 4.8,
    description: "Increase Ketone Levels",
    flavors: ["Strawberry Lemonade", "Vanilla", "Peach Mango"]
  }
];

function ProductCard({ product }: { product: typeof staticProducts[0] }) {
  return (
    <Card className="group h-full border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          {product.isNew && (
            <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">
              {product.reviews.toLocaleString()} reviews
            </span>
          </div>

          {/* Badge */}
          {product.badge && (
            <p className="text-xs font-medium text-green-600">{product.badge}</p>
          )}

          {/* Description */}
          <p className="text-sm text-gray-600">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-900">
              Sale price
            </span>
          </div>
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-semibold text-gray-900">
              ${product.price}
            </span>
          </div>

          {/* Flavors dropdown hint */}
          {product.flavors && (
            <p className="text-xs text-gray-500">
              From ${product.price}
            </p>
          )}

          {/* Quick Buy Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-gray-300 hover:bg-gray-50"
          >
            Quick Buy
          </Button>

          {/* Flavor Selection for products with flavors */}
          {product.flavors && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-700">Flavor</p>
              <select className="w-full text-xs border border-gray-300 rounded px-2 py-1 bg-white">
                {product.flavors.map((flavor, index) => (
                  <option key={index} value={flavor}>
                    {flavor} / 1 Tub - ${product.price}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Add to Cart Button */}
          <Button className="w-full bg-black hover:bg-gray-800 text-white">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Catalog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">All products</h1>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://cdn.shopify.com/s/files/1/1786/3461/files/collagen-products-banner.jpg?v=1672945200"
                alt="Perfect Keto Products"
                className="w-80 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Categories */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Filter by
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {["Best Sellers", "Collagen", "Supplements", "Food", "Bars"].map((category) => (
                      <label key={category} className="flex items-center text-sm text-gray-600">
                        <input type="checkbox" className="mr-2 rounded border-gray-300" />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button variant="outline" size="sm" className="w-full">
                  Clear All
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter */}
            <div className="lg:hidden mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">{staticProducts.length} Products</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Refine
                </Button>
                <Button variant="outline" size="sm">
                  Clear All
                </Button>
              </div>
            </div>

            {/* Desktop Product Count */}
            <div className="hidden lg:block mb-6">
              <p className="text-sm text-gray-600">{staticProducts.length} Products</p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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