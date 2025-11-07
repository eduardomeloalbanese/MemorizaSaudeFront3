interface LembreteItemProps {
  id: string;
  title: string;
  text: string;
}

export function LembreteItem({ id, title, text }: LembreteItemProps) {
  const lerTexto = () => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-lg mb-4 w-full max-w-lg">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p id={id} className="text-gray-700 mb-4">{text}</p>
      <button 
        onClick={lerTexto} 
        className="bg-[#7FAF95] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-200"
      >
         Ouvir
      </button>
    </section>
  );
}