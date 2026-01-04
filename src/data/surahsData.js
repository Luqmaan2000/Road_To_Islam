export const categories = [
  { id: 'all', name: 'All Surahs', icon: '📖' },
  { id: 'creation', name: 'Creation & Signs', icon: '🌌' },
  { id: 'mercy', name: 'Mercy & Comfort', icon: '💚' },
  { id: 'repentance', name: 'Repentance & Forgiveness', icon: '🤲' },
  { id: 'consciousness', name: 'Consciousness of Allah', icon: '🙏' },
  { id: 'brotherhood', name: 'Brotherhood & Ethics', icon: '🤝' }
]

export const surahs = [
  {
    id: 1,
    name: "Surah Al-Fatiha",
    number: 1,
    verses: 7,
    meaning: "The Opening",
    reciter: "Sheikh Maher Al-Muaiqly",
    location: "Mecca",
    summary: "The opening chapter of the Quran - a prayer for guidance, mercy, and the straight path",
    category: 'mercy',
    audioUrl: "https://www.youtube.com/watch?v=iuT39l0s1ew",
    isYouTube: true,
    versesData: [
      {
        number: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Bismillaahir Rahmaanir Raheem",
        translation: "In the name of Allah, the Most Gracious, the Most Merciful",
        startTime: 0,
        endTime: 3.2
      },
      {
        number: 2,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        transliteration: "Alhamdu lillaahi Rabbil 'aalameen",
        translation: "All praise is due to Allah, Lord of all the worlds",
        startTime: 3.2,
        endTime: 6.8
      },
      {
        number: 3,
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        transliteration: "Ar-Rahmaanir-Raheem",
        translation: "The Most Gracious, the Most Merciful",
        startTime: 6.8,
        endTime: 9.2
      },
      {
        number: 4,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        transliteration: "Maaliki Yawmid-Deen",
        translation: "Master of the Day of Judgment",
        startTime: 9.2,
        endTime: 11.8
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        transliteration: "Iyyaaka na'budu wa lyyaaka nasta'een",
        translation: "You alone we worship, and You alone we ask for help",
        startTime: 11.8,
        endTime: 16.2
      },
      {
        number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        transliteration: "Ihdinas-Siraatal-Mustaqeem",
        translation: "Guide us on the Straight Path",
        startTime: 16.2,
        endTime: 19.5
      },
      {
        number: 7,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        transliteration: "Siraatal-lazeena an'amta 'alayhim ghayril-maghdoobi 'alayhim wa lad-daalleen",
        translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray",
        startTime: 19.5,
        endTime: 27.5
      }
    ]
  },
  {
    id: 2,
    name: "Surah Al-Furqan (Verses 70-74)",
    number: 25,
    verses: 5,
    meaning: "The Criterion",
    reciter: "Qari Ibrahim Idris",
    location: "Nigeria",
    summary: "Verses on repentance, forgiveness, and the noble character of believers",
    category: 'repentance',
    audioUrl: "https://www.youtube.com/watch?v=w2xJqNqufg0",
    isYouTube: true,
    versesData: [
      {
        number: 70,
        arabic: "إِلَّا الَّذِينَ تَابُوا وَآمَنُوا وَعَمِلُوا صَالِحًا فَأُولَٰئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ",
        transliteration: "Illallazeena taaboo wa aamanoo wa 'amiloo saalihan fa ulaa'ika yubaddilullaahu sayyi'aatihim hasanaat",
        translation: "Except for those who repent, believe and do righteous work; for them Allah will replace their evil deeds with good",
        startTime: 0,
        endTime: 8
      },
      {
        number: 71,
        arabic: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
        transliteration: "Wa kaanallaahu ghafuuran raheema",
        translation: "And ever is Allah Forgiving and Merciful",
        startTime: 8,
        endTime: 12
      },
      {
        number: 72,
        arabic: "وَمَن تَابَ وَعَمِلَ صَالِحًا فَإِنَّهُ يَتُوبُ إِلَى اللَّهِ تَوْبًا",
        transliteration: "Wa man taaba wa 'amila saalihan fa innahu yatoobu ilallaahi tawba",
        translation: "And he who repents and does righteousness does indeed turn to Allah with [accepted] repentance",
        startTime: 12,
        endTime: 18
      },
      {
        number: 73,
        arabic: "وَالَّذِينَ لَا يَشْهَدُونَ الزُّورَ وَإِذَا مَرُّوا بِاللَّغْوِ مَرُّوا كِرَامًا",
        transliteration: "Wallazeena laa yash-hadoonaz-zoor wa izaa marroo bil-laghwi marroo kiraama",
        translation: "And those who do not testify to falsehood, and when they pass near ill speech, they pass by with dignity",
        startTime: 18,
        endTime: 26
      },
      {
        number: 74,
        arabic: "وَالَّذِينَ إِذَا ذُكِّرُوا بِآيَاتِ رَبِّهِمْ لَمْ يَخِرُّوا عَلَيْهَا صُمًّا وَعُمْيَانًا",
        transliteration: "Wallazeena izaa zukkiru bi aayaati rabbihim lam yahirru 'alayha summan wa 'umyaana",
        translation: "And those who, when reminded of the verses of their Lord, do not fall upon them deaf and blind",
        startTime: 26,
        endTime: 35
      }
    ]
  },
  {
    id: 3,
    name: "Surah Al-Hashr (Verses 18-24)",
    number: 59,
    verses: 7,
    meaning: "The Exile",
    reciter: "Sheikh Murtada Bakour",
    location: "Syria",
    summary: "Verses on consciousness of Allah, accountability, and the greatness of the Quran",
    category: 'consciousness',
    audioUrl: "https://www.youtube.com/watch?v=99AAN23deec",
    isYouTube: true,
    versesData: [
      {
        number: 18,
        arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ",
        transliteration: "Yaa ayyuhal-lazeena aamanut-taqullaaha wa l-tanzur nafsun maa qaddamat lighadin",
        translation: "O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow",
        startTime: 0,
        endTime: 10
      },
      {
        number: 19,
        arabic: "وَاتَّقُوا اللَّهَ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ",
        transliteration: "Wattaqullaaha innallaaha khabeerum bimaa ta'maloon",
        translation: "And fear Allah. Indeed, Allah is Acquainted with what you do",
        startTime: 10,
        endTime: 16
      },
      {
        number: 20,
        arabic: "وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنسَاهُمْ أَنفُسَهُمْ",
        transliteration: "Wa laa takoonoo kallazeena nasullaahu fa ansaahum anfusahum",
        translation: "And be not like those who forgot Allah, so He made them forget themselves",
        startTime: 16,
        endTime: 24
      },
      {
        number: 21,
        arabic: "أُولَٰئِكَ هُمُ الْفَاسِقُونَ",
        transliteration: "Ulaa'ika humul-faasiqoon",
        translation: "Those are the defiantly disobedient",
        startTime: 24,
        endTime: 28
      },
      {
        number: 22,
        arabic: "لَا يَسْتَوِي أَصْحَابُ النَّارِ وَأَصْحَابُ الْجَنَّةِ",
        transliteration: "Laa yastawee ashaabun-naari wa ashaabul-jannah",
        translation: "Not equal are the companions of the Fire and the companions of Paradise",
        startTime: 28,
        endTime: 35
      },
      {
        number: 23,
        arabic: "أَصْحَابُ الْجَنَّةِ هُمُ الْفَائِزُونَ",
        transliteration: "Ashaabul-jannah humul-faa'izoon",
        translation: "The companions of Paradise - they are the attainers [of success]",
        startTime: 35,
        endTime: 40
      },
      {
        number: 24,
        arabic: "لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ",
        transliteration: "Law anzalna haazal-qur'aana 'alaa jabalin lara-aytahu khashi'an mutasaddi'an min khashyatillaah",
        translation: "If We had sent down this Quran upon a mountain, you would have seen it humbled and coming apart from fear of Allah",
        startTime: 40,
        endTime: 52
      }
    ]
  },
  {
    id: 4,
    name: "Surah Al-Hujurat (Verses 10-13)",
    number: 49,
    verses: 4,
    meaning: "The Rooms",
    reciter: "Sheikh Abdul Rahman Al-Sudais",
    location: "Saudi Arabia",
    summary: "Verses on brotherhood, respect, avoiding mockery, and the diversity of humanity",
    category: 'brotherhood',
    audioUrl: "https://www.youtube.com/watch?v=Te8KhvlS58I",
    isYouTube: true,
    versesData: [
      {
        number: 10,
        arabic: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ",
        transliteration: "Innamal-mu'minoona ikhwatun fa aslihoo bayna akhaykum",
        translation: "The believers are but brothers, so make settlement between your brothers",
        startTime: 0,
        endTime: 6
      },
      {
        number: 11,
        arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ",
        transliteration: "Yaa ayyuhal-lazeena aamanoo laa yaskhar qawmun min qawmin 'asaa an yakoonoo khayran minhum",
        translation: "O you who have believed, let not a people ridicule [another] people; perhaps they may be better than them",
        startTime: 6,
        endTime: 14
      },
      {
        number: 12,
        arabic: "وَلَا تَلْمِزُوا أَنفُسَكُمْ وَلَا تَنَابَزُوا بِالْأَلْقَابِ",
        transliteration: "Wa laa talmizoo anfusakum wa laa tanaazawoo bil-alqaab",
        translation: "And do not insult one another and do not call each other by [offensive] nicknames",
        startTime: 14,
        endTime: 22
      },
      {
        number: 13,
        arabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
        transliteration: "Yaa ayyuhan-naasu inna khalaqnaakum min zakarin wa unthaa wa ja'alnaakum shu'ooban wa qabaa'ila lita'aarafoo",
        translation: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another",
        startTime: 22,
        endTime: 32
      }
    ]
  },
  {
    id: 5,
    name: "Surah Al-Anbiyaa (Verses 30-35)",
    number: 21,
    verses: 6,
    meaning: "The Prophets",
    reciter: "Sheikh Mishary Alafasy",
    location: "Kuwait",
    summary: "Verses on the creation of the universe, the origin of life, and signs of Allah",
    category: 'creation',
    audioUrl: "https://www.youtube.com/watch?v=iE1SycQkILk",
    isYouTube: true,
    versesData: [
      {
        number: 30,
        arabic: "أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا",
        transliteration: "Awalam yal-lazeena kafaroo annas-samaawaati wal-arda kaanataa ratqan fa fataqnaahumaa",
        translation: "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them",
        startTime: 0,
        endTime: 10
      },
      {
        number: 31,
        arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
        transliteration: "Wa ja'alnaa minal-maa'i kulla shay'in hayy",
        translation: "And We made from water every living thing",
        startTime: 10,
        endTime: 16
      },
      {
        number: 32,
        arabic: "وَجَعَلْنَا فِي الْأَرْضِ رَوَاسِيَ أَن تَمِيدَ بِهِمْ",
        transliteration: "Wa ja'alnaa fil-ardi raasiya an tameeda bihim",
        translation: "And We placed in the earth firmly set mountains, lest it should shift with them",
        startTime: 16,
        endTime: 24
      },
      {
        number: 33,
        arabic: "وَجَعَلْنَا فِيهَا فِجَاجًا سُبُلًا لَّعَلَّهُمْ يَهْتَدُونَ",
        transliteration: "Wa ja'alnaa feehaa fijaajan subulan la'allahum yahtadoon",
        translation: "And We made therein paths that they might be guided",
        startTime: 24,
        endTime: 32
      },
      {
        number: 34,
        arabic: "وَجَعَلْنَا السَّمَاءَ سَقْفًا مَّحْفُوظًا",
        transliteration: "Wa ja'alnas-samaa'a saqfan mahfooza",
        translation: "And We made the sky a protected ceiling",
        startTime: 32,
        endTime: 38
      },
      {
        number: 35,
        arabic: "وَهُمْ عَنْ آيَاتِهَا مُعْرِضُونَ",
        transliteration: "Wa hum 'an aayaatihaa mu'ridoon",
        translation: "And they, from its signs, are turning away",
        startTime: 38,
        endTime: 44
      }
    ]
  },
  {
    id: 6,
    name: "Surah At-Tur (Verses 35-37)",
    number: 52,
    verses: 3,
    meaning: "The Mount",
    reciter: "Sheikh Mishary Alafasy",
    location: "Kuwait",
    summary: "Verses questioning the origin of creation and the certainty of faith",
    category: 'creation',
    audioUrl: "https://www.youtube.com/watch?v=vgtLE4wWoYQ",
    isYouTube: true,
    versesData: [
      {
        number: 35,
        arabic: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ",
        transliteration: "Am khuliqu min ghayri shay'in am humul-khaaliqoon",
        translation: "Or were they created by nothing, or were they the creators [of themselves]?",
        startTime: 0,
        endTime: 8
      },
      {
        number: 36,
        arabic: "أَمْ خَلَقُوا السَّمَاوَاتِ وَالْأَرْضَ",
        transliteration: "Am khalaqus-samaawaati wal-arda",
        translation: "Or did they create the heavens and the earth?",
        startTime: 8,
        endTime: 14
      },
      {
        number: 37,
        arabic: "بَل لَّا يُوقِنُونَ",
        transliteration: "Bal laa yooqinoon",
        translation: "Rather, they are not certain",
        startTime: 14,
        endTime: 20
      }
    ]
  },
  {
    id: 7,
    name: "Surah Al-Mulk (Verses 3-4)",
    number: 67,
    verses: 2,
    meaning: "The Sovereignty",
    reciter: "Sheikh Mishary Alafasy",
    location: "Kuwait",
    summary: "Verses on the perfect creation of the seven heavens and the consistency in Allah's creation",
    category: 'creation',
    audioUrl: "https://www.youtube.com/watch?v=24aZLTMzitE",
    isYouTube: true,
    versesData: [
      {
        number: 3,
        arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا",
        transliteration: "Allazee khalaqa sab'a samaawaatin tibaaqa",
        translation: "[He] who created seven heavens in layers",
        startTime: 0,
        endTime: 6
      },
      {
        number: 4,
        arabic: "مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ",
        transliteration: "Maa taraa fee khalqir-rahmaani min tafaawut",
        translation: "You do not see in the creation of the Most Merciful any inconsistency",
        startTime: 6,
        endTime: 14
      }
    ]
  },
  {
    id: 8,
    name: "Surah Ad-Duha",
    number: 93,
    verses: 11,
    meaning: "The Morning Hours",
    reciter: "Sheikh Mishary Alafasy",
    location: "Kuwait",
    summary: "A comforting surah revealed to console the Prophet during difficult times, reminding him of Allah's favor and the promise of ease after hardship",
    category: 'mercy',
    audioUrl: "https://www.youtube.com/watch?v=RjAJV8_jYQk",
    isYouTube: true,
    versesData: [
      {
        number: 1,
        arabic: "وَالضُّحَىٰ",
        transliteration: "Wad-duhaa",
        translation: "By the morning brightness",
        startTime: 0,
        endTime: 4
      },
      {
        number: 2,
        arabic: "وَاللَّيْلِ إِذَا سَجَىٰ",
        transliteration: "Wal-laili izaa sajaa",
        translation: "And [by] the night when it covers with darkness",
        startTime: 4,
        endTime: 8
      },
      {
        number: 3,
        arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
        transliteration: "Maa wadda'aka rabbuka wa maa qalaa",
        translation: "Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you]",
        startTime: 8,
        endTime: 14
      },
      {
        number: 4,
        arabic: "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
        transliteration: "Wal-l-aakhiratu khayrun laka minal-oolaa",
        translation: "And the Hereafter is better for you than the first [life]",
        startTime: 14,
        endTime: 20
      },
      {
        number: 5,
        arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
        transliteration: "Wa lasawfa yu'teeka rabbuka fa tardaa",
        translation: "And your Lord is going to give you, and you will be satisfied",
        startTime: 20,
        endTime: 26
      },
      {
        number: 6,
        arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ",
        transliteration: "Alam yajidka yateeman fa aawaa",
        translation: "Did He not find you an orphan and give [you] refuge?",
        startTime: 26,
        endTime: 32
      },
      {
        number: 7,
        arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
        transliteration: "Wa wajadaka daallan fa hadaa",
        translation: "And He found you lost and guided [you]",
        startTime: 32,
        endTime: 38
      },
      {
        number: 8,
        arabic: "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ",
        transliteration: "Wa wajadaa 'aa'ilan fa aghnaa",
        translation: "And He found you poor and made [you] self-sufficient",
        startTime: 38,
        endTime: 44
      },
      {
        number: 9,
        arabic: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ",
        transliteration: "Fa-ammal-yateema falaa taqhar",
        translation: "So as for the orphan, do not oppress [him]",
        startTime: 44,
        endTime: 50
      },
      {
        number: 10,
        arabic: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ",
        transliteration: "Wa-ammaas-saa'ila falaa tanhar",
        translation: "And as for the petitioner, do not repel [him]",
        startTime: 50,
        endTime: 56
      },
      {
        number: 11,
        arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
        transliteration: "Wa amma bini'mati rabbika fa haddith",
        translation: "But as for the favor of your Lord, report [it]",
        startTime: 56,
        endTime: 62
      }
    ]
  },
  {
    id: 9,
    name: "Surah Ash-Sharh",
    number: 94,
    verses: 8,
    meaning: "The Relief",
    reciter: "Sheikh Mishary Alafasy",
    location: "Kuwait",
    summary: "A surah of comfort and hope, promising that with hardship comes ease, and encouraging gratitude and worship",
    category: 'mercy',
    audioUrl: "https://www.youtube.com/watch?v=20JzAXx5Diw",
    isYouTube: true,
    versesData: [
      {
        number: 1,
        arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
        transliteration: "Alam nashrah laka sadrak",
        translation: "Did We not expand for you, [O Muhammad], your breast?",
        startTime: 0,
        endTime: 5
      },
      {
        number: 2,
        arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ",
        transliteration: "Wa wada'na 'anka wizrak",
        translation: "And We removed from you your burden",
        startTime: 5,
        endTime: 10
      },
      {
        number: 3,
        arabic: "الَّذِي أَنقَضَ ظَهْرَكَ",
        transliteration: "Allazee anqada zahrak",
        translation: "Which had weighed upon your back",
        startTime: 10,
        endTime: 15
      },
      {
        number: 4,
        arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
        transliteration: "Wa rafa'naa laka dhikrak",
        translation: "And We raised high for you your repute",
        startTime: 15,
        endTime: 20
      },
      {
        number: 5,
        arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        transliteration: "Fa-inna ma'al-'usri yusraa",
        translation: "For indeed, with hardship [will be] ease",
        startTime: 20,
        endTime: 26
      },
      {
        number: 6,
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        transliteration: "Inna ma'al-'usri yusraa",
        translation: "Indeed, with hardship [will be] ease",
        startTime: 26,
        endTime: 32
      },
      {
        number: 7,
        arabic: "فَإِذَا فَرَغْتَ فَانصَبْ",
        transliteration: "Fa-izaa faraghta fansab",
        translation: "So when you have finished [your duties], then stand up [for worship]",
        startTime: 32,
        endTime: 38
      },
      {
        number: 8,
        arabic: "وَإِلَىٰ رَبِّكَ فَارْغَبْ",
        transliteration: "Wa ilaa rabbika farghab",
        translation: "And to your Lord direct [your] longing",
        startTime: 38,
        endTime: 44
      }
    ]
  }
]
