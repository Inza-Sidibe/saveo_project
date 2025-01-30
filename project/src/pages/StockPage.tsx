import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, X, Plus } from 'lucide-react';

interface StockItem {
  id: number;
  produit: string;
  dateArrive: string;
  datePeremption: string;
  stock: number;
  provenance: string;
  etat: 'EN STOCK' | 'EN COURS';
}

export default function StockPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stockItems, setStockItems] = useState<StockItem[]>([
    { id: 1, produit: 'Tomates', dateArrive: '2024-03-20', datePeremption: '2024-03-25', stock: 5, provenance: 'Local', etat: 'EN COURS' },
    { id: 2, produit: 'Pâtes', dateArrive: '2024-03-15', datePeremption: '2024-04-15', stock: 12, provenance: 'National', etat: 'EN STOCK' },
    { id: 3, produit: 'Riz', dateArrive: '2024-03-18', datePeremption: '2024-05-01', stock: 8, provenance: 'International', etat: 'EN COURS' },
  ]);

  const handleDelete = (id: number) => {
    setStockItems(items => items.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: number, increment: boolean) => {
    setStockItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, stock: increment ? item.stock + 1 : Math.max(0, item.stock - 1) }
          : item
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-[#415D43]">Stock actuel</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#415D43]/20"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <button className="px-4 py-2 text-sm bg-[#C4501B] text-white rounded-lg hover:bg-[#C4501B]/90 transition">
            CONNECTEZ-NOUS
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="grid grid-cols-6 bg-[#415D43] text-white text-sm font-medium">
          <div className="p-3">PRODUIT</div>
          <div className="p-3">DATE ARRIVÉ</div>
          <div className="p-3">DATE PÉREMPTION</div>
          <div className="p-3">STOCK</div>
          <div className="p-3">PROVENANCE</div>
          <div className="p-3">ÉTAT</div>
        </div>

        <div className="divide-y divide-gray-200">
          {stockItems.map((item) => (
            <div key={item.id} className="grid grid-cols-6 items-center bg-white hover:bg-gray-50">
              <div className="p-3">{item.produit}</div>
              <div className="p-3">{item.dateArrive}</div>
              <div className="p-3">{item.datePeremption}</div>
              <div className="p-3 flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft size={20} />
                </button>
                <span>{item.stock}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, true)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="p-3">{item.provenance}</div>
              <div className="p-3 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.etat === 'EN STOCK'
                      ? 'bg-[#415D43] text-white'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {item.etat}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:bg-red-50 p-1 rounded"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-6 flex items-center justify-center w-full py-3 bg-[#C4501B] text-white rounded-lg hover:bg-[#C4501B]/90 transition">
        <Plus size={20} className="mr-2" />
        AJOUTER
      </button>
    </div>
  );
}