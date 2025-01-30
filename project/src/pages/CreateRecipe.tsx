import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

function CreateRecipe() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
  const [steps, setSteps] = useState(['']);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 gap-8">
        {/* Image Upload and Title Section */}
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <Plus className="text-gray-400" size={32} />
            </div>
          </div>
          <input
            type="text"
            placeholder="Ajouter un titre"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <textarea
            placeholder="Ajouter une description"
            className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <div className="bg-[#C4501B] rounded-lg p-6 shadow text-white">
            <h2 className="text-xl font-semibold mb-4">Ingrédients</h2>
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ingrédient"
                    className="flex-1 p-2 rounded bg-white text-gray-800"
                  />
                  <input
                    type="text"
                    placeholder="Quantité"
                    className="w-24 p-2 rounded bg-white text-gray-800"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={addIngredient}
              className="mt-4 bg-white text-[#C4501B] p-2 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Steps Section */}
          <div className="bg-[#C4501B] rounded-lg p-6 shadow text-white">
            <h2 className="text-xl font-semibold mb-4">Étapes de préparation</h2>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-2">
                  <span className="w-6 text-center">{index + 1}.</span>
                  <input
                    type="text"
                    placeholder="Description de l'étape"
                    className="flex-1 p-2 rounded bg-white text-gray-800"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={addStep}
              className="mt-4 bg-white text-[#C4501B] p-2 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
          >
            Annuler
          </button>
          <button
            className="px-6 py-2 rounded bg-[#C4501B] text-white hover:bg-[#B34518] transition-colors"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateRecipe