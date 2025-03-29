import React, { useEffect, useState } from 'react';
import { Moon, Sun, Wind } from 'lucide-react';
import { MoodState } from '../types';

interface FocusBubbleProps {
  moodState: MoodState;
}

const FocusBubble: React.FC<FocusBubbleProps> = ({ moodState }) => {
  const [theme, setTheme] = useState<'calm' | 'energize' | 'focus'>('calm');

  useEffect(() => {
    // Analyze mood and set appropriate theme
    const mood = moodState.mood.toLowerCase();
    if (mood.includes('anxious') || mood.includes('stressed') || mood.includes('overwhelmed')) {
      setTheme('calm');
    } else if (mood.includes('tired') || mood.includes('exhausted')) {
      setTheme('energize');
    } else {
      setTheme('focus');
    }
  }, [moodState.mood]);

  const themeStyles = {
    calm: {
      bg: 'bg-blue-50',
      text: 'text-blue-900',
      border: 'border-blue-200',
      icon: <Wind className="w-5 h-5 text-blue-600" />,
    },
    energize: {
      bg: 'bg-amber-50',
      text: 'text-amber-900',
      border: 'border-amber-200',
      icon: <Sun className="w-5 h-5 text-amber-600" />,
    },
    focus: {
      bg: 'bg-purple-50',
      text: 'text-purple-900',
      border: 'border-purple-200',
      icon: <Moon className="w-5 h-5 text-purple-600" />,
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div className={`mt-8 rounded-lg border ${currentTheme.bg} ${currentTheme.border} p-6`}>
      <div className="flex items-center space-x-3 mb-4">
        {currentTheme.icon}
        <h3 className={`text-lg font-medium ${currentTheme.text}`}>
          Focus Bubble Activated
        </h3>
      </div>

      <div className={`${currentTheme.text} space-y-4`}>
        <p className="text-sm">
          I notice you're feeling <strong>{moodState.mood}</strong> because{' '}
          {moodState.reason}. I've adjusted the interface to help you feel more balanced.
        </p>

        <div className="text-sm">
          <p className="font-medium mb-2">Adjustments made:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Reduced visual noise and distractions</li>
            <li>Adjusted color temperature for better focus</li>
            <li>Simplified layout elements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FocusBubble;