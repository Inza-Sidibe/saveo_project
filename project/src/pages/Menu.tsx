import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface ExpandedItems {
  [key: string]: boolean; // Ajout de la signature d'index
}

function Menu() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({
    'Salade de légumes et fromage frais': true,
    'Salade piémontaise': false,
    'Gratin de légumes au fromage': true
  });

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const days = getDaysInMonth(selectedDate);
  // Add indices to make keys unique
  const weekDays = [
    { key: 'mon', label: 'L' },
    { key: 'tue', label: 'M' },
    { key: 'wed', label: 'M' },
    { key: 'thu', label: 'J' },
    { key: 'fri', label: 'V' },
    { key: 'sat', label: 'S' },
    { key: 'sun', label: 'D' }
  ];

  const previousMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1));
  };

  const toggleExpand = (item: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 gap-8">
        {/* Calendar Section */}
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#415D43]">Menu</h2>
            <div className="flex items-center gap-4">
              <button onClick={previousMonth} className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft size={20} />
              </button>
              <span className="text-lg font-medium">
                {selectedDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </span>
              <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {weekDays.map((day) => (
              <div key={day.key} className="text-center py-2 text-sm font-medium text-gray-600">
                {day.label}
              </div>
            ))}
            {days.map((day, index) => (
              <div
                key={`day-${index}`}
                className={`
                  aspect-square p-1 border border-gray-100 
                  ${day === selectedDate.getDate() ? 'bg-[#C4501B] text-white' : 'hover:bg-gray-50'}
                  ${!day ? 'bg-gray-50' : 'cursor-pointer'}
                `}
              >
                {day && <span className="text-sm">{day}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Menu Planning Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Entrée */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-[#415D43]">Entrée</h3>
              <button className="text-[#C4501B]">
                <Plus size={20} />
              </button>
            </div>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">• Salade printanière</li>
              <li className="text-sm text-gray-600">• Salade de légumes grillés</li>
              <li className="text-sm text-gray-600">• Velouté aux champignons</li>
            </ul>
          </div>

          {/* Plat */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-[#415D43]">Plat</h3>
              <button className="text-[#C4501B]">
                <Plus size={20} />
              </button>
            </div>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">• Filet au pesto</li>
              <li className="text-sm text-gray-600">• Poulet rôti</li>
              <li className="text-sm text-gray-600">• Saumon aux légumes</li>
            </ul>
          </div>

          {/* Dessert */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-[#415D43]">Dessert</h3>
              <button className="text-[#C4501B]">
                <Plus size={20} />
              </button>
            </div>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">• Mousse au chocolat</li>
              <li className="text-sm text-gray-600">• Fruits</li>
              <li className="text-sm text-gray-600">• Tarte aux pommes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;