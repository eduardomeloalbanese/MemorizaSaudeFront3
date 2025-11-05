// Cole este código em: src/components/LembreteItem.tsx

interface LembreteItemProps {
  id: number;
  title: string;
  text: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void; 
}

export function LembreteItem({ id, title, text, onDelete, onEdit }: LembreteItemProps) {
    // ... (Função lerTexto, igual ao original)
    const lerTexto = () => { /* ... */ }; 

    return (
        <section className="bg-white p-6 rounded-lg shadow-md mb-4 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p id={String(id)} className="text-gray-700 mb-4">{text}</p>

            <div className="flex space-x-4">
                <button 
                    onClick={lerTexto} 
                    className="bg-[#7FAF95] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-200"
                >
                    Ouvir
                </button>

                {/* ✅ NOVO: Botão de Editar */}
                <button 
                    onClick={() => onEdit(id)} 
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    Editar
                </button>

                <button 
                    onClick={() => onDelete(id)} 
                    className="bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                    Deletar
                </button>
            </div>
        </section>
    );
}