import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, Home, ChevronRight } from 'lucide-react';

interface ResultProps {
  score: number;
  accuracy: number;
  xpGained: number;
  onRetry: () => void;
  onHome: () => void;
  onNext?: () => void;
  hasNext: boolean;
}

export function Result({ 
  score, 
  accuracy, 
  xpGained, 
  onRetry, 
  onHome, 
  onNext, 
  hasNext 
}: ResultProps) {
  const getPerformanceMessage = () => {
    if (accuracy >= 90) return "Outstanding! 🎉";
    if (accuracy >= 70) return "Great job! 👏";
    if (accuracy >= 50) return "Good effort! 👍";
    return "Keep practicing! 💪";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-4 flex items-center justify-center">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center"
        >
          {/* Trophy Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
            className="mx-auto w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6"
          >
            <Trophy size={40} className="text-white" />
          </motion.div>

          {/* Performance Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-800 dark:text-white mb-2"
          >
            {getPerformanceMessage()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            Lesson completed
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">+{xpGained}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">XP Gained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{score}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{accuracy}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3"
          >
            {hasNext && onNext && (
              <button
                onClick={onNext}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                Next Lesson
                <ChevronRight size={20} />
              </button>
            )}
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onRetry}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                <RotateCcw size={18} />
                Retry
              </button>
              <button
                onClick={onHome}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
              >
                <Home size={18} />
                Home
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}