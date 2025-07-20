import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Search, MapPin, User, ShoppingCart, Check, Minus, Plus } from "lucide-react";
import { Link } from "wouter";

export function ProductOverview() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState('vanilla');
  const [quantity, setQuantity] = useState(1);

  // Product images from the Perfect Keto reference
  const productImages = [
    'https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03.png?v=1733936162&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/us_v_them_collagen.jpg?v=1752762775&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/PK_Collagen-Peptides_20serv-Vanilla-SFP_2024-07-08_30777c53-35bb-4478-812f-c9195f374b5e.png?v=1752762775&width=880'
  ];

  const thumbnailImages = [
    'https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03.png?v=1733936162&width=100',
    'https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=100',
    'https://shop.perfectketo.com/cdn/shop/files/us_v_them_collagen.jpg?v=1752762775&width=100'
  ];

  const flavorOptions = [
    { id: 'vanilla', name: 'Vanilla', image: 'https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121' },
    { id: 'mint-chocolate', name: 'Mint Chocolate', image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38.png?v=1724662815' },
    { id: 'salted-caramel', name: 'Salted Caramel', image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_3.png?v=1724662914' },
    { id: 'cinnamon-toast', name: 'Cinnamon Toast', image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_4.png?v=1724662945' },
    { id: 'strawberry', name: 'Strawberry', image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_5.png?v=1724662971' },
    { id: 'peanut-butter', name: 'Peanut Butter', image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_6.png?v=1724663000' },
    { id: 'chocolate', name: 'Chocolate', image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_1.png?v=1724662855' },
    { id: 'unflavored', name: 'Unflavored', image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_7.png?v=1724663033' }
  ];



  return (
    <div className="min-h-screen bg-white">
      
      
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
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
            <div className="flex space-x-3">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-16 border rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === index ? 'border-black' : 'border-gray-300 hover:border-gray-500'
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
            <div>
              <h1 className="text-3xl font-bold text-black leading-tight mb-4">
                Grass-Fed Collagen Peptides & MCT Brain Boost
              </h1>

              {/* Product Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Get the protein your body needs in a delicious, low-carb supplement formulated to minimize impact on your blood sugar levels. Clinical studies have shown collagen supports hair & nail, skin, joint and gut health. Our grass-fed collagen peptides (formerly Keto Collagen) also include MCTs (medium chain triglycerides) to help support cognition and mental clarity.
              </p>
            </div>

            

            

            

            

            {/* Quantity and Add to Cart Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 pt-[50px] pb-[50px]">
                {/* Quantity Controls */}
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mr-4">QUANTITY</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 text-lg font-medium min-w-[60px] text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-lg flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>
              
              
            </div>
          </div>
        </div>

        {/* When To Use Section */}
        <div className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-black mb-12">When To Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Morning */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-gray-600">
                  <path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Morning</h3>
              <p className="text-sm text-gray-600">Mix with your morning coffee.</p>
            </div>

            {/* Evening */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-gray-600">
                  <path fill="currentColor" d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Evening</h3>
              <p className="text-sm text-gray-600">To help your muscles relax before bed.</p>
            </div>

            {/* Dessert */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-gray-600">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.82.62-3.49 1.64-4.83 1.57 1.3 3.6 2.08 5.81 2.08s4.24-.78 5.81-2.08C18.38 8.51 20 10.18 20 12c0 4.41-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Dessert</h3>
              <p className="text-sm text-gray-600">To satisfy your sweet tooth.</p>
            </div>

            {/* Workout */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-gray-600">
                  <path fill="currentColor" d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Workout</h3>
              <p className="text-sm text-gray-600">Help your sore joints recover.</p>
            </div>

            {/* Travel */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-gray-600">
                  <path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Travel</h3>
              <p className="text-sm text-gray-600">To support your digestion when away from home.</p>
            </div>
          </div>
        </div>

        {/* Product Benefits Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Why Choose Perfect Keto Collagen?</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our grass-fed collagen peptides are formulated with the highest quality ingredients to support your health and wellness goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Grass-Fed & Pasture-Raised</h3>
                <p className="text-gray-600">
                  Sourced from grass-fed, pasture-raised cattle for the highest quality collagen peptides.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600">
                    <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">MCT Brain Boost</h3>
                <p className="text-gray-600">
                  Enhanced with MCTs to support cognitive function and mental clarity throughout your day.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600">
                    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Clinical Studies</h3>
                <p className="text-gray-600">
                  Backed by clinical research showing benefits for hair, nails, skin, joints, and gut health.
                </p>
              </div>
            </div>
          </div>
        </div>

        

        

        {/* What's Inside Section */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-black mb-12">What's Inside</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">Grass-Fed Collagen Peptides</h3>
                  <p className="text-gray-600 mb-4">
                    Our premium collagen peptides are sourced from grass-fed, pasture-raised cattle, providing Types I and III collagen to support:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Hair, skin, and nail health
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Joint and bone support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Gut health and digestion
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Muscle recovery and growth
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-black mb-4">MCT Oil Powder</h3>
                  <p className="text-gray-600 mb-4">
                    Medium-chain triglycerides from coconut oil provide quick energy and support:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Mental clarity and focus
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Sustained energy levels
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Ketone production
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <img 
                  src="https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=600"
                  alt="Collagen Peptides with MCT Boost"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}