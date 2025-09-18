import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IntegrantesPage } from './pages/Integrantes';

const Home = () => <h2 className="text-yellow-500">Página Inicial</h2>;
const Lembretes = () => <h2>Página de Lembretes</h2>;
const Recompensas = () => <h2 className=''>Página de Recompensa</h2>;
const Contato = () => <h2>Página de Contato</h2>;
const FAQ = () => <h2>Página de FAQ</h2>;
 



function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lembretes" element={<Lembretes />} />
        <Route path="/recompensas" element={<Recompensas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<IntegrantesPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      </main>
      <Footer />
      </div>
      
    </>
  );
}

export default App;