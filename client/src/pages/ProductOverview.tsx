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
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-500 mb-2 uppercase tracking-wide">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium text-black w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-base font-semibold rounded-lg flex items-center space-x-2 transition-colors duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V6H4C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7ZM9 8H11V17H9V8ZM13 8H15V17H13V8Z" fill="currentColor"/>
                </svg>
                <span>Add to Cart</span>
              </Button>
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