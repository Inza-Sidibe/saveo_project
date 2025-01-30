import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

function Recette() {
  const navigate = useNavigate();
  
  const recipes = [
    {
      id: 1,
      title: 'Gratin de légumes au fromage',
      image: 'https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'Spaghetti bolognaise avec des légumes',
      image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Blanquette de dinde et riz basmati',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      title: 'Pâtes au pesto',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-[#415D43]">Recettes</h1>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher"
              className="pl-10 pr-4 py-2 rounded border border-gray-300 bg-white w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button
            onClick={() => navigate('/create')}
            className="bg-[#C4501B] text-white px-4 py-2 rounded hover:bg-[#B34518] transition-colors"
          >
            + AJOUTER
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-[#415D43]">{recipe.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recette