import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const FLAVORS = [
  { 
    id: 'vanilla', 
    name: 'Vanilla',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121',
    color: '#F5E6D3'
  },
  { 
    id: 'mint-chocolate', 
    name: 'Mint Chocolate',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38.png?v=1724662815',
    color: '#A8E6CF'
  },
  { 
    id: 'salted-caramel', 
    name: 'Salted Caramel',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_3.png?v=1724662914',
    color: '#D4A574'
  },
  { 
    id: 'cinnamon-toast', 
    name: 'Cinnamon Toast',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_4.png?v=1724662945',
    color: '#C8A882'
  },
  { 
    id: 'strawberry', 
    name: 'Strawberry',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_5.png?v=1724662971',
    color: '#FFB6C1'
  },
  { 
    id: 'peanut-butter', 
    name: 'Peanut Butter',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_6.png?v=1724663000',
    color: '#D2B48C'
  },
  { 
    id: 'chocolate', 
    name: 'Chocolate',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_1.png?v=1724662855',
    color: '#8B4513'
  },
  { 
    id: 'unflavored', 
    name: 'Unflavored',
    image: 'https://shop.perfectketo.com/cdn/shop/files/Rectangle_38_7.png?v=1724663033',
    color: '#F5F5F5'
  }
];

const QUANTITY_OPTIONS = [
  { 
    id: '1-tub', 
    label: '1 Tub',
    price: 43.99,
    originalPrice: null,
    discount: null
  },
  { 
    id: '2-tubs', 
    label: '2 Tubs',
    price: 75.99,
    originalPrice: 87.98,
    discount: 'Up to 15% off'
  },
  { 
    id: '3-tubs', 
    label: '3 Tubs',
    price: 105.99,
    originalPrice: 131.97,
    discount: 'Up to 20% off'
  }
];

export function ProductOverview() {
  const [selectedFlavor, setSelectedFlavor] = useState('vanilla');
  const [selectedQuantity, setSelectedQuantity] = useState('1-tub');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedFlavorData = FLAVORS.find(f => f.id === selectedFlavor)!;
  const selectedQuantityData = QUANTITY_OPTIONS.find(q => q.id === selectedQuantity)!;

  // Product images for the main image gallery
  const productImages = [
    'https://shop.perfectketo.com/cdn/shop/files/PK_CollagenPeptides-RENDER-Vanilla-Tub_24-07-03.png?v=1733936162&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/collagen-peptides-vanilla-mct-boost.png?v=1752762775&width=880',
    'https://shop.perfectketo.com/cdn/shop/files/PK_Collagen-Peptides_20serv-Vanilla-SFP_2024-07-08_30777c53-35bb-4478-812f-c9195f374b5e.png?v=1752762775&width=880'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Free Shipping on All Orders $75+ 
        <Button variant="ghost" className="text-white ml-4 text-sm font-semibold bg-white text-black px-4 py-1 rounded hover:bg-gray-100">
          SHOP NOW
        </Button>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Product Images Section */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center p-8">
              <img 
                src={productImages[selectedImageIndex]}
                alt="Grass-Fed Collagen Peptides"
                className="w-full h-full object-contain max-w-md"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg border-2 overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === index ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-8">
            {/* Product Title and Description */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Grass-Fed Collagen Peptides & MCT Brain Boost
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get the protein your body needs in a delicious, low-carb supplement formulated to minimize impact 
                on your blood sugar levels. Clinical studies have shown collagen supports hair & nail, skin, joint 
                and gut health. Our grass-fed collagen peptides (formerly Keto Collagen) also include MCTs (medium 
                chain triglycerides) to help support cognition and mental clarity.
              </p>
            </div>

            {/* Reviews */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-gray-600">5951 reviews</span>
            </div>

            {/* Current Selection Display */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Current Selection:</p>
              <p className="font-semibold text-gray-900">
                {selectedFlavorData.name} | {selectedQuantityData.label}
              </p>
            </div>

            {/* Flavor Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Flavor</h3>
              <div className="grid grid-cols-4 gap-3">
                {FLAVORS.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 text-center ${
                      selectedFlavor === flavor.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div 
                      className="w-12 h-12 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: flavor.color }}
                    />
                    <p className="text-xs font-medium text-gray-700">{flavor.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity</h3>
              <div className="space-y-3">
                {QUANTITY_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedQuantity(option.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      selectedQuantity === option.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900">{option.label}</p>
                        {option.discount && (
                          <p className="text-sm text-green-600 font-medium">{option.discount}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${option.price}</p>
                        {option.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">${option.originalPrice}</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-xl transition-colors duration-200">
                Add to Cart - ${selectedQuantityData.price}
              </Button>
              
              <p className="text-center text-sm text-gray-600">
                Free U.S. shipping for orders $75+, and a risk-free{' '}
                <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                  quality guarantee
                </a>
              </p>
            </div>

            {/* Product Highlights */}
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Made to:</span>
                    <span className="italic">Maintain joint health, promote hair, skin and nail growth, help muscle recovery, support digestion, increase focus</span>
                  </li>
                  <li>• Made with grass-fed collagen and added MCTs for focus and satiation</li>
                  <li>• Dairy free</li>
                  <li>• No artificial sweeteners</li>
                </ul>
              </CardContent>
            </Card>

            {/* Clinicians' Choice Badge */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Clinicians' Choice
                </div>
                <div>
                  <p className="font-semibold text-gray-900">124 clinicians share this without compensation.</p>
                  <p className="text-sm text-gray-600 mt-1">
                    124 clinicians share this on FrontrowMD without compensation.
                  </p>
                  <Button variant="outline" className="mt-3 text-sm">
                    View clinicians & learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}