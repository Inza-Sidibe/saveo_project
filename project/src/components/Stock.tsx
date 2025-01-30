import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Stock() {
  const stockItems = [
    { product: 'Tomates', date: '2024-03-25', quantity: 5, status: 'EN STOCK' },
    { product: 'Pâtes', date: '2024-04-15', quantity: 12, status: 'EN STOCK' },
    { product: 'Riz', date: '2024-05-01', quantity: 8, status: 'EN LIVRAISON' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-[#415D43] font-semibold">Stock</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-[#C4501B] text-white rounded">Prochain Menu</button>
          <button className="px-4 py-2 bg-[#C4501B] text-white rounded">Cette Semaine</button>
          <button className="px-4 py-2 bg-[#C4501B] text-white rounded">Ce mois ci</button>
        </div>
      </div>
      
      <div className="space-y-2">
        {stockItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
            <div className="w-1/4">{item.product}</div>
            <div className="w-1/4">{item.date}</div>
            <div className="w-1/4 flex items-center space-x-2">
              <ChevronLeft size={20} />
              <span>{item.quantity}</span>
              <ChevronRight size={20} />
            </div>
            <div className="w-1/4 flex items-center justify-between">
              <span className={`px-3 py-1 rounded ${
                item.status === 'EN STOCK' ? 'bg-[#415D43] text-white' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.status}
              </span>
              <button className="text-red-500">
                <X size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 text-[#C4501B] font-medium">VOIR TOUT</button>
    </div>
  );
}