import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Search, MapPin, User, ShoppingCart } from "lucide-react";

export function ProductOverview() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState('vanilla');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  // Product images from the Perfect Keto reference
  const productImages = [
    'https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03.png?v=1733936162&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/us_v_them_collagen.jpg?v=1752762775&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/PK_Collagen-Peptides_20serv-Vanilla-SFP_2024-07-08_30777c53-35bb-4478-812f-c9195f374b5e.png?v=1752762775&width=880'
  ];

  const thumbnailImages = [
    'https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03_300x300.png?v=1733936162',
    'https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost_300x300.png?v=1752762775',
    'https://shop.perfectketo.com/cdn/shop/files/us_v_them_collagen_300x300.jpg?v=1752762775',
    'https://shop.perfectketo.com/cdn/shop/files/PK_Collagen-Peptides_20serv-Vanilla-SFP_2024-07-08_30777c53-35bb-4478-812f-c9195f374b5e_300x300.png?v=1752762775'
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
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Product Images Section */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center p-8">
              <img 
                src={productImages[selectedImageIndex]}
                alt="Grass-Fed Collagen Peptides"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4 justify-start">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === index ? 'border-gray-600' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain bg-white p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-8">
            {/* Product Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                Grass-Fed Collagen Peptides & MCT Brain Boost
              </h1>

              {/* Product Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Get the protein your body needs in a delicious, low-carb supplement formulated to minimize impact on your blood sugar levels. Clinical studies have shown collagen supports hair & nail, skin, joint and gut health. Our grass-fed collagen peptides (formerly Keto Collagen) also include MCTs (medium chain triglycerides) to help support cognition and mental clarity.
              </p>
            </div>

            {/* Reviews */}
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 text-lg font-medium">5951 reviews</span>
            </div>

            {/* Current Selection */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-900">Current Selection:</span> Vanilla | 1 Tub Up to 10% off
              </p>
            </div>

            {/* Flavor Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Flavor</h3>
              <div className="grid grid-cols-4 gap-4">
                {flavorOptions.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor.id)}
                    className={`p-4 rounded-xl border-2 text-center hover:border-gray-400 transition-colors ${
                      selectedFlavor === flavor.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <img 
                        src={flavor.image} 
                        alt={flavor.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-800 font-medium">{flavor.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center justify-between pt-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-500 mb-4 uppercase tracking-wide">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-xl font-bold"
                  >
                    −
                  </button>
                  <span className="text-2xl font-medium text-black w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 text-lg font-semibold rounded-xl flex items-center space-x-3 transition-colors duration-200 shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span>Add to Cart</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}