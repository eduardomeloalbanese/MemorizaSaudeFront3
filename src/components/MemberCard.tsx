interface MemberCardProps {
  name: string;
  rm: string;
  turma: string;
  photoUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

export function MemberCard(props: MemberCardProps) {
  return (
    // ✅ Card padronizado (rounded-xl, shadow-lg, hover effect)
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center m-4
                    transition-all duration-200 hover:shadow-xl hover:scale-[1.01]">
      
      <img src={props.photoUrl} alt={`Foto de ${props.name}`} className="w-24 h-24 rounded-full object-cover mb-4" />
      
      {/* ✅ Subtítulo com cor de destaque */}
      <h2 className="text-xl font-bold text-[#C2A32E] mb-1">{props.name}</h2>
      
      <p className="text-gray-600 mb-4">RM: {props.rm}</p>
      <p className="text-gray-600 mb-6">Turma: {props.turma}</p>
      
      <div className="flex flex-col space-y-2">
        <a 
          href={props.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          // ✅ Botão com transição
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a 
          href={props.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          // ✅ Botão com transição
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-900 transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}