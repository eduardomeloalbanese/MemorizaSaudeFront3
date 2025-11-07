import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/assets/logo_memorizasaude_recort.png';

export function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

 
  const linkClasses = "text-[#333] font-semibold no-underline transition-colors duration-200"; 
  const activeLinkClasses = "text-[#70b794] font-bold no-underline transition-colors duration-200"; 

  return (
    <header className="bg-[#f9f9f9] p-4 sm:p-8 flex justify-between items-center border-b border-[#ddd] relative">
      
      <NavLink to="/">
        <img src={logo} alt="Memoriza Saúde - Ir para Início" id="logo" className="h-[60px] max-w-[1000px] w-auto" />
      </NavLink>
      
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
        {/* 3. Usamos o NavLink com a função className */}
        <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Início</NavLink>
        <NavLink to="/lembretes" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Lembretes</NavLink>
        <NavLink to="/diario-da-saude" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Diário da Saúde</NavLink>
        <NavLink to="/cuidador" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Cuidador</NavLink>
        <NavLink to="/contato" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Contato</NavLink>
        <NavLink to="/sobre" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Sobre</NavLink>
        <NavLink to="/integrantes" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Integrantes</NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>FAQ</NavLink>
      </nav>
    </header>
  );
}