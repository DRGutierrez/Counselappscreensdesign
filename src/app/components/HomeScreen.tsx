import { Mic, Keyboard } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6">
      {/* Microphone Icon */}
      <button 
        onClick={() => onNavigate('response')}
        className="mb-8 p-8 rounded-full bg-[#1a1a1a] hover:bg-[#252525] transition-colors"
      >
        <Mic className="w-16 h-16 text-[#7c7c7c]" strokeWidth={1.5} />
      </button>

      {/* Listening Text */}
      <p className="text-[#7c7c7c] mb-12 tracking-wide">
        I'm listening.
      </p>

      {/* Keyboard Icon */}
      <button 
        onClick={() => onNavigate('response')}
        className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors"
      >
        <Keyboard className="w-6 h-6 text-[#5a5a5a]" strokeWidth={1.5} />
      </button>
    </div>
  );
}
