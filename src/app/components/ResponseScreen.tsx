import { ChevronRight, Ellipsis } from 'lucide-react';
import { useState } from 'react';

interface ResponseScreenProps {
  onNavigate: (screen: string) => void;
}

export function ResponseScreen({ onNavigate }: ResponseScreenProps) {
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
            Done
          </button>
          <h1 className="text-lg tracking-tight">Response</h1>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-[#1a1a1a]/30 rounded-lg transition-all duration-200"
          >
            <Ellipsis className="w-5 h-5 text-[#4a5568]" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-12 space-y-12">
        {/* Summary Section */}
        <div className="space-y-4">
          <h2 className="text-[#7c7c7c] tracking-wider uppercase text-xs">
            Summary
          </h2>
          <p className="text-[#e5e5e5] leading-relaxed">
            You're thinking about ways to improve your morning routine and create more intentional time for reflection before starting work.
          </p>
        </div>

        {/* Organized Section */}
        <div className="space-y-4">
          <h2 className="text-[#7c7c7c] tracking-wider uppercase text-xs">
            Organized
          </h2>
          <ul className="space-y-3">
            <li className="text-[#e5e5e5] leading-relaxed flex items-start">
              <span className="text-[#6b9eff] mr-3 mt-1.5 block w-1 h-1 rounded-full bg-[#6b9eff] flex-shrink-0"></span>
              <span>Wake up 30 minutes earlier</span>
            </li>
            <li className="text-[#e5e5e5] leading-relaxed flex items-start">
              <span className="text-[#6b9eff] mr-3 mt-1.5 block w-1 h-1 rounded-full bg-[#6b9eff] flex-shrink-0"></span>
              <span>Journal for 10 minutes with coffee</span>
            </li>
            <li className="text-[#e5e5e5] leading-relaxed flex items-start">
              <span className="text-[#6b9eff] mr-3 mt-1.5 block w-1 h-1 rounded-full bg-[#6b9eff] flex-shrink-0"></span>
              <span>Review daily intentions before opening laptop</span>
            </li>
            <li className="text-[#e5e5e5] leading-relaxed flex items-start">
              <span className="text-[#6b9eff] mr-3 mt-1.5 block w-1 h-1 rounded-full bg-[#6b9eff] flex-shrink-0"></span>
              <span>Consider a short walk or stretching</span>
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <button 
            onClick={() => onNavigate('reflections')}
            className="w-full bg-[#1a1a1a] hover:bg-[#252525] text-[#e5e5e5] py-4 px-6 rounded-2xl flex items-center justify-between transition-colors"
          >
            <span>Turn into a plan</span>
            <ChevronRight className="w-5 h-5 text-[#7c7c7c]" strokeWidth={1.5} />
          </button>
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