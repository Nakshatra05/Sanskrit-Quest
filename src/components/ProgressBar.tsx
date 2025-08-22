import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className = '' }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 ${className}`}>
      <motion.div
        className="bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}