import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Commande = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Catégories</h2>
          <div className="grid grid-cols-3 gap-4">
            {['Entrées', 'Plats', 'Desserts', 'Boissons', 'Accompagnements'].map((category) => (
              <button
                key={category}
                className="bg-white p-4 rounded-lg shadow text-center hover:bg-orange-50"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">Produit {item}</h3>
                <p className="text-gray-600">15.00 €</p>
                <button className="mt-2 bg-orange-600 text-white px-3 py-1 rounded-md w-full">
                  Ajouter
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Panier</h3>
            <ShoppingCart size={24} />
          </div>
          
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">Produit {item}</p>
                  <p className="text-sm text-gray-600">Quantité: 1</p>
                </div>
                <div className="text-right">
                  <p>15.00 €</p>
                  <button className="text-red-600 text-sm">Supprimer</button>
                </div>
              </div>
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>30.00 €</span>
              </div>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md w-full">
                Commander
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commande;