import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] p-4 text-center text-sm border-t border-[#ddd]">
      <Link to="/" className="mx-2 text-[#333] no-underline">Inicio</Link> |
      <Link to="/lembretes" className="mx-2 text-[#333] no-underline">Lembretes</Link> |
      <Link to="/contato" className="mx-2 text-[#333] no-underline">Contato</Link> |
      <Link to="/faq" className="mx-2 text-[#333] no-underline">FAQ</Link>
    </footer>
  );
}