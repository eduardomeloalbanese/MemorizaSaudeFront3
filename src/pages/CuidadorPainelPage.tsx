

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // ✅ Importa o useParams
import { TimelineItem } from '../components/TimeLineItem';

// (Type do Cuidador - igual ao anterior)
type Cuidador = {
    id: number;
    nome: string;
    telefone: string;
    sexo: string;
};

// (Mock da Timeline - igual ao anterior)
const MOCK_TIMELINE = [
    { id: 1, icon: '😊', text: 'Diário: Humor registrado como "Feliz".', date: '27 de setembro, 2025' },
    { id: 2, icon: '🚶‍♀️', text: 'Diário: Fez 20 minutos de caminhada.', date: '27 de setembro, 2025' },
];

export function CuidadorPainelPage() {
    const { id } = useParams(); // ✅ Pega o ID da URL (ex: /cuidador/painel/1)
    const [cuidador, setCuidador] = useState<Cuidador | null>(null);

    // Formulário de mensagem
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [message, setMessage] = useState('');

    // ✅ BUSCA O CUIDADOR ESPECÍFICO PELO ID
    useEffect(() => {
        const fetchCuidador = async () => {
            try {
                const url = `${import.meta.env.VITE_API_BASE_URL}/api/cuidadores/${id}`; //
                const response = await fetch(url);
                if (response.ok) {
                    const data: Cuidador = await response.json();
                    setCuidador(data);
                } else {
                    console.error("Cuidador não encontrado");
                }
            } catch (error) {
                console.error("Erro de conexão:", error);
            }
        };
        
        fetchCuidador();
    }, [id]); // Roda sempre que o ID da URL mudar

    // (Função de enviar mensagem - igual ao anterior)
    const sendSupportMessage = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Mensagem de apoio enviada (POST simulado): "${message}"`);
        setMessage('');
        setIsFormVisible(false);
    };

    if (!cuidador) {
        return <main className="flex items-center justify-center p-8">Carregando dados do cuidador...</main>;
    }

    // O HTML é o seu Painel original
    return (
        <main className="flex flex-col items-center p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-8 text-[#3D3D3D]">Painel do Cuidador: {cuidador.nome}</h1>
            
            <div className="flex flex-wrap justify-center gap-4 w-full mb-12 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">
                    Status do Paciente: <span className="text-[#7FAF95] font-bold">API OK!</span>
                </h2>
                <h2 className="text-xl font-semibold ml-auto">
                    Próxima Consulta: <span className="text-[#C2A32E] font-bold">Data Indisponível</span>
                </h2>
            </div>

            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#3D3D3D]">Linha do Tempo (Mock)</h2>
                {MOCK_TIMELINE.map(item => (
                    <TimelineItem key={item.id} icon={item.icon} text={item.text} date={item.date} />
                ))}
            </div>
            
            <div className="mt-8 w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 text-[#3D3D3D]">Ações Rápidas</h2>
                {isFormVisible ? (
                    <form onSubmit={sendSupportMessage} className="w-full">
                        <textarea
                            className="w-full p-3 border rounded-md"
                            placeholder="Digite sua mensagem de apoio aqui..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full mt-2 bg-[#7FAF95] text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-200"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                ) : (
                    <button
                        onClick={() => setIsFormVisible(true)}
                        className="w-full bg-[#7FAF95] text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-200"
                    >
                        Enviar uma Mensagem de Apoio
                    </button>
                )}
            </div>
            <Link to="/cuidador" className="mt-8 text-blue-600 hover:underline">← Voltar para Gerenciamento</Link>
        </main>
    );
}