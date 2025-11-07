import { Link } from 'react-router-dom';

export function SobrePage() {
  return (
    <main className="flex flex-col items-center p-8 text-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#3D3D3D]">Sobre o Memoriza Saúde</h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl mb-12 
                      transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          O Memoriza Saúde nasceu da necessidade de criar uma ferramenta digital acessível e humana para auxiliar idosos a gerenciar sua saúde. Acreditamos que a tecnologia deve ser uma ponte para o cuidado e a autonomia, e não uma barreira. Nossa missão é proporcionar tranquilidade e bem-estar, simplificando o dia a dia e fortalecendo o vínculo entre o usuário e sua rotina de saúde.
        </p>
      </div>

      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl
                      transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold mb-4">Nossa Equipe</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
          O Memoriza Saúde é o resultado da dedicação de uma equipe de alunos apaixonados por tecnologia e inovação, com o objetivo de criar soluções que realmente façam a diferença na vida das pessoas.
        </p>
        <Link 
          to="/integrantes" 
          className="inline-block py-2 px-6 bg-[#7FAF95] text-white font-bold no-underline rounded-md hover:bg-opacity-80 transition-colors duration-200"
        >
          Conheça os Integrantes
        </Link>
      </div>

    </main>
  );
}