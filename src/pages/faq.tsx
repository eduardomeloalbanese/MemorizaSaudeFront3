import { FaqItem } from '../components/FaqItem';

export function FaqPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
        
        <FaqItem
          question="🧓 O que é isso?"
          answer="É um ajudante no seu celular feito pra te lembrar das consultas, dos exames e te ajudar a cuidar da sua saúde de forma fácil e divertida. A cada vez que você cuida da sua saúde — como ir na consulta, tomar seus remédios ou anotar como você está se sentindo — você ganha medalhas e mensagens de parabéns. Isso te motiva e te mostra que você está no caminho certo!"
        />
        <FaqItem
          question="💙 Como isso vai me ajudar?"
          answer="Ele te avisa do dia da consulta, te explica pra que ela serve, te dá dicas pra se cuidar no dia a dia e ainda te incentiva com mensagens carinhosas e conquistas. Assim, fica mais fácil lembrar e cuidar da sua saúde."
        />
        <FaqItem
          question="📱 Meu celular simples funciona?"
          answer="Funciona sim! Foi feito pensando em quem tem celular mais simples e até quem tem dificuldade com internet. Os botões são grandes, tem leitura em voz alta e até funciona sem internet em várias partes, como no seu caderno de saúde."
        />
      </div>
    </div>
  );
}