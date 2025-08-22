export interface Question {
  id: string;
  prompt: string;
  transliteration?: string;
  meaning: string;
  options: string[];
  correctIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  unlocked: boolean;
}

export interface UserProgress {
  points: number;
  streak: number;
  lastStudyDate: string;
  completedLessons: string[];
  currentLesson: number;
}

export interface Settings {
  darkMode: boolean;
  soundEnabled: boolean;
  backgroundAnimationEnabled: boolean;
  customBackgroundColor: string;
}

export interface LeaderboardEntry {
  name: string;
  points: number;
  avatar: string;
}