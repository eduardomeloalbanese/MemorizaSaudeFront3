interface TimelineItemProps {
  icon: string;
  text: string;
  date: string;
}

export function TimelineItem({ icon, text, date }: TimelineItemProps) {
  return (
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="flex-grow">
        <p className="text-gray-800 font-semibold">{text}</p>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
      </div>
    </div>
  );
}