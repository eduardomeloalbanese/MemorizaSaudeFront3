import { DiarioForm } from '../components/DiarioForm';

export function DiarioPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-2">Diário de Saúde</h1>
      <p className="text-lg text-gray-600 mb-8">Sua saúde em primeiro lugar, com carinho e simplicidade.</p>

      <section className="form-section">
        <h2 className="text-2xl font-semibold mb-4">Registre seu dia</h2>
        <DiarioForm />
      </section>

      <section className="registros mt-12">
        <h2 className="text-2xl font-semibold mb-4">📅 Registros da Semana</h2>
        <ul id="registros-lista" className="list-disc pl-5">
        </ul>
      </section>
    </main>
  );
}