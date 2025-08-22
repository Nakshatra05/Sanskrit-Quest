import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { X, Volume2 } from 'lucide-react';
import { OptionCard } from './OptionCard';
import { ProgressBar } from './ProgressBar';
import { Question } from '../types';

interface LessonProps {
  questions: Question[];
  onComplete: (score: number, correct: number, total: number) => void;
  onExit: () => void;
  title: string;
}

export function Lesson({ questions, onComplete, onExit, title }: LessonProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    
    setSelectedOption(optionIndex);
    setShowFeedback(true);
    
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    
    if (isCorrect) {
      setScore(prev => prev + 10);
      setCorrectAnswers(prev => prev + 1);
      setShowConfetti(true);
      
      // Auto advance after correct answer
      setTimeout(() => {
        handleNext();
      }, 1500);
    } else {
      setScore(prev => Math.max(0, prev - 5));
    }
  };

  const handleNext = () => {
    setShowConfetti(false);
    setSelectedOption(null);
    setShowFeedback(false);
    
    if (isLastQuestion) {
      onComplete(score, correctAnswers, questions.length);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={100}
          recycle={false}
          gravity={0.3}
        />
      )}
      
      <div className="max-w-md mx-auto pt-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onExit}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {currentQuestionIndex + 1}/{questions.length}
          </div>
        </div>

        {/* Progress */}
        <ProgressBar
          current={currentQuestionIndex}
          total={questions.length}
          className="mb-8"
        />

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-8"
        >
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              {currentQuestion.prompt}
            </div>
            {currentQuestion.transliteration && (
              <div className="text-lg text-gray-600 dark:text-gray-300 italic mb-2">
                {currentQuestion.transliteration}
              </div>
            )}
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              <Volume2 size={24} />
            </button>
          </div>

          <div className="text-center text-gray-600 dark:text-gray-300 mb-6">
            What does this mean?
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <OptionCard
                key={index}
                option={option}
                isSelected={selectedOption === index}
                isCorrect={showFeedback && index === currentQuestion.correctIndex}
                isWrong={showFeedback && selectedOption === index && index !== currentQuestion.correctIndex}
                onSelect={() => handleOptionSelect(index)}
                disabled={showFeedback}
              />
            ))}
          </div>
        </motion.div>

        {/* Next Button */}
        {showFeedback && selectedOption !== currentQuestion.correctIndex && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleNext}
            className="w-full bg-blue-600 text-white text-xl font-semibold py-4 px-6 rounded-2xl shadow-lg hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLastQuestion ? 'Complete' : 'Continue'}
          </motion.button>
        )}
      </div>
    </div>
  );
}