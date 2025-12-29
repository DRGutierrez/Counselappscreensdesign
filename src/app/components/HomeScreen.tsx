import { Mic, Keyboard, Ellipsis } from 'lucide-react';
import { useState } from 'react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] flex flex-col items-center justify-between px-6 py-20">
      {/* Menu Icon - Top Right */}
      <div className="w-full flex justify-end mb-4">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-[#1a1a1a]/30 rounded-lg transition-all duration-200"
        >
          <Ellipsis className="w-5 h-5 text-[#4a5568]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Top spacer */}
      <div className="flex-1" />

      {/* Center content */}
      <div className="flex flex-col items-center">
        {/* Microphone Button */}
        <button 
          onClick={() => onNavigate('response')}
          className={`mb-10 p-10 rounded-full bg-gradient-to-br from-[#161616] to-[#0f0f0f] hover:from-[#1a1a1a] hover:to-[#131313] transition-all duration-300 shadow-[0_0_40px_rgba(100,120,140,0.08)] ${menuOpen ? 'opacity-70' : 'opacity-100'}`}
        >
          <Mic className="w-20 h-20 text-[#b4c5d8]" strokeWidth={1.2} />
        </button>

        {/* Listening Text */}
        <p className={`text-[#9ca3af] tracking-wide transition-opacity duration-300 ${menuOpen ? 'opacity-70' : 'opacity-100'}`}>
          I'm listening.
        </p>
      </div>

      {/* Bottom content */}
      <div className="flex flex-col items-center pb-8">
        <button 
          onClick={() => onNavigate('response')}
          className="p-3 hover:bg-[#1a1a1a]/40 rounded-xl transition-all duration-200"
        >
          <Keyboard className="w-5 h-5 text-[#4a5568]" strokeWidth={1.5} />
        </button>
      </div>

      {/* Menu Panel - Bottom Sheet */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed bottom-8 left-6 right-6 bg-[#1a1a1a]/90 backdrop-blur-xl rounded-3xl z-50 max-w-[430px] mx-auto px-6 py-6 shadow-2xl">
            <div className="space-y-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onNavigate('reflections');
                }}
                className="w-full text-left py-3 text-[#d4d4d4] hover:text-[#e5e5e5] transition-colors"
              >
                Reflections
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onNavigate('reflections');
                }}
                className="w-full text-left py-3 text-[#d4d4d4] hover:text-[#e5e5e5] transition-colors"
              >
                History
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}