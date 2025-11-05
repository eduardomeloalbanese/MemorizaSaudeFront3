// Cole em: src/pages/CuidadorPage.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ✅ Type do Cuidador (baseado no Cuidador.java)
type Cuidador = {
    id: number;
    nome: string;
    telefone: string;
    sexo: string;
};

// ==========================================================
// ✅ Componente para o Formulário de Edição (Modal)
// ==========================================================
interface EditFormProps {
    cuidador: Cuidador; 
    onSave: (cuidador: Cuidador) => void;
    onCancel: () => void;
}
function EditCuidadorForm({ cuidador, onSave, onCancel }: EditFormProps) {
    const [editCuidador, setEditCuidador] = useState(cuidador);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditCuidador(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(editCuidador); // Chama a função que faz o PUT
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Editar Cuidador ID: {cuidador.id}</h2>
                <div className="space-y-4">
                    <label className="block">Nome:
                        <input type="text" name="nome" value={editCuidador.nome} onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md" required />
                    </label>
                    <label className="block">Telefone:
                        <input type="text" name="telefone" value={editCuidador.telefone} onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md" required />
                    </label>
                    <label className="block">Sexo:
                        <select name="sexo" value={editCuidador.sexo} onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md" required>
                            <option value="">Selecione...</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </label>
                </div>
                <div className="flex justify-between mt-6 space-x-4">
                    <button type="button" onClick={onCancel}
                        className="flex-1 bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600">
                        Cancelar
                    </button>
                    <button type="submit"
                        className="flex-1 bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">
                        Salvar Alterações
                    </button>
                </div>
            </form>
        </div>
    );
}

// ==========================================================
// ✅ A Página Principal CuidadorPage (com CRUD)
// ==========================================================
export function CuidadorPage() {
    const [cuidadores, setCuidadores] = useState<Cuidador[]>([]);
    const [editingCuidador, setEditingCuidador] = useState<Cuidador | null>(null);

    // --- Estados para o formulário de NOVO cuidador ---
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    // --------------------------------------------------

    // -----------------------------------------------------------------
    // FUNÇÃO DE BUSCAR (GET)
    // -----------------------------------------------------------------
    const fetchCuidadores = async () => {
        try {
            const url = `${import.meta.env.VITE_API_BASE_URL}/api/cuidadores`; //
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCuidadores(data);
            } else {
                console.error("Erro ao buscar cuidadores");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
        }
    };

    useEffect(() => { fetchCuidadores(); }, []);

    // -----------------------------------------------------------------
    // FUNÇÃO DE CRIAR (POST)
    // -----------------------------------------------------------------
    const handleCreateCuidador = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/cuidadores`; //
        
        const novoCuidador = { nome, telefone, sexo }; // Monta o objeto

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoCuidador)
            });

            if (response.status === 201) { // 201 (Created)
                alert('Cuidador cadastrado com sucesso!');
                setNome(''); setTelefone(''); setSexo(''); // Limpa o formulário
                fetchCuidadores(); // Atualiza a lista
            } else {
                alert('Erro ao cadastrar cuidador.');
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
        }
    };

    // -----------------------------------------------------------------
    // FUNÇÃO DE DELETAR (DELETE)
    // -----------------------------------------------------------------
    const handleDeleteCuidador = async (id: number) => {
        if (!window.confirm("Tem certeza que deseja deletar este cuidador?")) { return; }
        try {
            const url = `${import.meta.env.VITE_API_BASE_URL}/api/cuidadores/${id}`; //
            const response = await fetch(url, { method: 'DELETE' });
            if (response.ok) {
                alert("Cuidador deletado com sucesso!");
                fetchCuidadores(); // Atualiza a lista
            } else {
                alert("Erro ao deletar cuidador.");
            }
        } catch (error) {
            console.error("Erro de conexão:", error);
        }
    };
    
    // -----------------------------------------------------------------
    // FUNÇÃO PARA CLICAR EM 'EDITAR'
    // -----------------------------------------------------------------
    const handleEditCuidadorClick = (cuidador: Cuidador) => {
        setEditingCuidador(cuidador); // Abre o modal
    };

    // -----------------------------------------------------------------
    // FUNÇÃO PARA SALVAR A EDIÇÃO (PUT)
    // -----------------------------------------------------------------
    const handleSaveEdit = async (editedCuidador: Cuidador) => {
        const url = `${import.meta.env.VITE_API_BASE_URL}/api/cuidadores/${editedCuidador.id}`; //

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedCuidador)
            });
            if (response.ok) {
                alert('Cuidador atualizado com sucesso!');
                setEditingCuidador(null); // Fecha o modal
                fetchCuidadores(); // Atualiza a lista
            } else {
                alert('Erro ao salvar alterações.');
            }
        } catch (error) {
            console.error('Erro de conexão no PUT:', error);
        }
    };


    // -----------------------------------------------------------------
    // O HTML (JSX) DA PÁGINA
    // -----------------------------------------------------------------
    return (
        <main className="flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-8 text-[#3D3D3D]">Painel do Cuidador</h1>
            
            {/* Renderiza o formulário de Edição (Modal) */}
            {editingCuidador && (
                <EditCuidadorForm
                    cuidador={editingCuidador}
                    onSave={handleSaveEdit}
                    onCancel={() => setEditingCuidador(null)}
                />
            )}

            {/* Formulário de Criação (POST) */}
            <section className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Cadastrar Novo Cuidador</h2>
                <form onSubmit={handleCreateCuidador} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-gray-700 font-bold mb-1">Nome:</label>
                        <input 
                            id="nome" type="text" value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome do cuidador" required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="telefone" className="block text-gray-700 font-bold mb-1">Telefone:</label>
                        <input 
                            id="telefone" type="text" value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="Ex: 11999998888" required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="sexo" className="block text-gray-700 font-bold mb-1">Sexo:</label>
                        <select 
                            id="sexo" name="sexo" value={sexo}
                            onChange={(e) => setSexo(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md" required
                        >
                            <option value="">Selecione...</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-[#7FAF95] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors"
                    >
                        Cadastrar Cuidador
                    </button>
                </form>
            </section>

            <hr className="w-full max-w-lg my-8 border-gray-300" />

            {/* Lista de Cuidadores (GET) */}
            <section className="registros w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Cuidadores Cadastrados</h2>
                
                <ul className="space-y-4">
                    {cuidadores.length === 0 ? (
                        <li className="text-gray-500">Nenhum cuidador cadastrado.</li>
                    ) : (
                        cuidadores.map(cuidador => (
                            <li 
    key={cuidador.id} 
    className="bg-white p-4 rounded shadow-md 
               transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
>
                                <p><strong>Nome:</strong> {cuidador.nome}</p>
                                <p><strong>Telefone:</strong> {cuidador.telefone}</p>
                                <p><strong>Sexo:</strong> {cuidador.sexo}</p>
                                
                                <div className="flex space-x-2 mt-4">
                                    <Link 
                                        to={`/cuidador/painel/${cuidador.id}`}
                                        className="bg-green-600 text-white font-bold py-1 px-3 rounded-md hover:bg-green-700 no-underline"
                                    >
                                        Ver Painel
                                    </Link>
                                    <button
                                        onClick={() => handleEditCuidadorClick(cuidador)}
                                        className="bg-blue-600 text-white font-bold py-1 px-3 rounded-md hover:bg-blue-700"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCuidador(cuidador.id)}
                                        className="bg-red-600 text-white font-bold py-1 px-3 rounded-md hover:bg-red-700"
                                    >
                                        Deletar
                                    </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </section>
        </main>
    );
}