import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IntegrantesPage } from './pages/Integrantes';
import { Contato } from './pages/contato';
import { FaqPage } from './pages/faq';
import { DiarioPage } from './pages/diariosaude';
import { HomePage } from './pages/HomePage';
import { LembretesPage } from './pages/LembretesPage';
import { SobrePage } from './pages/SobrePage';

const Cuidador = () => <h2>Página do Cuidador</h2>;

function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lembretes" element={<LembretesPage />} />
        <Route path="/diario-da-saude" element={<DiarioPage />} />
        <Route path="/cuidador" element={<Cuidador />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<IntegrantesPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
      </main>
      <Footer />
      </div>
      
    </>
  );
}

export default App;