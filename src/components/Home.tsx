import React from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Settings, Flame } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { UserProgress } from '../types';
import { lessons } from '../data/questions';

interface HomeProps {
  progress: UserProgress;
  onStartLesson: () => void;
  onShowLeaderboard: () => void;
  onShowSettings: () => void;
}

export function Home({ progress, onStartLesson, onShowLeaderboard, onShowSettings }: HomeProps) {
  const currentLesson = lessons[progress.currentLesson];
  const completedLessons = progress.completedLessons.length;
  const totalLessons = lessons.length;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md mx-auto pt-8 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Sanskrit Quest
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Master the ancient language
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600">{progress.points}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Points</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg text-center">
            <div className="flex items-center justify-center gap-1 text-3xl font-bold text-red-500">
              <Flame size={24} />
              {progress.streak}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Day Streak</div>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Progress
            </h2>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {completedLessons}/{totalLessons} lessons
            </span>
          </div>
          <ProgressBar current={completedLessons} total={totalLessons} className="mb-4" />
          
          {currentLesson && (
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 dark:text-white mb-1">
                Next: {currentLesson.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {currentLesson.description}
              </p>
            </div>
          )}
        </motion.div>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={onStartLesson}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl font-semibold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-3 hover:from-orange-600 hover:to-orange-700 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!currentLesson?.unlocked}
        >
          <Play size={24} />
          Continue Learning
        </motion.button>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          <button
            onClick={onShowLeaderboard}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            <Trophy size={20} />
            Leaderboard
          </button>
          <button
            onClick={onShowSettings}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            <Settings size={20} />
            Settings
          </button>
        </motion.div>
      </div>
    </div>
  );
}