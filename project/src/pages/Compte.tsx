import React from 'react';

const Compte = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Mon Compte</h2>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          {/* Table header */}
          <div className="grid grid-cols-7 gap-4 border-b pb-2 font-medium">
            <div>Date</div>
            <div>Heure</div>
            <div>Description</div>
            <div>Débit</div>
            <div>Crédit</div>
            <div>Solde</div>
            <div>Actions</div>
          </div>

          {/* Table rows */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="grid grid-cols-7 gap-4 py-2 border-b">
              <div>01/03/2024</div>
              <div>14:30</div>
              <div>Transaction {item}</div>
              <div>-</div>
              <div>100.00 €</div>
              <div>500.00 €</div>
              <div>
                <button className="bg-orange-600 text-white px-3 py-1 rounded-md text-sm">
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md">
            Exporter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compte;