import { useLocalStorage } from './useLocalStorage';
import { UserProgress, Settings } from '../types';

const defaultProgress: UserProgress = {
  points: 0,
  streak: 0,
  lastStudyDate: '',
  completedLessons: [],
  currentLesson: 0
};

const defaultSettings: Settings = {
  darkMode: false,
  soundEnabled: true
};

export function useGameState() {
  const [progress, setProgress] = useLocalStorage('sanskrit-progress', defaultProgress);
  const [settings, setSettings] = useLocalStorage('sanskrit-settings', defaultSettings);

  const updateProgress = (updates: Partial<UserProgress>) => {
    setProgress(prev => ({ ...prev, ...updates }));
  };

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    const lastStudyDate = new Date(progress.lastStudyDate).toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastStudyDate !== today) {
      if (lastStudyDate === yesterday) {
        // Continue streak
        updateProgress({
          streak: progress.streak + 1,
          lastStudyDate: today
        });
      } else if (progress.lastStudyDate) {
        // Break streak
        updateProgress({
          streak: 1,
          lastStudyDate: today
        });
      } else {
        // First time
        updateProgress({
          streak: 1,
          lastStudyDate: today
        });
      }
    }
  };

  return {
    progress,
    settings,
    updateProgress,
    updateSettings,
    resetProgress,
    updateStreak
  };
}