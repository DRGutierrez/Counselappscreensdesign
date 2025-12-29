import { Ellipsis } from 'lucide-react';
import { useState } from 'react';

interface ReflectionsScreenProps {
  onNavigate: (screen: string) => void;
}

export function ReflectionsScreen({ onNavigate }: ReflectionsScreenProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="px-6 pt-16 pb-8">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => onNavigate('home')}
            className="text-[#6b9eff]"
          >
            Home
          </button>
          <h1 className="text-lg tracking-tight">Reflections</h1>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-[#1a1a1a]/30 rounded-lg transition-all duration-200"
          >
            <Ellipsis className="w-5 h-5 text-[#4a5568]" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-12">
        {/* Check-ins Section */}
        <div className="mb-10">
          <h2 className="text-[#7c7c7c] tracking-wider uppercase text-xs mb-6">
            Check-ins
          </h2>
          
          {/* Today */}
          <div className="mb-8">
            <p className="text-[#5a5a5a] text-sm mb-4">Today</p>
            <div className="space-y-4">
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Morning routine improvements
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  9:24 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Project timeline concerns
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  2:15 PM
                </p>
              </div>
            </div>
          </div>

          {/* Yesterday */}
          <div className="mb-8">
            <p className="text-[#5a5a5a] text-sm mb-4">Yesterday</p>
            <div className="space-y-4">
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Weekend planning and priorities
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  6:30 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Career development thoughts
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  11:20 AM
                </p>
              </div>
            </div>
          </div>

          {/* This Week */}
          <div>
            <p className="text-[#5a5a5a] text-sm mb-4">This Week</p>
            <div className="space-y-4">
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Book notes and reading list
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 26, 4:45 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Health and fitness goals
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 25, 10:00 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Apartment organization ideas
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 24, 7:15 PM
                </p>
              </div>
            </div>
          </div>
        </div>
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