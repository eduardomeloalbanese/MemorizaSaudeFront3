import React, { useState } from 'react';

export function Contato() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Mensagem enviada com sucesso!');
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
      <p className="text-lg text-gray-600 mb-8">Preencha o formulário abaixo e fale conosco.</p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-bold mb-2">Nome:</label>
          <input type="text" id="nome" name="nome" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="telefone" className="block text-gray-700 font-bold mb-2">Número de Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Endereço de E-mail:</label>
          <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="endereco" className="block text-gray-700 font-bold mb-2">Endereço Físico:</label>
          <input type="text" id="endereco" name="endereco" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="redes" className="block text-gray-700 font-bold mb-2">Redes Sociais:</label>
          <input type="text" id="redes" name="redes" placeholder="Ex: @usuario - Instagram, LinkedIn..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-6">
          <label htmlFor="infoAdicional" className="block text-gray-700 font-bold mb-2">Informações Adicionais:</label>
          <textarea id="infoAdicional" name="infoAdicional" rows={4} placeholder="Ex: Cargo, empresa, interesses..." className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <button type="submit" className="w-full bg-[#7FAF95] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-200">
          Enviar
        </button>
        
        {formStatus && (
          <div className="mt-4 text-center text-green-600 font-semibold">
            {formStatus}
          </div>
        )}
      </form>
    </div>
  );
}