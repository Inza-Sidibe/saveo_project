'use client';

import { useState } from 'react';

interface MenuItem {
  name: string;
  price: number;
  quantity: number;
}

function page() {
  const [items, setItems] = useState<MenuItem[]>([
    { name: "Pâtes", price: 48, quantity: 0 },
    { name: "Salade", price: 75, quantity: 0 },
    { name: "Tomates", price: 65, quantity: 0 },
    { name: "Riz basmati", price: 55, quantity: 0 },
    { name: "Escalope de dinde", price: 135, quantity: 0 },
    { name: "Nuggets de poulet", price: 45, quantity: 0 },
    { name: "Frites de pommes douces", price: 75, quantity: 0 },
  ]);

  const updateQuantity = (index: number, change: number) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(0, newItems[index].quantity + change);
    setItems(newItems);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="flex min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">Commandes</h2>
        
        <div className="flex gap-8">
          {/* Order Steps */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#E86843] rounded-full flex items-center justify-center text-white">1</div>
              <div className="ml-2">Commander</div>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">2</div>
              <div className="ml-2">Validation</div>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">3</div>
              <div className="ml-2">Paiement</div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Cart */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Panier</h3>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="flex-1">{item.name}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => updateQuantity(index, -1)}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(index, 1)}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                    <span className="w-16 text-right">{item.price} €</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="w-72 bg-white rounded-lg p-6 shadow-sm h-fit">
            <h3 className="text-xl font-semibold mb-4">Total</h3>
            <div className="mb-4">
              <span>{totalItems} Articles</span>
            </div>
            <div className="text-2xl font-bold text-[#E86843]">
              {totalPrice} €
            </div>
            <button className="mt-6 w-full bg-[#E86843] text-white py-2 px-4 rounded-lg hover:bg-[#d55a35] transition-colors">
              COMMANDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page