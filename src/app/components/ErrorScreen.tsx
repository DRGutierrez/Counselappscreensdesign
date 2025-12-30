import { Mic } from 'lucide-react';

interface ErrorScreenProps {
  onNavigate: (screen: string) => void;
  onTryAgain: () => void;
}

export function ErrorScreen({ onNavigate, onTryAgain }: ErrorScreenProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      {/* Microphone Icon - Inactive State */}
      <div className="mb-12">
        <Mic className="w-20 h-20 text-[#3a3a3a]" strokeWidth={1.5} />
      </div>

      {/* Primary Message */}
      <h1 className="text-base text-[#9ca3af] mb-3 text-center">
        I didn't catch that.
      </h1>

      {/* Secondary Message */}
      <p className="text-sm text-[#5a5a5a] text-center mb-16 max-w-xs">
        You can try again, or type instead.
      </p>

      {/* Actions */}
      <div className="w-full max-w-xs space-y-3">
        <button
          onClick={onTryAgain}
          className="w-full py-4 text-[#d4d4d4] hover:text-[#e5e5e5] transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => onNavigate('home')}
          className="w-full py-4 text-[#8a8a8a] hover:text-[#9ca3af] transition-colors text-sm"
        >
          Type instead
        </button>
      </div>
    </div>
  );
}