import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Common Sanskrit Nouns',
    description: 'Learn essential Sanskrit nouns for everyday objects and concepts.',
    unlocked: true,
    questions: [
      {
        id: 'q1',
        prompt: 'रामः',
        transliteration: 'Rāmaḥ',
        meaning: 'Rama',
        options: ['Krishna', 'Shiva', 'Vishnu', 'Rama'],
        correctIndex: 3
      },
      {
        id: 'q2',
        prompt: 'गृहम्',
        transliteration: 'Gṛham',
        meaning: 'House',
        options: ['Tree', 'River', 'Mountain', 'House'],
        correctIndex: 3
      },
      {
        id: 'q3',
        prompt: 'फलम्',
        transliteration: 'Phalam',
        meaning: 'Fruit',
        options: ['Book', 'Flower', 'Vegetable', 'Fruit'],
        correctIndex: 3
      },
      {
        id: 'q4',
        prompt: 'पुस्तकम्',
        transliteration: 'Pustakam',
        meaning: 'Book',
        options: ['Pen', 'Paper', 'Table', 'Book'],
        correctIndex: 3
      },
      {
        id: 'q5',
        prompt: 'वृक्षः',
        transliteration: 'Vṛkṣaḥ',
        meaning: 'Tree',
        options: ['Bush', 'Plant', 'Flower', 'Tree'],
        correctIndex: 3
      },
      {
        id: 'q6',
        prompt: 'नदी',
        transliteration: 'Nadī',
        meaning: 'River',
        options: ['Lake', 'Ocean', 'Pond', 'River'],
        correctIndex: 3
      },
      {
        id: 'q7',
        prompt: 'सूर्यः',
        transliteration: 'Sūryaḥ',
        meaning: 'Sun',
        options: ['Moon', 'Star', 'Planet', 'Sun'],
        correctIndex: 3
      },
      {
        id: 'q8',
        prompt: 'चन्द्रः',
        transliteration: 'Candraḥ',
        meaning: 'Moon',
        options: ['Sun', 'Star', 'Comet', 'Moon'],
        correctIndex: 3
      },
      {
        id: 'q9',
        prompt: 'ग्रामः',
        transliteration: 'Grāmaḥ',
        meaning: 'Village',
        options: ['City', 'Town', 'Country', 'Village'],
        correctIndex: 3
      },
      {
        id: 'q10',
        prompt: 'नगरम्',
        transliteration: 'Nagaram',
        meaning: 'City',
        options: ['Village', 'Town', 'Metropolis', 'City'],
        correctIndex: 3
      },
      {
        id: 'q11',
        prompt: 'द्वारम्',
        transliteration: 'Dvāram',
        meaning: 'Door',
        options: ['Window', 'Wall', 'Gate', 'Door'],
        correctIndex: 3
      },
      {
        id: 'q12',
        prompt: 'शाला',
        transliteration: 'Śālā',
        meaning: 'School',
        options: ['House', 'Temple', 'Market', 'School'],
        correctIndex: 3
      },
      {
        id: 'q13',
        prompt: 'मार्गः',
        transliteration: 'Mārgaḥ',
        meaning: 'Road / Path',
        options: ['Street', 'Bridge', 'Tunnel', 'Road / Path'],
        correctIndex: 3
      },
      {
        id: 'q14',
        prompt: 'जलम्',
        transliteration: 'Jalam',
        meaning: 'Water',
        options: ['Fire', 'Earth', 'Air', 'Water'],
        correctIndex: 3
      },
      {
        id: 'q15',
        prompt: 'अग्निः',
        transliteration: 'Agniḥ',
        meaning: 'Fire',
        options: ['Water', 'Earth', 'Air', 'Fire'],
        correctIndex: 3
      },
      {
        id: 'q16',
        prompt: 'पृथिवी',
        transliteration: 'Pṛthivī',
        meaning: 'Earth',
        options: ['Sky', 'Moon', 'Sun', 'Earth'],
        correctIndex: 3
      },
      {
        id: 'q17',
        prompt: 'वायु',
        transliteration: 'Vāyu',
        meaning: 'Air / Wind',
        options: ['Water', 'Fire', 'Earth', 'Air / Wind'],
        correctIndex: 3
      },
      {
        id: 'q18',
        prompt: 'आकाशः',
        transliteration: 'Ākāśaḥ',
        meaning: 'Sky',
        options: ['Ground', 'Water', 'Space', 'Sky'],
        correctIndex: 3
      },
      {
        id: 'q19',
        prompt: 'भोजनम्',
        transliteration: 'Bhojanam',
        meaning: 'Food / Meal',
        options: ['Drink', 'Rest', 'Sleep', 'Food / Meal'],
        correctIndex: 3
      },
      {
        id: 'q20',
        prompt: 'गङ्गा',
        transliteration: 'Gaṅgā',
        meaning: 'Ganga River',
        options: ['Yamuna River', 'Saraswati River', 'Indus River', 'Ganga River'],
        correctIndex: 3
      },
      {
        id: 'q21',
        prompt: 'पत्रम्',
        transliteration: 'Patram',
        meaning: 'Leaf / Paper',
        options: ['Branch', 'Root', 'Flower', 'Leaf / Paper'],
        correctIndex: 3
      },
      {
        id: 'q22',
        prompt: 'शिला',
        transliteration: 'Śilā',
        meaning: 'Stone',
        options: ['Sand', 'Rock', 'Pebble', 'Stone'],
        correctIndex: 3
      },
      {
        id: 'q23',
        prompt: 'काष्ठम्',
        transliteration: 'Kāṣṭham',
        meaning: 'Wood',
        options: ['Metal', 'Plastic', 'Glass', 'Wood'],
        correctIndex: 3
      },
      {
        id: 'q24',
        prompt: 'पशुः',
        transliteration: 'Paśuḥ',
        meaning: 'Animal',
        options: ['Bird', 'Insect', 'Fish', 'Animal'],
        correctIndex: 3
      },
      {
        id: 'q25',
        prompt: 'मृगः',
        transliteration: 'Mṛgaḥ',
        meaning: 'Deer',
        options: ['Tiger', 'Lion', 'Elephant', 'Deer'],
        correctIndex: 3
      },
      {
        id: 'q26',
        prompt: 'सिंहः',
        transliteration: 'Siṃhaḥ',
        meaning: 'Lion',
        options: ['Tiger', 'Bear', 'Wolf', 'Lion'],
        correctIndex: 3
      },
      {
        id: 'q27',
        prompt: 'माकडः',
        transliteration: 'Mākadaḥ',
        meaning: 'Monkey',
        options: ['Gorilla', 'Chimpanzee', 'Baboon', 'Monkey'],
        correctIndex: 3
      },
      {
        id: 'q28',
        prompt: 'पक्षी',
        transliteration: 'Pakṣī',
        meaning: 'Bird',
        options: ['Fish', 'Reptile', 'Mammal', 'Bird'],
        correctIndex: 3
      },
      {
        id: 'q29',
        prompt: 'कपोतः',
        transliteration: 'Kapotaḥ',
        meaning: 'Pigeon / Dove',
        options: ['Sparrow', 'Crow', 'Eagle', 'Pigeon / Dove'],
        correctIndex: 3
      },
      {
        id: 'q30',
        prompt: 'मत्स्यः',
        transliteration: 'Matsyaḥ',
        meaning: 'Fish',
        options: ['Shark', 'Whale', 'Dolphin', 'Fish'],
        correctIndex: 3
      },
      {
        id: 'q31',
        prompt: 'समुद्रम्',
        transliteration: 'Samudram',
        meaning: 'Ocean',
        options: ['Lake', 'River', 'Pond', 'Ocean'],
        correctIndex: 3
      },
      {
        id: 'q32',
        prompt: 'पर्वतः',
        transliteration: 'Parvataḥ',
        meaning: 'Mountain',
        options: ['Hill', 'Valley', 'Plateau', 'Mountain'],
        correctIndex: 3
      },
      {
        id: 'q33',
        prompt: 'वनम्',
        transliteration: 'Vanam',
        meaning: 'Forest',
        options: ['Jungle', 'Woods', 'Grove', 'Forest'],
        correctIndex: 3
      },
      {
        id: 'q34',
        prompt: 'मार्गः',
        transliteration: 'Mārgaḥ',
        meaning: 'Path',
        options: ['Road', 'Street', 'Lane', 'Path'],
        correctIndex: 3
      },
      {
        id: 'q35',
        prompt: 'घरः',
        transliteration: 'Gṛhaḥ',
        meaning: 'Home',
        options: ['House', 'Dwelling', 'Residence', 'Home'],
        correctIndex: 3
      },
      {
        id: 'q36',
        prompt: 'धनम्',
        transliteration: 'Dhanam',
        meaning: 'Wealth / Money',
        options: ['Poverty', 'Riches', 'Currency', 'Wealth / Money'],
        correctIndex: 3
      },
      {
        id: 'q37',
        prompt: 'रथः',
        transliteration: 'Rathaḥ',
        meaning: 'Chariot / Vehicle',
        options: ['Car', 'Bike', 'Horse', 'Chariot / Vehicle'],
        correctIndex: 3
      },
      {
        id: 'q38',
        prompt: 'युद्धम्',
        transliteration: 'Yuddham',
        meaning: 'War / Battle',
        options: ['Peace', 'Conflict', 'Fight', 'War / Battle'],
        correctIndex: 3
      },
      {
        id: 'q39',
        prompt: 'शत्रुः',
        transliteration: 'Śatruḥ',
        meaning: 'Enemy',
        options: ['Friend', 'Ally', 'Opponent', 'Enemy'],
        correctIndex: 3
      },
      {
        id: 'q40',
        prompt: 'मित्रः',
        transliteration: 'Mitraḥ',
        meaning: 'Friend',
        options: ['Enemy', 'Stranger', 'Acquaintance', 'Friend'],
        correctIndex: 3
      },
      {
        id: 'q41',
        prompt: 'विद्यालयः',
        transliteration: 'Vidyālayaḥ',
        meaning: 'School',
        options: ['College', 'University', 'Library', 'School'],
        correctIndex: 3
      },
      {
        id: 'q42',
        prompt: 'छात्रः',
        transliteration: 'Chātraḥ',
        meaning: 'Student',
        options: ['Teacher', 'Professor', 'Learner', 'Student'],
        correctIndex: 3
      },
      {
        id: 'q43',
        prompt: 'शिक्षकः',
        transliteration: 'Śikṣakaḥ',
        meaning: 'Teacher',
        options: ['Student', 'Mentor', 'Professor', 'Teacher'],
        correctIndex: 3
      },
      {
        id: 'q44',
        prompt: 'खेलः',
        transliteration: 'Khelaḥ',
        meaning: 'Game',
        options: ['Sport', 'Play', 'Match', 'Game'],
        correctIndex: 3
      },
      {
        id: 'q45',
        prompt: 'प्रेम',
        transliteration: 'Prema',
        meaning: 'Love',
        options: ['Hate', 'Affection', 'Emotion', 'Love'],
        correctIndex: 3
      },
      {
        id: 'q46',
        prompt: 'समयः',
        transliteration: 'Samayaḥ',
        meaning: 'Time',
        options: ['Clock', 'Watch', 'Moment', 'Time'],
        correctIndex: 3
      },
      {
        id: 'q47',
        prompt: 'वस्त्रम्',
        transliteration: 'Vastram',
        meaning: 'Cloth / Garment',
        options: ['Fabric', 'Dress', 'Apparel', 'Cloth / Garment'],
        correctIndex: 3
      },
      {
        id: 'q48',
        prompt: 'सोपानम्',
        transliteration: 'Sopānam',
        meaning: 'Stairs',
        options: ['Ladder', 'Steps', 'Elevator', 'Stairs'],
        correctIndex: 3
      },
      {
        id: 'q49',
        prompt: 'द्वीपः',
        transliteration: 'Dvīpaḥ',
        meaning: 'Island',
        options: ['Peninsula', 'Continent', 'Lake', 'Island'],
        correctIndex: 3
      },
      {
        id: 'q50',
        prompt: 'भाषा',
        transliteration: 'Bhāṣā',
        meaning: 'Language',
        options: ['Speech', 'Word', 'Dialect', 'Language'],
        correctIndex: 3
      }
    ]
  },
  {
    id: 'lesson-2',
    title: 'Sanskrit People & Relations',
    description: 'Learn Sanskrit terms for people, family, and social roles.',
    unlocked: false,
    questions: [
      {
        id: 'q51',
        prompt: 'माता',
        transliteration: 'Mātā',
        meaning: 'Mother',
        options: ['Father', 'Sister', 'Brother', 'Mother'],
        correctIndex: 3
      },
      {
        id: 'q52',
        prompt: 'पिता',
        transliteration: 'Pitā',
        meaning: 'Father',
        options: ['Mother', 'Sister', 'Brother', 'Father'],
        correctIndex: 3
      },
      {
        id: 'q53',
        prompt: 'भ्राता',
        transliteration: 'Bhrātā',
        meaning: 'Brother',
        options: ['Sister', 'Father', 'Mother', 'Brother'],
        correctIndex: 3
      },
      {
        id: 'q54',
        prompt: 'भगिनी',
        transliteration: 'Bhaginī',
        meaning: 'Sister',
        options: ['Brother', 'Father', 'Mother', 'Sister'],
        correctIndex: 3
      },
      {
        id: 'q55',
        prompt: 'पुत्रः',
        transliteration: 'Putraḥ',
        meaning: 'Son',
        options: ['Daughter', 'Father', 'Mother', 'Son'],
        correctIndex: 3
      },
      {
        id: 'q56',
        prompt: 'पुत्री',
        transliteration: 'Putrī',
        meaning: 'Daughter',
        options: ['Son', 'Father', 'Mother', 'Daughter'],
        correctIndex: 3
      },
      {
        id: 'q57',
        prompt: 'शिष्यः',
        transliteration: 'Śiṣyaḥ',
        meaning: 'Student',
        options: ['Teacher', 'Guru', 'Scholar', 'Student'],
        correctIndex: 3
      },
      {
        id: 'q58',
        prompt: 'गुरुः',
        transliteration: 'Guruḥ',
        meaning: 'Teacher',
        options: ['Student', 'Disciple', 'Master', 'Teacher'],
        correctIndex: 3
      },
      {
        id: 'q59',
        prompt: 'मित्रः',
        transliteration: 'Mitraḥ',
        meaning: 'Friend',
        options: ['Enemy', 'Stranger', 'Acquaintance', 'Friend'],
        correctIndex: 3
      },
      {
        id: 'q60',
        prompt: 'शत्रुः',
        transliteration: 'Śatruḥ',
        meaning: 'Enemy',
        options: ['Friend', 'Ally', 'Opponent', 'Enemy'],
        correctIndex: 3
      },
      {
        id: 'q61',
        prompt: 'राजा',
        transliteration: 'Rājā',
        meaning: 'King',
        options: ['Queen', 'Prince', 'Ruler', 'King'],
        correctIndex: 3
      },
      {
        id: 'q62',
        prompt: 'रानी',
        transliteration: 'Rānī',
        meaning: 'Queen',
        options: ['King', 'Princess', 'Empress', 'Queen'],
        correctIndex: 3
      },
      {
        id: 'q63',
        prompt: 'सैनिकः',
        transliteration: 'Sainikaḥ',
        meaning: 'Soldier',
        options: ['Warrior', 'General', 'Knight', 'Soldier'],
        correctIndex: 3
      },
      {
        id: 'q64',
        prompt: 'व्यापारी',
        transliteration: 'Vyāpārī',
        meaning: 'Merchant',
        options: ['Trader', 'Shopkeeper', 'Businessman', 'Merchant'],
        correctIndex: 3
      },
      {
        id: 'q65',
        prompt: 'चिकित्सकः',
        transliteration: 'Cikitsakaḥ',
        meaning: 'Doctor',
        options: ['Nurse', 'Healer', 'Surgeon', 'Doctor'],
        correctIndex: 3
      },
      {
        id: 'q66',
        prompt: 'गृहिणी',
        transliteration: 'Gṛhiṇī',
        meaning: 'Housewife',
        options: ['Homemaker', 'Wife', 'Mother', 'Housewife'],
        correctIndex: 3
      },
      {
        id: 'q67',
        prompt: 'बालकः',
        transliteration: 'Bālakaḥ',
        meaning: 'Boy / Child',
        options: ['Girl', 'Man', 'Infant', 'Boy / Child'],
        correctIndex: 3
      },
      {
        id: 'q68',
        prompt: 'बालिका',
        transliteration: 'Bālikā',
        meaning: 'Girl / Child',
        options: ['Boy', 'Woman', 'Teenager', 'Girl / Child'],
        correctIndex: 3
      },
      {
        id: 'q69',
        prompt: 'वृद्धः',
        transliteration: 'Vṛddhaḥ',
        meaning: 'Old man',
        options: ['Young man', 'Middle-aged man', 'Elderly man', 'Old man'],
        correctIndex: 3
      },
      {
        id: 'q70',
        prompt: 'वृद्धा',
        transliteration: 'Vṛddhā',
        meaning: 'Old woman',
        options: ['Young woman', 'Middle-aged woman', 'Elderly woman', 'Old woman'],
        correctIndex: 3
      },
      {
        id: 'q71',
        prompt: 'प्रजा',
        transliteration: 'Prajā',
        meaning: 'Subjects / People',
        options: ['Rulers', 'Nobles', 'Citizens', 'Subjects / People'],
        correctIndex: 3
      },
      {
        id: 'q72',
        prompt: 'सेनानी',
        transliteration: 'Senānī',
        meaning: 'General / Commander',
        options: ['Soldier', 'Captain', 'Lieutenant', 'General / Commander'],
        correctIndex: 3
      },
      {
        id: 'q73',
        prompt: 'नर्तकः',
        transliteration: 'Nartakaḥ',
        meaning: 'Dancer (male)',
        options: ['Singer', 'Musician', 'Actor', 'Dancer (male)'],
        correctIndex: 3
      },
      {
        id: 'q74',
        prompt: 'नर्तकी',
        transliteration: 'Nartakī',
        meaning: 'Dancer (female)',
        options: ['Singer', 'Musician', 'Actress', 'Dancer (female)'],
        correctIndex: 3
      },
      {
        id: 'q75',
        prompt: 'कविः',
        transliteration: 'Kaviḥ',
        meaning: 'Poet',
        options: ['Writer', 'Author', 'Bard', 'Poet'],
        correctIndex: 3
      },
      {
        id: 'q76',
        prompt: 'लेखकः',
        transliteration: 'Lekhakaḥ',
        meaning: 'Writer',
        options: ['Reader', 'Editor', 'Journalist', 'Writer'],
        correctIndex: 3
      },
      {
        id: 'q77',
        prompt: 'किसानः',
        transliteration: 'Kisānaḥ',
        meaning: 'Farmer',
        options: ['Shepherd', 'Hunter', 'Gardener', 'Farmer'],
        correctIndex: 3
      },
      {
        id: 'q78',
        prompt: 'साधु',
        transliteration: 'Sādhu',
        meaning: 'Monk / Holy man',
        options: ['Priest', 'Sage', 'Hermit', 'Monk / Holy man'],
        correctIndex: 3
      },
      {
        id: 'q79',
        prompt: 'साध्वी',
        transliteration: 'Sādvhī',
        meaning: 'Nun / Holy woman',
        options: ['Priestess', 'Sage', 'Hermit', 'Nun / Holy woman'],
        correctIndex: 3
      },
      {
        id: 'q80',
        prompt: 'योद्धा',
        transliteration: 'Yoddhā',
        meaning: 'Warrior',
        options: ['Soldier', 'Fighter', 'Combatant', 'Warrior'],
        correctIndex: 3
      },
      {
        id: 'q81',
        prompt: 'सेवकः',
        transliteration: 'Sevakaḥ',
        meaning: 'Servant',
        options: ['Master', 'Lord', 'Attendant', 'Servant'],
        correctIndex: 3
      },
      {
        id: 'q82',
        prompt: 'सेविका',
        transliteration: 'Sevīkā',
        meaning: 'Maid / Female servant',
        options: ['Mistress', 'Lady', 'Attendant', 'Maid / Female servant'],
        correctIndex: 3
      },
      {
        id: 'q83',
        prompt: 'नागरिकः',
        transliteration: 'Nāgarikaḥ',
        meaning: 'Citizen',
        options: ['Foreigner', 'Resident', 'Native', 'Citizen'],
        correctIndex: 3
      },
      {
        id: 'q84',
        prompt: 'शिल्पी',
        transliteration: 'Śilpī',
        meaning: 'Artist / Craftsman',
        options: ['Painter', 'Sculptor', 'Artisan', 'Artist / Craftsman'],
        correctIndex: 3
      },
      {
        id: 'q85',
        prompt: 'चिकित्सिका',
        transliteration: 'Cikitsikā',
        meaning: 'Female doctor',
        options: ['Male doctor', 'Nurse', 'Healer', 'Female doctor'],
        correctIndex: 3
      }
    ]
  }
];