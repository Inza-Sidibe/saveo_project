import React from 'react';
import { Home, Package, Menu, ShoppingCart, Book, User, Settings } from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  return (
    <div className="w-48 bg-[#415D43] text-white h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-serif">saveo</h1>
      </div>
      <nav className="flex-1">
        <SidebarLink
          icon={<Home size={20} />}
          label="ACCUEIL"
          active={currentPage === 'home'}
          onClick={() => onNavigate('home')}
        />
        <SidebarLink
          icon={<Package size={20} />}
          label="STOCK"
          active={currentPage === 'stock'}
          onClick={() => onNavigate('stock')}
        />
        <SidebarLink
          icon={<Menu size={20} />}
          label="MENU"
          active={currentPage === 'menu'}
          onClick={() => onNavigate('menu')}
        />
        <SidebarLink
          icon={<ShoppingCart size={20} />}
          label="COMMANDES"
          active={currentPage === 'commandes'}
          onClick={() => onNavigate('commandes')}
        />
        <SidebarLink
          icon={<Book size={20} />}
          label="RECETTES"
          active={currentPage === 'recettes'}
          onClick={() => onNavigate('recettes')}
        />

        <SidebarLink
          icon={<User size={20} />}
          label="COMPTE"
          active={currentPage === 'compte'}
          onClick={() => onNavigate('compte')}
        />
        <SidebarLink
          icon={<Settings size={20} />}
          label="PARAMÈTRES"
          active={currentPage === 'parametres'}
          onClick={() => onNavigate('parametres')}
        />
      </nav>
    </div>
  );
}

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarLink({ icon, label, active = false, onClick }: SidebarLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-6 py-3 text-sm text-left ${
        active ? 'bg-[#FDF5E4] text-[#415D43]' : 'hover:bg-[#415D43]/90'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}