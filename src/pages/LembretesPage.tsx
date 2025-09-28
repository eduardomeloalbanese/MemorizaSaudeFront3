import { LembreteItem } from "../components/LembretesItem";

export function LembretesPage() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">🔔 Meus Lembretes de Saúde</h1>
      <LembreteItem
        id="lembrete1"
        title="Consulta de Oftalmologista"
        text="Você tem uma consulta amanhã às 9h com o Dr. Fabio Melo, oftalmologista."
      />
      <LembreteItem
        id="lembrete2"
        title="Consulta de Cardiologista"
        text="Seu exame está marcado para quarta-feira às 8h com o Dr. Silvio Andrade, cardiologista."
      />
      <LembreteItem
        id="lembrete3"
        title="Psicólogo"
        text="Lembre-se da consulta com a Dra. Maria Fernandes, sua psicóloga particular, às 11h na sexta-feira."
      />
    </main>
  );
}