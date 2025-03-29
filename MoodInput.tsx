import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

interface MoodInputProps {
  onSubmit: (mood: string, reason: string) => void;
}

const MoodInput: React.FC<MoodInputProps> = ({ onSubmit }) => {
  const [mood, setMood] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mood && reason) {
      onSubmit(mood, reason);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">How are you feeling?</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="mood" className="block text-sm font-medium text-gray-700">
            Right now I feel...
          </label>
          <input
            type="text"
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="anxious, tired, overwhelmed..."
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
            because...
          </label>
          <input
            type="text"
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="I have a lot on my mind..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Send className="w-4 h-4 mr-2" />
          Activate Focus Mode
        </button>
      </form>
    </div>
  );
};

export default MoodInput;