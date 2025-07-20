import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star, Search, MapPin, User, ShoppingCart } from "lucide-react";

export function ProductOverview() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState('vanilla');

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
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="aspect-square bg-white flex items-center justify-center">
              <img 
                src={productImages[selectedImageIndex]}
                alt="Grass-Fed Collagen Peptides"
                className="w-full h-full object-contain max-w-md"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 justify-start">
              {thumbnailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 border-2 overflow-hidden transition-all duration-200 ${
                    selectedImageIndex === index ? 'border-black' : 'border-gray-200 hover:border-gray-300'
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
            <h1 className="text-3xl font-bold text-black leading-tight">
              Grass-Fed Collagen Peptides & MCT Brain Boost
            </h1>

            {/* Product Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              Get the protein your body needs in a delicious, low-carb supplement formulated to minimize impact 
              on your blood sugar levels. Clinical studies have shown collagen supports hair & nail, skin, joint 
              and gut health. Our grass-fed collagen peptides (formerly Keto Collagen) also include MCTs (medium 
              chain triglycerides) to help support cognition and mental clarity.
            </p>

            

            

            {/* Current Selection */}
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-600">
                Current Selection: <span className="font-medium text-black">Vanilla | 1 Tub up to 10% off</span>
              </p>
            </div>

            

            {/* Quantity Selection */}
            <div>
              <h3 className="text-base font-semibold text-black mb-3">Quantity</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded hover:border-gray-300 cursor-pointer">
                  <input type="radio" name="quantity" value="1-tub" defaultChecked className="text-black" />
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121" 
                        alt="1 Tub"
                        className="w-12 h-12 object-contain"
                      />
                      <span className="font-medium text-black">1 Tub</span>
                    </div>
                    <span className="font-bold text-black">$43.99</span>
                  </div>
                </label>
                
                <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded hover:border-gray-300 cursor-pointer">
                  <input type="radio" name="quantity" value="2-tubs" className="text-black" />
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121" 
                        alt="2 Tubs"
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <span className="font-medium text-black">2 Tubs</span>
                        <p className="text-sm text-green-600 font-medium">Up to 15% off</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-black">$75.99</span>
                      <p className="text-sm text-gray-500 line-through">$87.98</p>
                    </div>
                  </div>
                </label>
                
                <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded hover:border-gray-300 cursor-pointer">
                  <input type="radio" name="quantity" value="3-tubs" className="text-black" />
                  <div className="flex-1 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://shop.perfectketo.com/cdn/shop/files/Vanilla.png?v=1724740121" 
                        alt="3 Tubs"
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <span className="font-medium text-black">3 Tubs</span>
                        <p className="text-sm text-green-600 font-medium">Up to 20% off</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-black">$105.99</span>
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
              <h3 className="text-base font-semibold text-black mb-3">Highlights</h3>
              <ul className="space-y-2 text-sm text-gray-700">
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

        

        {/* Move Better, Feel Better Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black">Move Better, Feel Better</h2>
        </div>
      </div>
    </div>
  );
}