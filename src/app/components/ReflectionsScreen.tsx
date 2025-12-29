interface ReflectionsScreenProps {
  onNavigate: (screen: string) => void;
}

export function ReflectionsScreen({ onNavigate }: ReflectionsScreenProps) {
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
          <div className="w-12"></div> {/* Spacer for center alignment */}
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
    </div>
  );
}
