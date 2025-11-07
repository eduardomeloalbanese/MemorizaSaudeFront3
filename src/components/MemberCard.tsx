
interface MemberCardProps {
  name: string;
  rm: string;
  photoUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

export function MemberCard(props: MemberCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center m-4">
      <img src={props.photoUrl} alt={`Foto de ${props.name}`} className="w-24 h-24 rounded-full object-cover mb-4" />
      <h2 className="text-xl font-bold text-gray-800 mb-1">{props.name}</h2>
      <p className="text-gray-600 mb-4">RM: {props.rm}</p>
      
      <div className="flex flex-col space-y-2">
        <a 
          href={props.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a 
          href={props.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-gray-900 transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}