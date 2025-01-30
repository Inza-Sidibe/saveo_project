import React from 'react';
import { Check, X } from 'lucide-react';

const Home = () => {
  const steps = [
    { text: 'Complétez votre profil', completed: true },
    { text: 'Ajouter des ingrédients', completed: false },
    { text: 'Créer une recette', completed: false },
  ];

  const stockItems = [
    { product: 'PRODUIT', date: 'DATE EXPIRATION', stock: 4, inStock: true },
    { product: 'PRODUIT', date: 'DATE EXPIRATION', stock: 2, inStock: true },
    { product: 'PRODUIT', date: 'DATE EXPIRATION', stock: 6, inStock: true },
  ];

  const menuItems = {
    entree: ['Salade piémontaise', 'Salade de chèvre chaud et fromage d\'Isère'],
    plat: ['Filets de perche', 'Gratin de légumes au fromage'],
    dessert: ['Mousse au chocolat', 'Fruits'],
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Étapes restantes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-[#2F4F4F] text-xl font-medium mb-4">Étapes restantes</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.completed ? 'bg-[#2F4F4F]' : 'bg-gray-300'}`}>
                  {step.completed && <Check size={16} className="text-white" />}
                </div>
                <span className="text-[#2F4F4F]">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stock */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#2F4F4F] text-xl font-medium">Stock</h2>
            <div className="space-x-2">
              <button className="bg-[#2F4F4F] text-white px-4 py-2 rounded">Cette Semaine</button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded">Ce mois ci</button>
            </div>
          </div>
          <div className="space-y-2">
            {stockItems.map((item, index) => (
              <div key={index} className="grid grid-cols-5 items-center bg-gray-50 p-2 rounded">
                <span>{item.product}</span>
                <span>{item.date}</span>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-500">◀</button>
                  <span>{item.stock}</span>
                  <button className="text-gray-500">▶</button>
                </div>
                <span className={`px-2 py-1 rounded text-center ${item.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {item.inStock ? 'EN STOCK' : 'RUPTURE'}
                </span>
                <button className="justify-self-end">
                  <X className="text-red-500" size={20} />
                </button>
              </div>
            ))}
            <button className="w-full bg-orange-600 text-white py-2 rounded mt-4">
              VOIR TOUT
            </button>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-[#2F4F4F] text-xl font-medium mb-4">Menu</h2>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="date"
            className="border rounded px-3 py-2"
            defaultValue="2024-01-20"
          />
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-orange-600"></div>
            <div className="w-6 h-6 bg-[#2F4F4F]"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 bg-[#f5f5f4] p-6 rounded-lg">
          <div>
            <h3 className="font-medium mb-3">Entrée</h3>
            <ul className="list-disc list-inside space-y-2">
              {menuItems.entree.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Plat</h3>
            <ul className="list-disc list-inside space-y-2">
              {menuItems.plat.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Dessert</h3>
            <ul className="list-disc list-inside space-y-2">
              {menuItems.dessert.map((item, index) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;