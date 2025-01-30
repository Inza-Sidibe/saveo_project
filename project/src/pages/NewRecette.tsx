import React, { useState } from 'react';
import { Plus, Image } from 'lucide-react';

const Recettes = () => {
  const [ingredients, setIngredients] = useState([
    { name: 'Tomate', quantity: 1 },
    { name: 'Riz', quantity: 3 },
    { name: 'Salade', quantity: 3 },
    { name: 'Dinde', quantity: 3 },
    { name: 'Carotte', quantity: 3 },
  ]);

  const [steps, setSteps] = useState<string[]>(['']);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [portions, setPortions] = useState('Nombre de portion');

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: 1 }]);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const updateIngredient = (index: number, field: 'name' | 'quantity', value: string | number) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      [field]: value
    };
    setIngredients(newIngredients);
  };

  return (
    <div className="p-6 bg-[#faf6f1]">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* En-tête et Photo */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 bg-white rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-orange-600">
              <Image className="w-16 h-16 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Ajouter une photo</span>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ajouter un titre"
                className="w-full text-2xl font-medium bg-transparent border-b border-gray-300 focus:border-orange-600 focus:outline-none pb-2"
              />
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ajouter une description"
                className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:border-orange-600 focus:outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Ingrédients et Étapes */}
        <div className="grid grid-cols-2 gap-8">
          {/* Ingrédients */}
          <div className="bg-orange-600 rounded-lg p-6">
            <h3 className="text-xl font-medium text-white mb-4">Ingrédients</h3>
            <select 
              value={portions}
              onChange={(e) => setPortions(e.target.value)}
              className="w-full bg-white rounded p-2 mb-4"
            >
              <option>Nombre de portion</option>
              <option>1</option>
              <option>2</option>
              <option>4</option>
              <option>6</option>
            </select>
            <div className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) => updateIngredient(index, 'name', e.target.value)}
                    className="flex-grow bg-white rounded p-2"
                    placeholder="Ingrédient"
                  />
                  <input
                    type="number"
                    value={ingredient.quantity}
                    onChange={(e) => updateIngredient(index, 'quantity', parseInt(e.target.value) || 1)}
                    className="w-20 bg-white rounded p-2"
                    min="1"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={addIngredient}
              className="mt-4 w-full flex items-center justify-center bg-white/20 text-white rounded-full p-2 hover:bg-white/30"
            >
              <Plus size={24} />
            </button>
          </div>

          {/* Étapes de préparation */}
          <div className="bg-orange-600 rounded-lg p-6">
            <h3 className="text-xl font-medium text-white mb-4">Étapes de préparation</h3>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <input
                  key={index}
                  type="text"
                  value={step}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[index] = e.target.value;
                    setSteps(newSteps);
                  }}
                  className="w-full bg-white rounded p-2"
                  placeholder={`Étape ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={addStep}
              className="mt-4 w-full flex items-center justify-center bg-white/20 text-white rounded-full p-2 hover:bg-white/30"
            >
              <Plus size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recettes;