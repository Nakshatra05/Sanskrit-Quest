# Sanskrit Quest 🕉️

A gamified Sanskrit vocabulary learning app built with React and TypeScript. Learn ancient Sanskrit words through fun, interactive quizzes with a Duolingo-inspired interface.

## Features ✨

- **Interactive Lessons**: Multiple choice questions with Sanskrit words and English translations
- **Gamification**: Points system (+10 for correct, -5 for wrong, no negatives), daily streaks, and progress tracking
- **Beautiful UI**: Mobile-first design with smooth animations and confetti rewards
- **Progress Persistence**: All progress saved in localStorage
- **Dark Mode**: Toggle between light and dark themes
- **Local Leaderboard**: Compete with demo profiles
- **Responsive Design**: Optimized for all device sizes

## Getting Started 🚀

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd sanskrit-quest

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Building for Production
```bash
# Build the app
npm run build

# Preview the production build
npm run preview
```

## Project Structure 📁

```
src/
├── components/          # React components
│   ├── Home.tsx        # Home screen with progress and navigation
│   ├── Lesson.tsx      # Quiz interface with questions
│   ├── Result.tsx      # Results screen after lesson completion
│   ├── Leaderboard.tsx # Local leaderboard display
│   ├── Settings.tsx    # Settings and preferences
│   ├── ProgressBar.tsx # Progress visualization component
│   └── OptionCard.tsx  # Quiz option button component
├── hooks/              # Custom React hooks
│   ├── useGameState.ts # Game state management
│   └── useLocalStorage.ts # localStorage wrapper
├── data/               # Static data and content
│   └── questions.ts    # Sanskrit vocabulary lessons
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces
└── App.tsx             # Main application component
```

## Adding New Lessons 📚

To add new vocabulary lessons:

1. Open `src/data/questions.ts`
2. Add a new lesson object to the `lessons` array:

```typescript
{
  id: 'lesson-3',
  title: 'Your Lesson Title',
  description: 'Lesson description',
  unlocked: false, // Will be unlocked when previous lessons are completed
  questions: [
    {
      id: 'unique-question-id',
      prompt: 'Sanskrit word in Devanagari',
      transliteration: 'romanized-pronunciation', // Optional
      meaning: 'English meaning',
      options: ['Wrong answer', 'Correct answer', 'Wrong answer', 'Wrong answer'],
      correctIndex: 1 // Index of the correct answer (0-based)
    },
    // Add more questions...
  ]
}
```

## Game Mechanics 🎮

### Scoring System
- **Correct Answer**: +10 points
- **Wrong Answer**: -5 points (score cannot go below 0)
- **Bonus**: Maintain daily streaks for motivation

### Progress Tracking
- Lessons unlock sequentially as previous ones are completed
- Daily streaks encourage consistent learning
- All progress persists between sessions using localStorage

### Streaks
- Streak increases by 1 when completing any lesson on a new day
- Streak continues if you study on consecutive days
- Streak resets to 1 if you skip a day (but doesn't go to 0)

## Technologies Used 🛠️

- **React 18** with TypeScript
- **Framer Motion** for animations and page transitions
- **Tailwind CSS** for responsive styling
- **React Confetti** for celebration effects
- **Lucide React** for icons
- **Vite** for fast development and building

## Contributing 🤝

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-lesson`
3. Add your changes and commit: `git commit -m 'Add new lesson on colors'`
4. Push to your branch: `git push origin feature/new-lesson`
5. Submit a pull request

## License 📄

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments 🙏

- Inspired by Duolingo's gamified learning approach
- Sanskrit vocabulary curated from traditional texts and modern usage
- Icons provided by Lucide React
- Animations powered by Framer Motion

---

**Happy Learning! 📖✨**

*"सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"*  
*"May all beings be happy, may all beings be healthy"*