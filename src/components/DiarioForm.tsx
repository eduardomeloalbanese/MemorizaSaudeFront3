import React, { useState } from 'react';

export function DiarioForm() {
  const [registro, setRegistro] = useState({
    alimentacao: '',
    caminhada: '',
    sono: '',
    humor: '',
    dia: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistro(prevRegistro => ({ ...prevRegistro, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro do dia salvo:', registro);
    
    setRegistro({
      alimentacao: '',
      caminhada: '',
      sono: '',
      humor: '',
      dia: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
      <div className="mb-4">
        <label htmlFor="alimentacao" className="block text-gray-700 font-bold mb-2">
          Alimentação:
          <input 
            type="text" 
            id="alimentacao" 
            name="alimentacao" 
            placeholder="O que você comeu hoje?" 
            value={registro.alimentacao}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="caminhada" className="block text-gray-700 font-bold mb-2">
          Caminhada:
          <input 
            type="text" 
            id="caminhada" 
            name="caminhada" 
            placeholder="Fez alguma caminhada?" 
            value={registro.caminhada}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="sono" className="block text-gray-700 font-bold mb-2">
          Sono:
          <input 
            type="text" 
            id="sono" 
            name="sono" 
            placeholder="Como dormiu?" 
            value={registro.sono}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="humor" className="block text-gray-700 font-bold mb-2">
          Humor:
          <input 
            type="text" 
            id="humor" 
            name="humor" 
            placeholder="Como se sentiu hoje?" 
            value={registro.humor}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </label>
      </div>
      <div className="mb-6">
        <label htmlFor="dia" className="block text-gray-700 font-bold mb-2">
          Como foi o seu dia:
          <input 
            type="text" 
            id="dia" 
            name="dia" 
            placeholder="O que você fez hoje?" 
            value={registro.dia}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </label>
      </div>

      <button type="submit" className="w-full bg-[#7FAF95] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-200">
        Salvar Registro
      </button>
    </form>
  );
}