import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Basic Greetings',
    description: 'Learn common Sanskrit greetings and basic words',
    unlocked: true,
    questions: [
      {
        id: 'q1',
        prompt: 'नमस्ते',
        transliteration: 'namaste',
        meaning: 'Hello/Goodbye (respectful greeting)',
        options: ['Thank you', 'Hello/Goodbye', 'Please', 'Excuse me'],
        correctIndex: 1
      },
      {
        id: 'q2',
        prompt: 'धन्यवाद',
        transliteration: 'dhanyavāda',
        meaning: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Please'],
        correctIndex: 1
      },
      {
        id: 'q3',
        prompt: 'कृपया',
        transliteration: 'kṛpayā',
        meaning: 'Please',
        options: ['Thank you', 'Sorry', 'Please', 'Welcome'],
        correctIndex: 2
      },
      {
        id: 'q4',
        prompt: 'क्षमा',
        transliteration: 'kṣamā',
        meaning: 'Forgiveness/Sorry',
        options: ['Forgiveness/Sorry', 'Peace', 'Love', 'Joy'],
        correctIndex: 0
      },
      {
        id: 'q5',
        prompt: 'शान्ति',
        transliteration: 'śānti',
        meaning: 'Peace',
        options: ['War', 'Peace', 'Anger', 'Fear'],
        correctIndex: 1
      },
      {
        id: 'q6',
        prompt: 'प्रेम',
        transliteration: 'prema',
        meaning: 'Love',
        options: ['Hate', 'Fear', 'Love', 'Anger'],
        correctIndex: 2
      },
      {
        id: 'q7',
        prompt: 'आनन्द',
        transliteration: 'ānanda',
        meaning: 'Bliss/Joy',
        options: ['Sadness', 'Bliss/Joy', 'Fear', 'Anger'],
        correctIndex: 1
      },
      {
        id: 'q8',
        prompt: 'सत्य',
        transliteration: 'satya',
        meaning: 'Truth',
        options: ['Lie', 'Truth', 'Doubt', 'Question'],
        correctIndex: 1
      },
      {
        id: 'q9',
        prompt: 'अहिंसा',
        transliteration: 'ahiṃsā',
        meaning: 'Non-violence',
        options: ['Violence', 'Non-violence', 'War', 'Fight'],
        correctIndex: 1
      },
      {
        id: 'q10',
        prompt: 'करुणा',
        transliteration: 'karuṇā',
        meaning: 'Compassion',
        options: ['Cruelty', 'Indifference', 'Compassion', 'Hatred'],
        correctIndex: 2
      }
    ]
  },
  {
    id: 'lesson-2',
    title: 'Nature & Elements',
    description: 'Discover words related to nature and natural elements',
    unlocked: false,
    questions: [
      {
        id: 'q11',
        prompt: 'सूर्य',
        transliteration: 'sūrya',
        meaning: 'Sun',
        options: ['Moon', 'Sun', 'Stars', 'Earth'],
        correctIndex: 1
      },
      {
        id: 'q12',
        prompt: 'चन्द्र',
        transliteration: 'candra',
        meaning: 'Moon',
        options: ['Moon', 'Sun', 'Stars', 'Sky'],
        correctIndex: 0
      },
      {
        id: 'q13',
        prompt: 'वायु',
        transliteration: 'vāyu',
        meaning: 'Air/Wind',
        options: ['Fire', 'Water', 'Air/Wind', 'Earth'],
        correctIndex: 2
      },
      {
        id: 'q14',
        prompt: 'जल',
        transliteration: 'jala',
        meaning: 'Water',
        options: ['Fire', 'Water', 'Air', 'Earth'],
        correctIndex: 1
      },
      {
        id: 'q15',
        prompt: 'अग्नि',
        transliteration: 'agni',
        meaning: 'Fire',
        options: ['Fire', 'Water', 'Air', 'Earth'],
        correctIndex: 0
      },
      {
        id: 'q16',
        prompt: 'पृथ्वी',
        transliteration: 'pṛthvī',
        meaning: 'Earth',
        options: ['Sky', 'Water', 'Air', 'Earth'],
        correctIndex: 3
      },
      {
        id: 'q17',
        prompt: 'आकाश',
        transliteration: 'ākāśa',
        meaning: 'Sky/Space',
        options: ['Ground', 'Sky/Space', 'Water', 'Mountain'],
        correctIndex: 1
      },
      {
        id: 'q18',
        prompt: 'वृक्ष',
        transliteration: 'vṛkṣa',
        meaning: 'Tree',
        options: ['Flower', 'Tree', 'Grass', 'Rock'],
        correctIndex: 1
      },
      {
        id: 'q19',
        prompt: 'पुष्प',
        transliteration: 'puṣpa',
        meaning: 'Flower',
        options: ['Leaf', 'Root', 'Flower', 'Stem'],
        correctIndex: 2
      },
      {
        id: 'q20',
        prompt: 'नदी',
        transliteration: 'nadī',
        meaning: 'River',
        options: ['Lake', 'River', 'Ocean', 'Pond'],
        correctIndex: 1
      }
    ]
  }
];