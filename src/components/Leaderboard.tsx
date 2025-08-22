import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Medal, Award } from 'lucide-react';
import { LeaderboardEntry } from '../types';

interface LeaderboardProps {
  onBack: () => void;
  userPoints: number;
}

export function Leaderboard({ onBack, userPoints }: LeaderboardProps) {
  const demoProfiles: LeaderboardEntry[] = [
    { name: 'Sanskrit Master', points: 2450, avatar: '🧘' },
    { name: 'Yoga Guru', points: 1890, avatar: '🕉️' },
    { name: 'Temple Scholar', points: 1650, avatar: '📿' },
  ];

  const allEntries = [
    ...demoProfiles,
    { name: 'You', points: userPoints, avatar: '🙂' }
  ].sort((a, b) => b.points - a.points);

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0: return <Trophy className="text-yellow-500" size={24} />;
      case 1: return <Medal className="text-gray-400" size={24} />;
      case 2: return <Award className="text-orange-500" size={24} />;
      default: return <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">{index + 1}</div>;
    }
  };

  const getRankColor = (index: number) => {
    switch (index) {
      case 0: return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
      case 1: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
      case 2: return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200';
      default: return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-4">
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
            Leaderboard
          </h1>
          <div className="w-10" />
        </div>

        {/* Leaderboard */}
        <div className="space-y-3">
          {allEntries.map((entry, index) => (
            <motion.div
              key={entry.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-2xl border-2 shadow-sm ${getRankColor(index)} ${
                entry.name === 'You' ? 'ring-2 ring-blue-300 dark:ring-blue-600' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {getRankIcon(index)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{entry.avatar}</span>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">
                        {entry.name}
                      </div>
                      {entry.name === 'You' && (
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          Your rank: #{index + 1}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800 dark:text-white">
                    {entry.points}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    points
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Keep learning to climb the ranks!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Complete lessons to earn more points
          </p>
        </motion.div>
      </div>
    </div>
  );
}