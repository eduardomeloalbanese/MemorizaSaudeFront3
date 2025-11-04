import { LembreteItem } from "../components/LembretesItem";
import { useState, useEffect } from "react";

type Lembrete = {
  id: number;
  paciente: string;
  especialidade: string;
  dataConsulta: number;
  horaConsulta: number;
  confirmado: boolean;
};

export function LembretesPage() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  const [paciente, setPaciente] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');


  // FUNÇÃO DE BUSCAR (GET) 
  
  const fetchLembretes = async () => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/lembretes`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setLembretes(data);
      } else {
        console.error("Erro ao buscar lembretes");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }
  };
  

  useEffect(() => {
    fetchLembretes();
  }, []);

  
  //  2. FUNÇÃO DE CRIAR (POST) 
  const handleCreateLembrete = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página

    const url = `${import.meta.env.VITE_API_BASE_URL}/api/lembretes`; //


    const novoLembrete = {
      paciente: paciente,
      especialidade: especialidade,
      dataConsulta: parseInt(data), 
      horaConsulta: parseInt(hora), 
      confirmado: false 
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoLembrete)
      });

      if (response.ok) {
        alert('Lembrete criado com sucesso!');
        setPaciente('');
        setEspecialidade('');
        setData('');
        setHora('');
        

        fetchLembretes(); 
        
      } else {
        alert('Erro ao criar lembrete. Verifique os dados.');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  };

  const handleDeleteLembrete = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja deletar este lembrete?")) {
      return;
    }
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/lembretes/${id}`;
      const response = await fetch(url, { method: 'DELETE' });
      if (response.ok) {
        alert("Lembrete deletado com sucesso!");
        fetchLembretes(); 
      } else {
        alert("Erro ao deletar lembrete.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }
  };


  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">🔔 Meus Lembretes de Saúde</h1>

      {/* ✅ 4. ADICIONAMOS O FORMULÁRIO DE CRIAÇÃO (NOVO!) */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Criar Novo Lembrete</h2>
        <form onSubmit={handleCreateLembrete} className="space-y-4">
          <div>
            <label htmlFor="paciente" className="block text-gray-700 font-bold mb-1">Paciente:</label>
            <input 
              id="paciente" type="text" value={paciente}
              onChange={(e) => setPaciente(e.target.value)}
              placeholder="Nome do paciente" required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="especialidade" className="block text-gray-700 font-bold mb-1">Especialidade:</label>
            <input 
              id="especialidade" type="text" value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              placeholder="Ex: Cardiologista" required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="data" className="block text-gray-700 font-bold mb-1">Data (em números, ex: 20251105):</label>
            <input 
              id="data" type="number" value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="AAAAMMDD" required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="hora" className="block text-gray-700 font-bold mb-1">Hora (em números, ex: 1430):</label>
            <input 
              id="hora" type="number" value={hora}
              onChange={(e) => setHora(e.target.value)}
              placeholder="HHMM" required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Salvar Lembrete
          </button>
        </form>
      </section>

      <hr className="w-full max-w-lg my-8 border-gray-300" />
      
      {}
      {lembretes.length === 0 ? (
        <p>Nenhum lembrete encontrado.</p>
      ) : (
        lembretes.map(lembrete => (
          <LembreteItem
            key={lembrete.id}
            id={lembrete.id}
            title={`Consulta de ${lembrete.especialidade}`}
            text={`Paciente ${lembrete.paciente} - Data: ${lembrete.dataConsulta} Hora: ${lembrete.horaConsulta}`}
            onDelete={handleDeleteLembrete}
          />
        ))
      )}
    </main>
  );
}