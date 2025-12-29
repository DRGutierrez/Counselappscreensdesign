import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { ResponseScreen } from './components/ResponseScreen';
import { ReflectionsScreen } from './components/ReflectionsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'response' | 'reflections'>('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      {/* iPhone Container */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#0a0a0a] shadow-2xl">
        {currentScreen === 'home' && <HomeScreen onNavigate={setCurrentScreen} />}
        {currentScreen === 'response' && <ResponseScreen onNavigate={setCurrentScreen} />}
        {currentScreen === 'reflections' && <ReflectionsScreen onNavigate={setCurrentScreen} />}
      </div>
    </div>
  );
}
