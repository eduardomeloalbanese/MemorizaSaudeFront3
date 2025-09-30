import { MemberCard } from '../components/MemberCard';

export function IntegrantesPage() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Identificação dos Alunos</h1>

      <div className="flex flex-wrap justify-center">
        <MemberCard
          name="Nathan Gonçalves Pereira Mendes"
          rm="564666"
          turma="1TDSPX"
          photoUrl="src/assets/foto_nathan.jpg"
          linkedinUrl="https://www.linkedin.com/in/nathangpmendes"
          githubUrl="http://github.com/nathangpm"
        />
        <MemberCard
          name="Guilherme de Andrade Martini"
          rm="566087"
          turma="1TDSPX"
          photoUrl="src/assets/foto_guilherme.jpg"
          linkedinUrl="https://www.linkedin.com/in/guilherme-de-andrade-martini-994648348"
          githubUrl="https://github.com/Guilhermedev2807"
        />
        <MemberCard
          name="Eduardo de Melo Albanese"
          rm="561790"
          turma="1TDSPX"
          photoUrl="src/assets/foto_eduardo.png"
          linkedinUrl="https://www.linkedin.com/in/eduardo-de-melo-albanese-605043236/"
          githubUrl="https://github.com/eduardomeloalbanese"
        />
      </div>
    </div>
  );
}
