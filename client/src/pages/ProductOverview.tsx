import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function ProductOverview() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Product images from the Perfect Keto reference
  const productImages = [
    'https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03.png?v=1733936162&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/PK_Collagen-Peptides_20serv-Vanilla-SFP_2024-07-08_30777c53-35bb-4478-812f-c9195f374b5e.png?v=1752762775&width=880'
  ];

  const thumbnailImages = [
    'https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03.png?v=1733936162&width=100',
    'https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=100',
    'https://shop.perfectketo.com/cdn/shop/files/PK_Collagen-Peptides_20serv-Vanilla-SFP_2024-07-08_30777c53-35bb-4478-812f-c9195f374b5e.png?v=1752762775&width=100'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm font-medium">
        Free Shipping on All Orders $75+ 
        <Button className="ml-4 text-sm font-bold bg-white text-black px-4 py-1 rounded hover:bg-gray-100 h-auto">
          SHOP NOW
        </Button>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="aspect-square bg-white flex items-center justify-center">
              <img 
                src={productImages[selectedImageIndex]}
                alt="Grass-Fed Collagen Peptides"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 justify-center">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-16 border-2 overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === index ? 'border-orange-400' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain bg-white"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Grass-Fed Collagen Peptides & MCT Brain Boost
            </h1>

            {/* Product Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              Get the protein your body needs in a delicious, low-carb supplement formulated to minimize impact 
              on your blood sugar levels. Clinical studies have shown collagen supports hair & nail, skin, joint 
              and gut health. Our grass-fed collagen peptides (formerly Keto Collagen) also include MCTs (medium 
              chain triglycerides) to help support cognition and mental clarity.
            </p>

            {/* Clinicians' Choice Badge */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Clinicians' Choice
                </div>
                <p className="text-sm text-gray-700">
                  124 clinicians share this without compensation.
                </p>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <img 
                    src="https://assets.app.thefrontrowhealth.com/6ga051ctceywn9jfxyxg03azzwc2" 
                    alt="Dr. Keemberly Kim, MD"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4" 
                    alt="Ageless Aesthetics"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://assets.app.thefrontrowhealth.com/4e8he28d9xopj5iyyv83w41q78xi" 
                    alt="Brittany Reynolds, DNP"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  View clinicians & learn more
                </button>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">5951 reviews</span>
            </div>

            {/* Current Selection */}
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-600">Current Selection: <span className="font-medium text-gray-900">Vanilla | 1 Tub up to 10% off</span></p>
            </div>

            {/* Quantity Options */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded hover:border-gray-300 cursor-pointer">
                  <input type="radio" name="quantity" value="1-tub" defaultChecked className="text-orange-500" />
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121" 
                        alt="1 Tub"
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium text-gray-900">1 Tub</span>
                    </div>
                    <span className="font-bold text-gray-900">$43.99</span>
                  </div>
                </label>
                
                <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded hover:border-gray-300 cursor-pointer">
                  <input type="radio" name="quantity" value="2-tubs" className="text-orange-500" />
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121" 
                        alt="2 Tubs"
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <span className="font-medium text-gray-900">2 Tubs</span>
                        <p className="text-sm text-green-600 font-medium">Up to 15% off</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">$75.99</span>
                      <p className="text-sm text-gray-500 line-through">$87.98</p>
                    </div>
                  </div>
                </label>
                
                <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded hover:border-gray-300 cursor-pointer">
                  <input type="radio" name="quantity" value="3-tubs" className="text-orange-500" />
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121" 
                        alt="3 Tubs"
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <span className="font-medium text-gray-900">3 Tubs</span>
                        <p className="text-sm text-green-600 font-medium">Up to 20% off</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-gray-900">$105.99</span>
                      <p className="text-sm text-gray-500 line-through">$131.97</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-3">
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg font-semibold rounded transition-colors duration-200">
                Add to Cart
              </Button>
              
              <p className="text-center text-sm text-gray-600">
                Free U.S. shipping for orders $75+, and a risk-free{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  quality guarantee
                </a>
              </p>
            </div>

            {/* Product Highlights */}
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Highlights</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-semibold">Made to:</span>{' '}
                  <span className="italic">Maintain joint health, promote hair, skin and nail growth, help muscle recovery, support digestion, increase focus</span>
                </li>
                <li>• Made with grass-fed collagen and added MCTs for focus and satiation</li>
                <li>• Dairy free</li>
                <li>• No artificial sweeteners</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When To Use Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">When To Use</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Morning</h4>
                <p className="text-sm text-gray-600">Mix with your morning coffee.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Evening</h4>
                <p className="text-sm text-gray-600">To help your muscles relax before bed.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Dessert</h4>
                <p className="text-sm text-gray-600">To satisfy your sweet tooth.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Workout</h4>
                <p className="text-sm text-gray-600">Help your sore joints recover.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Travel</h4>
                <p className="text-sm text-gray-600">To support your digestion when away from home.</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://cdn.shopify.com/s/files/1/1786/3461/files/collagen_lifestyle_01.jpg?v=1689777431"
              alt="Collagen lifestyle"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Move Better, Feel Better Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">Move Better, Feel Better</h2>
        </div>
      </div>
    </div>
  );
}