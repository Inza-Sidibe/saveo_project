import React, { useState } from 'react';
import { ChevronDown, X, Plus, Calendar } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  ingredients: string[];
  allergenes: string[];
}

interface MenuSection {
  entrees: MenuItem[];
  plats: MenuItem[];
  desserts: MenuItem[];
}

export default function MenuPage() {
  const [selectedDate, setSelectedDate] = useState('2024/03/21');
  const [stockItems] = useState([
    { id: 1, name: 'Tomates', available: true },
    { id: 2, name: 'Courgettes', available: true },
    { id: 3, name: 'Aubergines', available: true },
    { id: 4, name: 'Pâtes', available: true },
    { id: 5, name: 'Fromage', available: false },
    { id: 6, name: 'Viande', available: false },
  ]);

  const [menu, setMenu] = useState<MenuSection>({
    entrees: [
      {
        id: 1,
        name: 'Salade de légumes et fromage frais',
        ingredients: ['Mâche, Persil', 'Courgette', 'Aubergine', 'Tomates cerises', 'Poivron jaune', 'Carré frais'],
        allergenes: ['Lactose']
      },
      {
        id: 2,
        name: 'Salade piémontaise',
        ingredients: [],
        allergenes: []
      }
    ],
    plats: [
      {
        id: 1,
        name: 'Gratin de légumes au fromage',
        ingredients: [],
        allergenes: []
      }
    ],
    desserts: []
  });

  const handleAddMenuItem = (section: keyof MenuSection) => {
    const newItem: MenuItem = {
      id: Math.random(),
      name: '',
      ingredients: [],
      allergenes: []
    };
    setMenu(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="pl-10 pr-4 py-2 border border-[#415D43] rounded-lg"
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#415D43]" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <MenuDropdown
            title="Entrée"
            items={menu.entrees}
            onAdd={() => handleAddMenuItem('entrees')}
          />
          
          <MenuDropdown
            title="Plat"
            items={menu.plats}
            onAdd={() => handleAddMenuItem('plats')}
          />
          
          <MenuDropdown
            title="Dessert"
            items={menu.desserts}
            onAdd={() => handleAddMenuItem('desserts')}
          />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#415D43] mb-6">Récapitulatif</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Produits en stock :</h3>
              <div className="space-y-2">
                {stockItems.filter(item => item.available).map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <X size={16} className="text-[#C4501B] cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Produits manquants :</h3>
              <div className="space-y-2">
                {stockItems.filter(item => !item.available).map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <button className="text-sm text-[#C4501B]">Ajouter au panier</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="mt-6 w-full bg-[#C4501B] text-white py-3 rounded-lg hover:bg-[#C4501B]/90 transition">
            AJOUTER AU PANIER
          </button>
        </div>
      </div>
    </div>
  );
}

interface MenuDropdownProps {
  title: string;
  items: MenuItem[];
  onAdd: () => void;
}

function MenuDropdown({ title, items, onAdd }: MenuDropdownProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-lg font-medium text-[#415D43]">{title}</h2>
        <ChevronDown
          size={20}
          className={`transform transition-transform ${expanded ? 'rotate-180' : ''}`}
        />
      </div>

      {expanded && (
        <div className="p-4 border-t">
          {items.map((item) => (
            <div key={item.id} className="mb-4 last:mb-0">
              <input
                type="text"
                value={item.name}
                placeholder="Nom du plat"
                className="w-full p-2 border border-gray-200 rounded mb-2"
              />
              
              <div className="space-y-2">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Ingrédients</label>
                  <textarea
                    value={item.ingredients.join(', ')}
                    placeholder="Liste des ingrédients"
                    className="w-full p-2 border border-gray-200 rounded h-20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Allergènes</label>
                  <input
                    type="text"
                    value={item.allergenes.join(', ')}
                    placeholder="Liste des allergènes"
                    className="w-full p-2 border border-gray-200 rounded"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={onAdd}
            className="mt-4 flex items-center text-[#C4501B] hover:text-[#C4501B]/80"
          >
            <Plus size={20} className="mr-1" />
            Ajouter
          </button>
        </div>
      )}
    </div>
  );
}