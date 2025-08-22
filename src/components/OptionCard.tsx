import React from 'react';
import { motion } from 'framer-motion';

interface OptionCardProps {
  option: string;
  isSelected: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

export function OptionCard({
  option,
  isSelected,
  isCorrect,
  isWrong,
  onSelect,
  disabled = false
}: OptionCardProps) {
  const getCardColor = () => {
    if (isCorrect) return 'bg-green-100 border-green-500 text-green-800';
    if (isWrong) return 'bg-red-100 border-red-500 text-red-800';
    if (isSelected) return 'bg-blue-100 border-blue-500 text-blue-800';
    return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700';
  };

  return (
    <motion.button
      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 font-medium text-lg ${getCardColor()}`}
      onClick={onSelect}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      animate={isWrong ? {
        x: [-10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      } : {}}
    >
      {option}
    </motion.button>
  );
}