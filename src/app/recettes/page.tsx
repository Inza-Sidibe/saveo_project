'use client';
import { useState } from 'react';


interface Ingredient {
  name: string;
  quantity: number;
}

function page() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: 'Tomate', quantity: 1 },
    { name: 'Riz', quantity: 3 },
    { name: 'Salade', quantity: 3 },
    { name: 'Steak', quantity: 2 },
    { name: 'Carotte', quantity: 3 }
  ]);
  const [newIngredient, setNewIngredient] = useState({ name: '', quantity: 1 });
  const [steps, setSteps] = useState<string[]>([]);
  const [newStep, setNewStep] = useState('');

  const addIngredient = () => {
    if (newIngredient.name) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient({ name: '', quantity: 1 });
    }
  };

  const addStep = () => {
    if (newStep) {
      setSteps([...steps, newStep]);
      setNewStep('');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#faf6f1]">
      {/* Sidebar */}
      
    

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex gap-8 mb-8">
            {/* Image Upload */}
            <div className="w-32 h-32 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-gray-200 rounded-full mb-2"></div>
                <span className="text-sm text-gray-500">Ajouter une photo</span>
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Ajouter un titre"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-xl font-bold mb-2 p-2 rounded border border-gray-200"
              />
              <textarea
                placeholder="Ajouter une description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-24 p-2 rounded border border-gray-200"
              />
            </div>
          </div>

          {/* Recipe Content */}
          <div className="flex gap-8">
            {/* Ingredients */}
            <div className="flex-1">
              <div className="bg-[#C84C21] rounded-lg p-6">
                <h2 className="text-white text-xl mb-4">Ingrédients</h2>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <label htmlFor="portion-select" className="sr-only">Nombre de portions</label>
                  <select id="portion-select" className="w-full mb-4 p-2 border rounded">
                    <option>Nombre de portions</option>
                  </select>
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between mb-2">
                      <span>{ingredient.name}</span>
                      <span>{ingredient.quantity}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={addIngredient}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C84C21] font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Steps */}
            <div className="flex-1">
              <div className="bg-[#C84C21] rounded-lg p-6">
                <h2 className="text-white text-xl mb-4">Étapes de préparation</h2>
                <div className="space-y-2">
                  {steps.map((step, index) => (
                    <div key={index} className="bg-white rounded p-3">
                      {step}
                    </div>
                  ))}
                </div>
                <button
                  onClick={addStep}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#C84C21] font-bold mt-4"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
