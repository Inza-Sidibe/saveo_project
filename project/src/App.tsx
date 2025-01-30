import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Steps from './components/Steps';
import Stock from './components/Stock';
import Menu from './components/Menu';
import StockPage from './pages/StockPage';
import MenuPage from './pages/MenuPage';
import RecettePage from './pages/Recette';
import Commande from './pages/Commande';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FDF5E4] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-serif text-[#415D43]">saveo</h1>
          </div>
          
          <h2 className="text-xl text-[#415D43] mb-8">Bienvenue sur Saveo</h2>
          
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="email"
                placeholder="Identifiant"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#C4501B]/20 focus:border-[#C4501B] focus:ring-2 focus:ring-[#C4501B]/20 outline-none transition"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#C4501B]/20 focus:border-[#C4501B] focus:ring-2 focus:ring-[#C4501B]/20 outline-none transition"
              />
              <button
                type="submit"
                className="w-full bg-[#C4501B] text-white py-3 rounded-lg hover:bg-[#C4501B]/90 transition duration-200"
              >
                SE CONNECTER
              </button>
            </form>
          </div>
        </div>
        
        <footer className="bg-[#415D43] text-white py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-5 gap-4 text-sm">
              <div>ACCUEIL</div>
              <div>PROPOS</div>
              <div>NOS SOLUTIONS</div>
              <div>CONTACT</div>
              <div>MENTIONS LÉGALES</div>
            </div>
            <div className="mt-6 text-center text-xs text-white/80">
              Saveo Card l'application qui vous accompagne au quotidien
              <br />
              et la carte réseau gratuite préférée dans les centres.
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#FDF5E4]">
      <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-1 p-8">
        {currentPage === 'stock' ? (
          <StockPage />
        ) : currentPage === 'menu' ? (
          <MenuPage />
        ) : currentPage === 'recettes' ? (
          <RecettePage />
        ) : currentPage === 'commandes' ? (
          <Commande />
        ) : (
          <div className="grid grid-cols-2 gap-8">
            <Steps />
            <Stock />
            <div className="col-span-2">
              <Menu />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App