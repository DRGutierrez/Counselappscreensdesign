import { Ellipsis } from 'lucide-react';
import { useState } from 'react';

interface HistoryScreenProps {
  onNavigate: (screen: string) => void;
}

export function HistoryScreen({ onNavigate }: HistoryScreenProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation Header */}
      <div className="px-6 pt-16 pb-8">
        <div className="flex items-center justify-center gap-3 text-sm">
          <button 
            onClick={() => onNavigate('home')}
            className="text-[#6b9eff] hover:text-[#8bb0ff] transition-colors"
          >
            Home
          </button>
          <span className="text-[#3a3a3a]">·</span>
          <button 
            onClick={() => onNavigate('reflections')}
            className="text-[#5a5a5a] hover:text-[#7a7a7a] transition-colors"
          >
            Reflections
          </button>
          <span className="text-[#3a3a3a]">·</span>
          <button 
            className="text-[#e5e5e5]"
          >
            History
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-12">
        {/* All Entries */}
        <div className="space-y-8">
          {/* December 2024 */}
          <div>
            <p className="text-[#5a5a5a] text-sm mb-6 tracking-wide">December 2024</p>
            <div className="space-y-4">
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Morning routine improvements
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 30, 9:24 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Project timeline concerns
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 30, 2:15 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Weekend planning and priorities
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 29, 6:30 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Career development thoughts
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 29, 11:20 AM
                </p>
              </div>
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

          {/* November 2024 */}
          <div>
            <p className="text-[#5a5a5a] text-sm mb-6 tracking-wide">November 2024</p>
            <div className="space-y-4">
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Year-end reflection and planning
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Nov 28, 8:00 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Gratitude practice ideas
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Nov 24, 9:15 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Workshop preparation notes
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Nov 18, 3:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}