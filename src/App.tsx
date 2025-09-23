import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IntegrantesPage } from './pages/Integrantes';
import { Contato } from './pages/contato';
import { FaqPage } from './pages/faq';
import { DiarioPage } from './pages/diariosaude';

const Home = () => <h2 className="text-yellow-500">Página Inicial</h2>;
const Lembretes = () => <h2>Página de Lembretes</h2>;
const Cuidador = () => <h2>Página do Cuidador</h2>;

const Sobre = () => <h2>Página Sobre</h2>;
function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lembretes" element={<Lembretes />} />
        <Route path="/diario-da-saude" element={<DiarioPage />} />
        <Route path="/cuidador" element={<Cuidador />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<IntegrantesPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      </main>
      <Footer />
      </div>
      
    </>
  );
}

export default App;