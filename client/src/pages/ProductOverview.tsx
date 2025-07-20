import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Search, MapPin, User, ShoppingCart, Check } from "lucide-react";
import { Link } from "wouter";

export function ProductOverview() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState('vanilla');
  const [selectedQuantity, setSelectedQuantity] = useState('1-tub');

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

  const quantityOptions = [
    { id: '1-tub', name: '1 Tub', discount: '', image: 'https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121' },
    { id: '2-tubs', name: '2 Tubs', discount: 'Up to 15% off', image: 'https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121' },
    { id: '3-tubs', name: '3 Tubs', discount: 'Up to 20% off', image: 'https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <div className="flex items-center justify-center space-x-2">
          <span>Free Shipping on All Orders $75+</span>
          <Button className="bg-white text-black text-xs px-3 py-1 hover:bg-gray-100">
            SHOP NOW
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">Perfect Keto</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="hover:text-gray-300">Shop All</Link>
              <Link href="#" className="hover:text-gray-300">Learn About Keto</Link>
              <Link href="#" className="hover:text-gray-300">Keto Recipes</Link>
              <Link href="#" className="hover:text-gray-300">Wholesale</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer" />
              <span className="text-xs uppercase tracking-wide">SEARCH</span>
              <MapPin className="w-5 h-5 cursor-pointer" />
              <span className="text-xs uppercase tracking-wide">ABOUT</span>
              <User className="w-5 h-5 cursor-pointer" />
              <span className="text-xs uppercase tracking-wide">LEARN</span>
              <div className="flex items-center space-x-1">
                <User className="w-5 h-5 cursor-pointer" />
                <span className="text-xs uppercase tracking-wide">ACCOUNT</span>
              </div>
              <div className="flex items-center space-x-1">
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
                <span className="text-xs uppercase tracking-wide">CART</span>
                <span className="bg-yellow-500 text-black text-xs rounded-full px-2 py-1 ml-1">0</span>
              </div>
            </div>
          </div>
        </div>
      </header>

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

            {/* Clinicians' Choice Badge */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-teal-600" />
                  <span className="font-semibold text-teal-800">Clinicians' Choice</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                127 clinicians share this on FrontrowMD without compensation.
              </p>
              <div className="flex space-x-2 mb-3">
                <img 
                  src="https://assets.app.thefrontrowhealth.com/6ga051ctceywn9jfxyxg03azzwc2" 
                  alt="Dr. Keemberly Kim, MD"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img 
                  src="https://assets.app.thefrontrowhealth.com/j3dpo0lkq5u6etn5fezqeizarel4" 
                  alt="Ageless Aesthetics & Beauty Bar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img 
                  src="https://assets.app.thefrontrowhealth.com/4e8he28d9xopj5iyyv83w41q78xi" 
                  alt="Brittany Reynolds, DNP"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <Button variant="link" className="text-teal-600 p-0 h-auto text-sm">
                View clinicians & learn more
              </Button>
            </div>

            {/* Reviews */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">5951 reviews</span>
            </div>

            {/* Current Selection */}
            <div className="bg-gray-50 p-3 rounded mb-6">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-black">Current Selection:</span> Vanilla | 1 Tub Up to 10% off
              </p>
            </div>

            {/* Flavor Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-black mb-4">Flavor</h3>
              <div className="grid grid-cols-4 gap-3">
                {flavorOptions.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor.id)}
                    className={`p-3 border rounded-lg text-center hover:border-black transition-colors ${
                      selectedFlavor === flavor.id ? 'border-black bg-gray-50' : 'border-gray-300'
                    }`}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                      <img 
                        src={flavor.image} 
                        alt={flavor.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <p className="text-xs text-black font-medium">{flavor.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-black mb-4">Quantity</h3>
              <div className="grid grid-cols-3 gap-3">
                {quantityOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedQuantity(option.id)}
                    className={`p-4 border rounded-lg text-center hover:border-black transition-colors ${
                      selectedQuantity === option.id ? 'border-black bg-gray-50' : 'border-gray-300'
                    }`}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                      <img 
                        src={option.image} 
                        alt={option.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <p className="text-sm text-black font-medium mb-1">{option.name}</p>
                    {option.discount && (
                      <p className="text-xs text-green-600 font-medium">{option.discount}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-semibold rounded-lg">
                ADD TO CART
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-gray-300 text-black py-3">
                  Buy with Shop Pay
                </Button>
                <Button variant="outline" className="border-gray-300 text-black py-3">
                  More payment options
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* When To Use Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">When To Use</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Morning Routine</h3>
                    <p className="text-gray-600 text-sm">Add to your morning coffee or smoothie for sustained energy and mental clarity throughout the day.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Pre-Workout</h3>
                    <p className="text-gray-600 text-sm">Support joint health and provide clean protein 30 minutes before your workout for optimal performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Beauty Routine</h3>
                    <p className="text-gray-600 text-sm">Daily collagen support for healthy hair, skin, and nails from the inside out.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=400" 
                alt="Collagen lifestyle"
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}