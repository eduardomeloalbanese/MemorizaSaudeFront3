// Cole este código em: src/pages/LembretesPage.tsx

import { LembreteItem } from "../components/LembretesItem";
import { useState, useEffect } from "react";

// (O Type do Lembrete, igual ao anterior)
type Lembrete = {
    id: number;
    paciente: string;
    especialidade: string;
    dataConsulta: number;
    horaConsulta: number;
    confirmado: boolean;
};

// ==========================================================
// ✅ NOVO: Interface para as Propriedades do EditForm
// ==========================================================
interface EditFormProps {
    lembrete: Lembrete; // Deve ser do tipo Lembrete
    onSave: (lembrete: Lembrete) => void;
    onCancel: () => void;
}

// ==========================================================
// Componente para o Formulário de Edição (Modal)
// ==========================================================
function EditForm({ lembrete, onSave, onCancel }: EditFormProps) { // ✅ Aplica a tipagem aqui
    // Estado interno do formulário, inicia com os dados do lembrete que veio
    const [editLembrete, setEditLembrete] = useState(lembrete);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Se for um campo de número, tentamos converter (mas mantemos como string no estado do input)
        // O parseInt será feito na função onSave final
        setEditLembrete(prev => ({
            ...prev,
            [name]: value // Mantemos como string, o que é mais fácil para o input
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Antes de salvar, garantimos que os números são números
        const lembreteFinal = {
            ...editLembrete,
            dataConsulta: parseInt(editLembrete.dataConsulta as any),
            horaConsulta: parseInt(editLembrete.horaConsulta as any),
        };
        
        onSave(lembreteFinal); // Chama a função que faz o PUT
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Editar Lembrete ID: {lembrete.id}</h2>

                <div className="space-y-4">
                    <label className="block">Paciente:
                        <input type="text" name="paciente" value={editLembrete.paciente} onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md" required />
                    </label>
                    <label className="block">Especialidade:
                        <input type="text" name="especialidade" value={editLembrete.especialidade} onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md" required />
                    </label>
                    <label className="block">Data (AAAAMMDD):
                        {/* Note que o value é Number, mas o input lê String. O onChange trata isso. */}
                        <input type="number" name="dataConsulta" value={editLembrete.dataConsulta} onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md" required />
                    </label>
                    <label className="block">Hora (HHMM):
                        <input type="number" name="horaConsulta" value={editLembrete.horaConsulta} onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md" required />
                    </label>
                </div>

                <div className="flex justify-between mt-6 space-x-4">
                    <button type="button" onClick={onCancel}
                        className="flex-1 bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-colors">
                        Cancelar
                    </button>
                    <button type="submit"
                        className="flex-1 bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    );
}


export function LembretesPage() {
    const [lembretes, setLembretes] = useState<Lembrete[]>([]);
    const [editingLembrete, setEditingLembrete] = useState<Lembrete | null>(null); 
    const [paciente, setPaciente] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    // -----------------------------------------------------------------
    // FUNÇÃO DE BUSCAR (GET) 
    // -----------------------------------------------------------------
    const fetchLembretes = async () => { /* ... (código GET igual) ... */
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

    useEffect(() => { fetchLembretes(); }, []);


    // FUNÇÃO DE CRIAR (POST)
    const handleCreateLembrete = async (e: React.FormEvent) => { /* ... (código POST igual) ... */
        e.preventDefault();
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/lembretes`;
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoLembrete)
            });

            if (response.ok) {
                alert('Lembrete criado com sucesso!');
                setPaciente(''); setEspecialidade(''); setData(''); setHora('');
                fetchLembretes();
            } else {
                alert('Erro ao criar lembrete. Verifique os dados.');
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
        }
    };

    // FUNÇÃO DE DELETAR (DELETE)

    const handleDeleteLembrete = async (id: number) => { /* ... (código DELETE igual) ... */
        if (!window.confirm("Tem certeza que deseja deletar este lembrete?")) { return; }
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


    // FUNÇÃO PARA CLICAR EM 'EDITAR'
    const handleEditLembreteClick = (id: number) => {
        const itemToEdit = lembretes.find(lembrete => lembrete.id === id);
        if (itemToEdit) {
            setEditingLembrete(itemToEdit);
        }
    };


    // FUNÇÃO PARA SALVAR A EDIÇÃO (PUT)

    const handleSaveEdit = async (editedLembrete: Lembrete) => {
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/lembretes/${editedLembrete.id}`; 

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedLembrete)
            });

            if (response.ok) {
                alert('Lembrete atualizado com sucesso!');
                setEditingLembrete(null); // Fecha o formulário
                fetchLembretes(); // Atualiza a lista
            } else {
                alert('Erro ao salvar alterações.');
            }

        } catch (error) {
            console.error('Erro de conexão no PUT:', error);
        }
    };


    return (
        <main className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8">🔔 Meus Lembretes de Saúde</h1>

            {/* RENDERIZA O FORMULÁRIO DE EDIÇÃO SE 'editingLembrete' NÃO FOR NULO */}
            {editingLembrete && (
                <EditForm
                    lembrete={editingLembrete}
                    onSave={handleSaveEdit}
                    onCancel={() => setEditingLembrete(null)}
                />
            )}

            {/* ... (O restante do formulário de criação POST é o mesmo) ... */}
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

            {/* Mapeamento da lista de lembretes, AGORA PASSANDO O onEdit */}
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
                        onEdit={handleEditLembreteClick} // ✅ NOVO: Passamos a função de edição
                    />
                ))
            )}
        </main>
    );
}