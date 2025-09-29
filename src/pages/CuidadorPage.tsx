import React, { useState } from 'react';
import { TimelineItem } from '../components/TimeLineItem';

export function CuidadorPage() {
  const [pacienteStatus] = useState({
    proximaConsulta: '15/10/2025 às 10:00',
    humorRecente: 'Feliz',
    checkinDiario: 'Feito',
    consultasProximas: 1,
  });

  const [timeline] = useState([
    { id: 1, icon: '😊', text: 'Diário: Humor registrado como "Feliz".', date: '27 de setembro, 2025' },
    { id: 2, icon: '🚶‍♀️', text: 'Diário: Fez 20 minutos de caminhada.', date: '27 de setembro, 2025' },
    { id: 3, icon: '🔔', text: 'Lembrete: Consulta médica de amanhã agendada.', date: '26 de setembro, 2025' },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [message, setMessage] = useState('');

  const sendSupportMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem de apoio enviada: "${message}"`);
    setMessage('');
    setIsFormVisible(false);
  };
  
  const handleButtonClick = () => {
      setIsFormVisible(true);
  };

  return (
    <main className="flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-[#3D3D3D]">Painel do Cuidador</h1>
      
      {pacienteStatus.consultasProximas > 0 && (
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md mb-8 w-full max-w-4xl text-center font-bold">
          Alerta: Próxima consulta em breve!
        </div>
      )}
      
      <div className="flex flex-wrap justify-center gap-4 w-full mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">
          Status do Paciente: <span className="text-[#7FAF95] font-bold">{pacienteStatus.humorRecente}</span>
        </h2>
        <h2 className="text-xl font-semibold ml-auto">
          Próxima Consulta: <span className="text-[#C2A32E] font-bold">{pacienteStatus.proximaConsulta}</span>
        </h2>
      </div>

      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-[#3D3D3D]">Linha do Tempo</h2>
        {timeline.map(item => (
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
                onClick={handleButtonClick}
                className="w-full bg-[#7FAF95] text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-200"
            >
                Enviar uma Mensagem de Apoio
            </button>
        )}
      </div>
    </main>
  );
}