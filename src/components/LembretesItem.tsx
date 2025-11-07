
// A interface agora inclui as funções de manipulação de dados
interface LembreteItemProps {
    id: number;
    title: string;
    text: string;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

export function LembreteItem({ id, title, text, onDelete, onEdit }: LembreteItemProps) {

    /**
     * Função de acessibilidade para ler o texto do lembrete em voz alta
     * usando a API nativa de Síntese de Fala do navegador.
     */
    const lerTexto = () => {
        window.speechSynthesis.cancel(); 
        
        const utter = new SpeechSynthesisUtterance(text);
        
        utter.lang = 'pt-BR';  
 
        window.speechSynthesis.speak(utter);
    };

    return (
        // Estilos de design coeso (shadow-lg, rounded-xl, hover effects)
        <section className="bg-white p-6 rounded-xl shadow-lg mb-4 w-full max-w-lg 
                            transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
            
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p id={String(id)} className="text-gray-700 mb-4">{text}</p>

            {/* Container para todos os botões */}
            <div className="flex flex-wrap items-center justify-start gap-3 mt-4">
                
                {/* Botão de Acessibilidade */}
                <button 
                    onClick={lerTexto} 
                    // Estilo unificado de botão primário
                    className="bg-[#7FAF95] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors duration-200"
                >
                    🔊 Ouvir
                </button>

                {/* Botão de Editar (CRUD) */}
                <button 
                    onClick={() => onEdit(id)} 
                    className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                    Editar
                </button>

                {/* Botão de Deletar (CRUD) */}
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