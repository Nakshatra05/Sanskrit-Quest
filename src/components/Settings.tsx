import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Moon, Sun, Volume2, VolumeX, RotateCcw, Palette } from 'lucide-react';
import { Settings as SettingsType } from '../types';

interface SettingsProps {
  onBack: () => void;
  settings: SettingsType;
  onUpdateSettings: (updates: Partial<SettingsType>) => void;
  onResetProgress: () => void;
}

export function Settings({ 
  onBack, 
  settings, 
  onUpdateSettings, 
  onResetProgress 
}: SettingsProps) {
  const toggleDarkMode = () => {
    onUpdateSettings({ darkMode: !settings.darkMode });
    document.documentElement.classList.toggle('dark', !settings.darkMode);
  };

  const toggleSound = () => {
    onUpdateSettings({ soundEnabled: !settings.soundEnabled });
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all your progress? This action cannot be undone.')) {
      onResetProgress();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md mx-auto pt-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Settings
          </h1>
          <div className="w-10" />
        </div>

        {/* Settings Options */}
        <div className="space-y-4">
          {/* Dark Mode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {settings.darkMode ? (
                  <Moon className="text-blue-600" size={24} />
                ) : (
                  <Sun className="text-yellow-600" size={24} />
                )}
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    Dark Mode
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Switch to {settings.darkMode ? 'light' : 'dark'} theme
                  </div>
                </div>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`w-12 h-6 rounded-full p-1 transition-all ${
                  settings.darkMode
                    ? 'bg-blue-600'
                    : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    settings.darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </motion.div>

          {/* Sound */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {settings.soundEnabled ? (
                  <Volume2 className="text-green-600" size={24} />
                ) : (
                  <VolumeX className="text-gray-600" size={24} />
                )}
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    Sound Effects
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Play sounds for feedback
                  </div>
                </div>
              </div>
              <button
                onClick={toggleSound}
                className={`w-12 h-6 rounded-full p-1 transition-all ${
                  settings.soundEnabled
                    ? 'bg-green-600'
                    : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    settings.soundEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </motion.div>

          {/* Background Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Palette className="text-purple-600" size={24} />
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    Animated Background
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Enable or disable dynamic gradient background
                  </div>
                </div>
              </div>
              <button
                onClick={() => onUpdateSettings({ backgroundAnimationEnabled: !settings.backgroundAnimationEnabled })}
                className={`w-12 h-6 rounded-full p-1 transition-all ${
                  settings.backgroundAnimationEnabled
                    ? 'bg-purple-600'
                    : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                    settings.backgroundAnimationEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {!settings.backgroundAnimationEnabled && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Custom Background Color
                </label>
                <input
                  type="color"
                  id="backgroundColor"
                  value={settings.customBackgroundColor}
                  onChange={(e) => onUpdateSettings({ customBackgroundColor: e.target.value })}
                  className="w-full h-10 rounded-lg border-none cursor-pointer"
                  style={{ padding: '0', border: 'none' }}
                />
              </div>
            )}
          </motion.div>

          {/* Reset Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg"
          >
            <button
              onClick={handleResetProgress}
              className="w-full flex items-center gap-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 rounded-xl transition-all"
            >
              <RotateCcw size={24} />
              <div className="text-left">
                <div className="font-semibold">
                  Reset Progress
                </div>
                <div className="text-sm text-red-500">
                  Clear all learning data
                </div>
              </div>
            </button>
          </motion.div>
        </div>

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            Sanskrit Quest
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
            Learn Sanskrit vocabulary through gamified lessons
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Version 1.0.0
          </p>
        </motion.div>
      </div>
    </div>
  );
}