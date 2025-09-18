import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className="bg-[#f9f9f9] p-4 sm:p-8 flex justify-between items-center border-b border-[#ddd] relative">
      {/* Botão do menu mobile */}
      <div className="md:hidden flex flex-col cursor-pointer" onClick={toggleNav}>
        <div className="bar w-[25px] h-[3px] bg-[#333] my-1 transition-all duration-400"></div>
        <div className="bar w-[25px] h-[3px] bg-[#333] my-1 transition-all duration-400"></div>
        <div className="bar w-[25px] h-[3px] bg-[#333] my-1 transition-all duration-400"></div>
      </div>

      {/* Navegação principal */}
      <nav
        className={`${isNavActive ? 'flex' : 'hidden'} 
          md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0
          bg-[#f9f9f9] p-4 md:p-0 border-t md:border-t-0 border-[#ddd] space-y-2 md:space-y-0 md:space-x-6`}
      >
        <Link to="/" className="text-[#333] font-semibold no-underline">Início</Link>
        <Link to="/lembretes" className="text-[#333] font-semibold no-underline">Lembretes</Link>
        <Link to="/contato" className="text-[#333] font-semibold no-underline">Contato</Link>
        <Link to="/integrantes" className="text-[#333] font-semibold no-underline">Integrantes</Link>
        <Link to="/faq" className="text-[#333] font-semibold no-underline">FAQ</Link>
      </nav>
    </header>
  );
}