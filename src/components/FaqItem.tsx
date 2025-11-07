import { useState } from 'react';
interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  // Hook useState para controlar se o item está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Função para inverter o estado
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Aplicamos os estilos de card coesos (rounded-xl, shadow-lg)
    <div className="bg-white rounded-xl shadow-lg mb-4 overflow-hidden">
      
      {/* O cabeçalho da pergunta agora é um botão */}
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
      >
        <h3 className="text-xl font-bold text-[#3D3D3D]">{question}</h3>
        
        {/* Ícone de seta que gira com base no estado 'isOpen' */}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="#3D3D3D" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {/* O conteúdo da resposta só é renderizado se 'isOpen' for verdadeiro */}
      {isOpen && (
        <div className="p-6 pt-0 text-gray-700 leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}