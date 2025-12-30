import { Ellipsis } from 'lucide-react';
import { useState } from 'react';

interface ReflectionsScreenProps {
  onNavigate: (screen: string) => void;
}

export function ReflectionsScreen({ onNavigate }: ReflectionsScreenProps) {
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
            className="text-[#e5e5e5]"
          >
            Reflections
          </button>
          <span className="text-[#3a3a3a]">·</span>
          <button 
            onClick={() => onNavigate('history')}
            className="text-[#5a5a5a] hover:text-[#7a7a7a] transition-colors"
          >
            History
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
                  Morning routine feels scattered—need to start earlier and build in buffer time for coffee and journaling before diving into work.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  9:24 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Project timeline is tighter than expected. Should probably reach out to the design team today about that component library delay.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  2:15 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Feeling good about wrapping up today. Three solid hours of deep work, and I finally shipped that feature I've been working on all week.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  5:42 PM
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
                  Weekend plans taking shape—want to visit that new cafe downtown, finish reading that book, and maybe catch up with Sarah.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  6:30 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Thinking about career trajectory again. Do I want to go deeper as an IC or start exploring management? No rush, but worth exploring.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  11:20 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Morning walk helped clear my head. Should make that a daily thing—fifteen minutes makes a difference.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  8:05 AM
                </p>
              </div>
            </div>
          </div>

          {/* This Week */}
          <div className="mb-8">
            <p className="text-[#5a5a5a] text-sm mb-4">This Week</p>
            <div className="space-y-4">
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Just finished "Four Thousand Weeks"—lots to unpack about time management and priorities. Want to revisit the chapter on efficiency vs. meaning.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 26, 4:45 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  New year fitness goals: three gym sessions per week, daily walks, and actually stick with meal prep on Sundays.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 25, 10:00 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Apartment is feeling cluttered. This weekend: tackle the closet, donate clothes I haven't worn in six months, reorganize the desk area.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 24, 7:15 PM
                </p>
              </div>
            </div>
          </div>

          {/* Earlier This Month */}
          <div>
            <p className="text-[#5a5a5a] text-sm mb-4">Earlier This Month</p>
            <div className="space-y-4">
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Holiday season reflection: grateful for steady work, good health, and the people who show up. Want to be more intentional about staying in touch.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 20, 9:00 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Team retro went well. Clear action items, good energy. Nice to see everyone aligned on Q1 priorities.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 18, 3:30 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Noticed I'm most productive between 9–12. Should protect that time better—no meetings, notifications off, deep work only.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 15, 1:45 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Client call ran long but good insights emerged. They're open to phased rollout, which buys us time and reduces risk.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 12, 4:00 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Weekend reset worked. Caught up on sleep, meal prepped, cleaned the apartment. Starting the week with momentum.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 9, 8:30 AM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Learning session on React patterns was solid. Server components finally clicking. Should try implementing this week.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 6, 2:20 PM
                </p>
              </div>
              <div className="py-4 border-b border-[#1a1a1a]">
                <p className="text-[#e5e5e5] mb-2 leading-relaxed">
                  Therapy check-in reminded me to pause and actually notice progress. Easy to focus on what's left rather than how far I've come.
                </p>
                <p className="text-[#5a5a5a] text-sm">
                  Dec 3, 10:15 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}