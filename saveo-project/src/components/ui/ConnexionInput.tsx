'use client'
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Tous les champs doivent être remplis");
      return;
    }

    // Ici, tu peux ajouter la logique pour soumettre les données, par exemple une API pour l'authentification.
    console.log("Formulaire soumis avec : ", { email, password });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="w-full max-w-sm py-6 px-8 bg-[#C4501B] rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-[#FDF5E4] mb-6">Se connecter</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-[#FDF5E4]">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#415D43]"
              placeholder="Identifiant"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-[#FDF5E4]">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#415D43]"
              placeholder="Mot de passe"
            />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-[#D78C69] text-white font-semibold rounded-lg shadow-md hover:bg-[#415D43] focus:outline-none">
            Se connecter
          </button>
        </form>
        
        {/* <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Pas encore de compte ? <a href="#" className="text-indigo-600">Inscris-toi</a></p>
        </div> */}
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    </div>
  );
};

export default LoginForm;