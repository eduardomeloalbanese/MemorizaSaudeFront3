import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <section className="flex flex-col items-center text-center p-8 bg-[#FFEFD2]">
        <img 
          src="/src/assets/acompanhamento_idoso.png" 
          alt="Banner principal - Acompanhamento de saúde nas suas mãos" 
          className="block w-[50%] h-auto rounded-xl mx-auto my-5" 
        />
        <h1 className="text-[1.8rem] text-[#3D3D3D] mt-4 font-bold md:text-2xl lg:text-3xl xl:text-4xl">Cuide do seu Bem mais Precioso!</h1>
      </section>

      <section className="p-8 text-center">
        <h2 className="text-[1.6rem] text-[#3D3D3D] mb-2 font-bold">Sua presença vale <span className="text-[#C2A32E] font-extrabold">OURO!</span></h2>
        <p className="text-base mb-4">Tenha acesso completo de suas consultas!</p>
        <img 
          src="/src/assets/consulta_marcada.png" 
          alt="Imagem Consulta marcada" 
          className="block w-[50%] h-auto rounded-xl mx-auto my-5" 
        />
        <Link to="/lembretes" className="inline-block py-3 px-6 bg-[#7FAF95] text-white font-bold no-underline rounded-lg mb-8">Eu quero</Link>
      </section>

      <section className="p-8 text-center">
        <h2 className="text-[1.6rem] text-[#3D3D3D] mb-2 font-bold">Resgistra seu dia com <strong>Carinho❤️</strong></h2>
        <img 
          src="/src/assets/diariosaude_img.png" 
          alt="Imagem idoso conquistando medalha digital" 
          className="block w-[50%] h-auto rounded-xl mx-auto my-5" 
        />
        <Link to="/recompensas" className="inline-block py-3 px-6 bg-[#7FAF95] text-white font-bold no-underline rounded-lg mb-8">Ver agora</Link>
      </section>
    </>
  );
}