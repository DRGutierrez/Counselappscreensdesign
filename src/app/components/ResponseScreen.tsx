import { ChevronRight, Ellipsis } from 'lucide-react';
import { useState } from 'react';

interface ResponseScreenProps {
  onNavigate: (screen: string) => void;
}

export function ResponseScreen({ onNavigate }: ResponseScreenProps) {
  const [memoryAcknowledged, setMemoryAcknowledged] = useState(true);

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
          <div className="w-12"></div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-12 space-y-12">
        {/* Summary Section */}
        <div className="space-y-4">
          <h2 className="text-[#7c7c7c] tracking-wider uppercase text-xs">
            Summary
          </h2>
          <p className="text-[#d4d4d4] leading-relaxed">
            You're thinking about ways to improve your morning routine and create more intentional time for reflection before starting work.
          </p>
        </div>

        {/* Organized Thoughts Section */}
        <div className="space-y-4">
          <h2 className="text-[#7c7c7c] tracking-wider uppercase text-xs">
            Organized thoughts
          </h2>
          <div className="space-y-3">
            <p className="text-[#d4d4d4] leading-relaxed">
              • Wake up 30 minutes earlier
            </p>
            <p className="text-[#d4d4d4] leading-relaxed">
              • Journal for 10 minutes with coffee
            </p>
            <p className="text-[#d4d4d4] leading-relaxed">
              • Review daily intentions before opening laptop
            </p>
            <p className="text-[#d4d4d4] leading-relaxed">
              • Consider a short walk or stretching
            </p>
          </div>
        </div>

        {/* Optional Next Step */}
        <div className="pt-4">
          <button 
            onClick={() => onNavigate('reflections')}
            className="text-[#7c7c7c] hover:text-[#9c9c9c] transition-colors text-sm"
          >
            Would you like me to turn this into a simple plan?
          </button>
        </div>

        {/* Memory Acknowledgment */}
        {memoryAcknowledged && (
          <div className="pt-12 space-y-2">
            <p className="text-[#8a8a8a] text-sm">
              I'll remember this.
            </p>
            <div className="flex items-center gap-3">
              <p className="text-[#5a5a5a] text-xs">
                You can review or remove memories anytime.
              </p>
              <button
                onClick={() => setMemoryAcknowledged(false)}
                className="text-[#8a8a8a] hover:text-[#9ca3af] text-xs transition-colors"
              >
                Undo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}