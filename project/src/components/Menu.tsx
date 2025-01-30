import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface DayMenu {
  date: string;
  hasMenu: boolean;
  menu?: {
    entrees: string[];
    plats: string[];
    desserts: string[];
  };
}

export default function Menu() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekMenus] = useState<DayMenu[]>([
    {
      date: '2024-03-18',
      hasMenu: true,
      menu: {
        entrees: ['Salade piémontaise', 'Salade de légumes'],
        plats: ['Pâtes au pesto', 'Gratin de légumes au fromage'],
        desserts: ['Mousse au chocolat', 'Fruits']
      }
    },
    { date: '2024-03-19', hasMenu: false },
    { date: '2024-03-20', hasMenu: true },
    { date: '2024-03-21', hasMenu: false },
    { date: '2024-03-22', hasMenu: true }
  ]);

  const weekDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-[#415D43] font-semibold">Menu</h2>
        <div className="relative">
          <input
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="pl-10 pr-4 py-2 border border-[#415D43] rounded-lg"
          />
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#415D43]" size={18} />
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="w-48">
          <div className="text-sm text-gray-600 mb-2">
            {selectedDate.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })}
          </div>
          <div className="grid grid-cols-5 gap-2">
            {weekMenus.map((day, index) => (
              <div
                key={index}
                className={`aspect-square rounded flex items-center justify-center ${
                  day.hasMenu ? 'bg-[#415D43] text-white' : 'bg-red-100 text-red-800'
                }`}
              >
                {weekDays[index][0]}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {weekMenus[0].hasMenu && weekMenus[0].menu ? (
            <div className="grid grid-cols-3 gap-6">
              <MenuSection title="Entrée" items={weekMenus[0].menu.entrees} />
              <MenuSection title="Plat" items={weekMenus[0].menu.plats} />
              <MenuSection title="Dessert" items={weekMenus[0].menu.desserts} />
            </div>
          ) : (
            <button className="w-full py-3 bg-[#C4501B] text-white rounded-lg hover:bg-[#C4501B]/90 transition">
              Créer menu
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-gray-50 p-4 rounded">
      <h3 className="font-medium mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-600">• {item}</li>
        ))}
      </ul>
    </div>
  );
}