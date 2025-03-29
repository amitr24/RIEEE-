import React, { useState } from 'react';
import { Brain, MessageCircle, Type, X } from 'lucide-react';
import MoodInput from './components/MoodInput';
import FocusBubble from './components/FocusBubble';
import { MoodState } from './types';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [moodState, setMoodState] = useState<MoodState>({
    mood: '',
    reason: '',
    active: false
  });

  const handleMoodSubmit = (mood: string, reason: string) => {
    setMoodState({
      mood,
      reason,
      active: true
    });
    
    // Apply modifications to the host page
    if (document.body) {
      document.body.style.filter = 'grayscale(0.3)';
      document.body.style.transition = 'all 0.5s ease';
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset page modifications
    if (document.body) {
      document.body.style.filter = 'none';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200"
      >
        <Brain className="w-5 h-5" />
        <span>Open MoodSpace</span>
      </button>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="relative">
        <nav className="bg-white border-b">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                <span className="text-lg font-semibold text-gray-900">MoodSpace</span>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </nav>

        <div className="p-4">
          <MoodInput onSubmit={handleMoodSubmit} />
          {moodState.active && <FocusBubble moodState={moodState} />}
        </div>
      </div>
    </div>
  );
}

export default App;