import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from './components/Home';
import { Lesson } from './components/Lesson';
import { Result } from './components/Result';
import { Leaderboard } from './components/Leaderboard';
import { Settings } from './components/Settings';
import { useGameState } from './hooks/useGameState';
import { lessons } from './data/questions';

type Screen = 'home' | 'lesson' | 'result' | 'leaderboard' | 'settings';

interface ResultData {
  score: number;
  accuracy: number;
  xpGained: number;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const { progress, settings, updateProgress, updateSettings, resetProgress, updateStreak } = useGameState();

  useEffect(() => {
    // Apply dark mode on load
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply background animation or custom color
    if (settings.backgroundAnimationEnabled) {
      document.body.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
      document.body.style.backgroundSize = '400% 400%';
      document.body.style.animation = 'gradientBG 15s ease infinite';
    } else {
      document.body.style.background = settings.customBackgroundColor;
      document.body.style.backgroundSize = 'auto';
      document.body.style.animation = 'none';
    }
  }, [settings.darkMode, settings.backgroundAnimationEnabled, settings.customBackgroundColor]);

  const handleStartLesson = () => {
    setCurrentScreen('lesson');
  };

  const handleLessonComplete = (score: number, correct: number, total: number) => {
    const accuracy = Math.round((correct / total) * 100);
    const xpGained = score;
    
    // Update progress
    const currentLessonId = lessons[progress.currentLesson]?.id;
    const isNewCompletion = !progress.completedLessons.includes(currentLessonId);
    
    if (isNewCompletion) {
      updateStreak();
      updateProgress({
        points: progress.points + xpGained,
        completedLessons: [...progress.completedLessons, currentLessonId],
        currentLesson: Math.min(progress.currentLesson + 1, lessons.length - 1)
      });
      
      // Unlock next lesson
      if (progress.currentLesson + 1 < lessons.length) {
        lessons[progress.currentLesson + 1].unlocked = true;
      }
    }
    
    setResultData({ score, accuracy, xpGained });
    setCurrentScreen('result');
  };

  const handleRetryLesson = () => {
    setCurrentScreen('lesson');
  };

  const handleNextLesson = () => {
    if (progress.currentLesson < lessons.length - 1) {
      setCurrentScreen('lesson');
    } else {
      setCurrentScreen('home');
    }
  };

  const handleShowLeaderboard = () => {
    setCurrentScreen('leaderboard');
  };

  const handleShowSettings = () => {
    setCurrentScreen('settings');
  };

  const handleGoHome = () => {
    setCurrentScreen('home');
  };

  const handleResetProgress = () => {
    resetProgress();
    // Reset lesson locks
    lessons.forEach((lesson, index) => {
      lesson.unlocked = index === 0;
    });
  };

  const currentLesson = lessons[progress.currentLesson];
  const hasNextLesson = progress.currentLesson < lessons.length - 1;

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <AnimatePresence mode="wait">
        {currentScreen === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <Home
              progress={progress}
              onStartLesson={handleStartLesson}
              onShowLeaderboard={handleShowLeaderboard}
              onShowSettings={handleShowSettings}
            />
          </motion.div>
        )}

        {currentScreen === 'lesson' && currentLesson && (
          <motion.div
            key="lesson"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <Lesson
              questions={currentLesson.questions}
              onComplete={handleLessonComplete}
              onExit={handleGoHome}
              title={currentLesson.title}
            />
          </motion.div>
        )}

        {currentScreen === 'result' && resultData && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Result
              score={resultData.score}
              accuracy={resultData.accuracy}
              xpGained={resultData.xpGained}
              onRetry={handleRetryLesson}
              onHome={handleGoHome}
              onNext={hasNextLesson ? handleNextLesson : undefined}
              hasNext={hasNextLesson}
            />
          </motion.div>
        )}

        {currentScreen === 'leaderboard' && (
          <motion.div
            key="leaderboard"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <Leaderboard
              onBack={handleGoHome}
              userPoints={progress.points}
            />
          </motion.div>
        )}

        {currentScreen === 'settings' && (
          <motion.div
            key="settings"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <Settings
              onBack={handleGoHome}
              settings={settings}
              onUpdateSettings={updateSettings}
              onResetProgress={handleResetProgress}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;