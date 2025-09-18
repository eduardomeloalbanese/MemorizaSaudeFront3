import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

const Home = () => <h2 className="text-yellow-500">Página Inicial</h2>;
const Lembretes = () => <h2>Página de Lembretes</h2>;
const Recompensas = () => <h2 className=''>Página de Recompensa</h2>;
const Contato = () => <h2>Página de Contato</h2>;
const Integrantes = () => <h2>Página de Integrantes</h2>;
const FAQ = () => <h2>Página de FAQ</h2>;
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lembretes" element={<Lembretes />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;