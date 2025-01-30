import React from 'react';
import { UserCircle, Plus, ChefHat } from 'lucide-react';

export default function Steps() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl text-[#415D43] font-semibold mb-6">Étapes restantes</h2>
      <div className="space-y-8">
        <Step
          icon={<UserCircle className="text-[#415D43]" size={24} />}
          label="Complétez votre profil"
          active
        />
        <Step
          icon={<Plus className="text-[#415D43]" size={24} />}
          label="Ajouter des ingrédients"
        />
        <Step
          icon={<ChefHat className="text-[#415D43]" size={24} />}
          label="Créer une recette"
        />
      </div>
    </div>
  );
}

function Step({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className="flex items-center space-x-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        active ? 'bg-[#415D43]/10' : 'bg-gray-100'
      }`}>
        {icon}
      </div>
      <span className="text-gray-700">{label}</span>
    </div>
  );
}