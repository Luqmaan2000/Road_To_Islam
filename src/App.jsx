import { Link, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Understanding Islam</h1>
        <p>Learn about Islam through facts, stories, and answers to common questions</p>
      </header>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/fundamentals" className="nav-link">Islam Fundamentals</Link>
        <Link to="/quran" className="nav-link">The Quran</Link>
        <Link to="/prophet" className="nav-link">Prophet Muhammad (PBUH)</Link>
        <Link to="/religions" className="nav-link">Islam & Other Faiths</Link>
        <Link to="/misconceptions" className="nav-link">Common Misconceptions</Link>
        <Link to="/qa" className="nav-link">Questions & Answers</Link>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/fundamentals" element={<FundamentalsSection />} />
          <Route path="/quran" element={<QuranSection />} />
          <Route path="/prophet" element={<ProphetSection />} />
          <Route path="/religions" element={<ReligionsSection />} />
          <Route path="/misconceptions" element={<MisconceptionsSection />} />
          <Route path="/qa" element={<QASection />} />
        </Routes>
      </main>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="section">
      <h2>Welcome to Understanding Islam</h2>
      <p>This app is designed to provide accurate information about Islam, address common misconceptions, and share the beautiful stories of Prophet Muhammad (peace be upon him).</p>
      
      <div className="cards">
        <div className="card">
          <h3>📚 Learn the Facts</h3>
          <p>Discover what Islam truly teaches through verified information and sources.</p>
        </div>
        <div className="card">
          <h3>❓ Get Answers</h3>
          <p>Find clear, respectful answers to common questions and concerns.</p>
        </div>
        <div className="card">
          <h3>📖 Read Stories</h3>
          <p>Explore inspiring stories from the life of Prophet Muhammad (PBUH).</p>
        </div>
      </div>

      <div className="quote-box">
        <p>"The best among you are those who have the best manners and character."</p>
        <p className="quote-source">- Prophet Muhammad (PBUH)</p>
      </div>
    </div>
  )
}

function MisconceptionsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [showEvidence, setShowEvidence] = useState({})
  const [activeCategory, setActiveCategory] = useState('all')
  const [evidenceSection, setEvidenceSection] = useState({})

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'violence', name: 'Violence & Conflict', icon: '⚔️' },
    { id: 'women', name: 'Women\'s Rights', icon: '👩' },
    { id: 'beliefs', name: 'Core Beliefs', icon: '🕌' },
    { id: 'practices', name: 'Daily Practices', icon: '🍽️' }
  ]

  const misconceptions = [
    {
      category: 'violence',
      claim: "Violence and Aggression",
      clarification: "Islam strictly prohibits killing innocents and places strong conditions on the use of force.",
      whyPeopleBelieve: "This belief often stems from media coverage of terrorist attacks and conflicts in Muslim-majority regions. Extremist groups misuse Islamic terminology to justify their actions, creating confusion about the religion's true teachings.",
      evidence: {
        quran: [
          { 
            verse: "Whoever kills a soul unless for a soul or for corruption [done] in the land - it is as if he had slain all of mankind.", 
            ref: "Quran 5:32",
            tafsir: "This verse establishes the sanctity of human life in Islam. Killing one innocent person is equated with killing all of humanity, showing the grave seriousness of taking a life. The verse was revealed after the murder of a shepherd, emphasizing that even one life is precious."
          },
          { 
            verse: "There is no compulsion in religion - the right way is indeed clearly distinct from error.", 
            ref: "Quran 2:256",
            tafsir: "This verse was revealed in Medina when some people from the Ansar wanted to force their children to convert to Islam. It establishes that faith must be voluntary and cannot be compelled, emphasizing freedom of belief."
          }
        ],
        hadith: [
          { 
            text: "The Muslim is the one from whose tongue and hand the people are safe.", 
            ref: "Sahih Bukhari & Muslim",
            context: "This hadith defines a true Muslim by their peaceful behavior toward others. It emphasizes that Islam is about safety and peace, not harm."
          }
        ],
        stories: [
          {
            title: "The Conquest of Mecca",
            story: "When Prophet Muhammad (PBUH) conquered Mecca after 13 years of persecution, he declared: 'Go, for you are free!' He forgave his fiercest enemies instead of seeking revenge.",
            lesson: "True strength lies in forgiveness, not revenge."
          }
        ]
      },
      summary: [
        "Sanctity of all human life",
        "Justice even in conflict",
        "Accountability for every action"
      ],
      related: [
        "Does Islam allow self-defence?",
        "What is Jihad actually?",
        "How does Islam view war?"
      ]
    },
    {
      category: 'women',
      claim: "Women Being Oppressed",
      clarification: "Islam granted women rights 1400 years ago that were revolutionary for that time, including property ownership, education, and the right to choose their spouse.",
      whyPeopleBelieve: "Cultural practices in some Muslim-majority countries are often confused with Islamic teachings. Media coverage of restrictive laws in certain countries reinforces this misconception.",
      evidence: {
        quran: [
          { 
            verse: "And for women are rights over men similar to those of men over women.", 
            ref: "Quran 2:228",
            tafsir: "This verse establishes the principle of mutual rights and responsibilities between men and women. It was revealed in the context of divorce proceedings, ensuring women have legal protections and rights similar to men."
          },
          { 
            verse: "The believers, men and women, are allies of one another.", 
            ref: "Quran 9:71",
            tafsir: "This verse emphasizes the partnership between men and women in faith. They support each other in righteousness and enjoin what is good, showing equality in spiritual responsibility."
          }
        ],
        hadith: [
          { 
            text: "The best of you are those who are best to their wives.", 
            ref: "Tirmidhi",
            context: "The Prophet (PBUH) emphasized kindness to wives as a measure of a person's character and faith."
          }
        ],
        stories: [
          {
            title: "Khadijah - The First Muslim",
            story: "Khadijah was a successful businesswoman who employed Prophet Muhammad (PBUH). She was the first to believe in his message and supported him through the most difficult times.",
            lesson: "Islam respects and values women's intelligence and leadership."
          }
        ]
      },
      summary: [
        "Equal spiritual worth",
        "Right to education and property",
        "Protection from abuse"
      ],
      related: [
        "What does Islam say about women's education?",
        "Is hijab mandatory?",
        "What are women's rights in Islam?"
      ]
    },
    {
      category: 'beliefs',
      claim: "Worship of a Different God",
      clarification: "Muslims worship the same One God as Christians and Jews - the God of Abraham, Moses, and Jesus (peace be upon them).",
      whyPeopleBelieve: "The Arabic word 'Allah' is unfamiliar to non-Arabic speakers, leading some to think it refers to a different deity. Media portrayals sometimes reinforce this misunderstanding.",
      evidence: {
        quran: [
          { 
            verse: "And our God and your God is one; and we are Muslims [in submission] to Him.", 
            ref: "Quran 29:46",
            tafsir: "This verse was revealed in response to the People of the Book (Jews and Christians) and establishes that Muslims worship the same God as them. It emphasizes the common monotheistic foundation."
          },
          { 
            verse: "We have believed in Allah and in what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and in what was given to Moses and Jesus.", 
            ref: "Quran 3:84",
            tafsir: "This verse lists the prophets and revelations that Muslims believe in, showing continuity with previous monotheistic traditions. It establishes that Islam is part of the same Abrahamic tradition."
          }
        ],
        hadith: [
          { 
            text: "The prophets are paternal brothers; their mothers are different, but their religion is one.", 
            ref: "Sahih Bukhari",
            context: "This hadith explains that all prophets brought the same core message of monotheism, forming a single religious tradition."
          }
        ],
        stories: [
          {
            title: "The Prophet's Respect for Other Faiths",
            story: "When Prophet Muhammad (PBUH) established the first Muslim community in Medina, he granted religious freedom to Christians and Jews. He allowed a Christian delegation to pray in his mosque.",
            lesson: "Islam teaches respect for people of all faiths who worship the One God."
          }
        ]
      },
      summary: [
        "One God for all humanity",
        "Same God as Abraham, Moses, Jesus",
        "Unity of monotheistic faiths"
      ],
      related: [
        "What do Muslims believe about Jesus?",
        "How is Islam similar to Christianity?",
        "What is the difference between Islam and Judaism?"
      ]
    },
    {
      category: 'women',
      claim: "Oppressive Clothing Requirements",
      clarification: "Hijab is a personal choice that represents modesty and devotion to God. Modesty requirements apply to both men and women.",
      whyPeopleBelieve: "Images of women forced to wear certain clothing in some countries create the impression that Islam mandates this. Cultural practices are often confused with religious requirements.",
      evidence: {
        quran: [
          { 
            verse: "There is no compulsion in religion - the right way is indeed clearly distinct from error.", 
            ref: "Quran 2:256",
            tafsir: "This verse establishes the principle of religious freedom in Islam. It was revealed in Medina when some wanted to force their children to convert, showing that faith must be voluntary."
          },
          { 
            verse: "Tell the believing men to lower their gaze and guard their private parts.", 
            ref: "Quran 24:30",
            tafsir: "This verse begins the section on modesty, starting with men. It shows that modesty is required from both genders, not just women."
          }
        ],
        hadith: [
          { 
            text: "Modesty is part of faith.", 
            ref: "Sahih Bukhari & Muslim",
            context: "This hadith establishes modesty as an essential component of faith, applying to both men and women."
          }
        ],
        stories: [
          {
            title: "Aisha - Scholar and Teacher",
            story: "Aisha, the Prophet's wife, was one of the most knowledgeable scholars of Islam. She taught both men and women and narrated over 2,000 hadith.",
            lesson: "Islam encourages women's education and scholarship."
          }
        ]
      },
      summary: [
        "Modesty for both men and women",
        "Personal choice and intention",
        "Focus on character over appearance"
      ],
      related: [
        "Is hijab mandatory in Islam?",
        "What does Islam say about modesty?",
        "Can Muslim women choose not to wear hijab?"
      ]
    },
    {
      category: 'women',
      claim: "Prophet's Marriage to a Young Woman",
      clarification: "This marriage must be understood in its historical context. The marriage was not consummated until Aisha reached physical and mental maturity.",
      whyPeopleBelieve: "Modern standards of childhood and marriage are applied to 7th century Arabia without considering historical context. Media coverage often lacks nuance.",
      evidence: {
        quran: [
          { 
            verse: "And marry those among you who are single and the righteous among your male slaves and female slaves.", 
            ref: "Quran 24:32",
            tafsir: "This verse encourages marriage for those who are single and righteous. It was revealed to address social concerns about marriage and family structure."
          }
        ],
        hadith: [
          { 
            text: "Aisha narrated over 2,000 hadith and was one of Islam's greatest scholars.", 
            ref: "Historical records",
            context: "Aisha's role as a scholar and teacher demonstrates that she was treated as an educated adult, not a child."
          }
        ],
        stories: [
          {
            title: "Aisha's Scholarly Achievements",
            story: "Aisha became a respected scholar, teacher, and political leader. Companions of the Prophet would come to her for guidance on religious matters.",
            lesson: "Historical context is essential for understanding past practices."
          }
        ]
      },
      summary: [
        "Historical context is essential",
        "Aisha was a respected scholar",
        "Modern standards differ from past norms"
      ],
      related: [
        "What was Aisha's role in Islam?",
        "How did Islam improve women's status?",
        "What are modern Islamic views on marriage age?"
      ]
    },
    {
      category: 'violence',
      claim: "Islam is a terrorist religion",
      clarification: "Terrorism is strictly forbidden in Islam. The actions of extremists are condemned by the vast majority of Muslims and Islamic scholars.",
      whyPeopleBelieve: "High-profile terrorist attacks by groups claiming Islamic motivation create this perception. Media coverage often focuses on the perpetrators' claimed religious identity.",
      evidence: {
        quran: [
          { 
            verse: "Whoever kills a soul unless for a soul or for corruption [done] in the land - it is as if he had slain all of mankind.", 
            ref: "Quran 5:32",
            tafsir: "This verse establishes the sanctity of human life in Islam. Killing one innocent person is equated with killing all of humanity, showing the grave seriousness of taking a life."
          },
          { 
            verse: "And do not incline toward those who do wrong, lest you be touched by the Fire.", 
            ref: "Quran 11:113",
            tafsir: "This verse warns against associating with wrongdoers. It was revealed to guide Muslims to avoid those who commit injustice and corruption."
          }
        ],
        hadith: [
          { 
            text: "The Muslim is the one from whose tongue and hand the people are safe.", 
            ref: "Sahih Bukhari & Muslim",
            context: "This hadith defines a true Muslim by their peaceful behavior toward others. It emphasizes that Islam is about safety and peace, not harm."
          }
        ],
        stories: [
          {
            title: "Muslim Condemnation of Terrorism",
            story: "After every terrorist attack, Muslim organizations worldwide issue strong condemnations. Major Islamic institutions have issued fatwas declaring terrorism forbidden in Islam.",
            lesson: "The vast majority of Muslims reject extremism."
          }
        ]
      },
      summary: [
        "Terrorism is strictly forbidden",
        "Extremists are a tiny minority",
        "Muslims are primary victims of terrorism"
      ],
      related: [
        "What do Islamic scholars say about terrorism?",
        "How do Muslims respond to extremism?",
        "What is the true meaning of Jihad?"
      ]
    },
    {
      category: 'women',
      claim: "Men can marry 4 women but women can't",
      clarification: "Polygamy is restricted with strict conditions and is not the norm. Most Muslims are monogamous, and many Muslim countries have banned it entirely.",
      whyPeopleBelieve: "Media portrayals focus on polygamy in some Muslim cultures without explaining the restrictions. The permission is often presented without context.",
      evidence: {
        quran: [
          { 
            verse: "But if you fear that you will not be just, then [marry only] one.", 
            ref: "Quran 4:3",
            tafsir: "This verse was revealed after the Battle of Uhud when many women were widowed. It restricts polygamy to maximum 4 wives with the condition of justice, and explicitly states marrying one is better if you fear injustice."
          },
          { 
            verse: "And you will never be able to be equal [in feeling] between wives.", 
            ref: "Quran 4:129",
            tafsir: "This verse acknowledges that perfect equality between wives is nearly impossible. It serves as a discouragement for polygamy, showing that the ideal is monogamy."
          }
        ],
        hadith: [
          { 
            text: "Whoever has two wives and he inclines to one of them over the other, he will come on the Day of Judgment with his side leaning.", 
            ref: "Abu Dawud",
            context: "This hadith warns against favoritism in polygamous marriages. It emphasizes the difficulty of treating multiple wives equally and serves as a deterrent."
          }
        ],
        stories: [
          {
            title: "Islam Restricted Polygamy",
            story: "Before Islam, men could marry unlimited wives. Islam restricted this to maximum 4 with strict conditions. This was actually a reform for women's protection.",
            lesson: "Islam improved women's rights by restricting polygamy."
          }
        ]
      },
      summary: [
        "Polygamy is restricted, not encouraged",
        "Most Muslims are monogamous",
        "Strict conditions must be met"
      ],
      related: [
        "Why did Islam allow polygamy?",
        "What are the conditions for polygamy?",
        "How do modern Muslims view polygamy?"
      ]
    },
    {
      category: 'beliefs',
      claim: "Islam started with Prophet Muhammad (PBUH)",
      clarification: "Islam began with Prophet Adam, the first human and first prophet. Muhammad (PBUH) was the final messenger in a long line of prophets.",
      whyPeopleBelieve: "Islam is often presented as a 'new' religion that emerged in the 7th century. The focus on Muhammad (PBUH) as the final messenger can create this impression.",
      evidence: {
        quran: [
          { 
            verse: "Indeed, the religion in the sight of Allah is Islam.", 
            ref: "Quran 3:19",
            tafsir: "This verse establishes that Islam (submission to God) is the only religion acceptable to God. It was revealed to clarify that true faith is submission to the One God."
          },
          { 
            verse: "He has ordained for you of religion what He enjoined upon Noah and that which We have revealed to you, [O Muhammad].", 
            ref: "Quran 42:13",
            tafsir: "This verse shows continuity between all prophets. It states that the same religion was enjoined upon Noah, Abraham, Moses, Jesus, and Muhammad - all teaching submission to One God."
          }
        ],
        hadith: [
          { 
            text: "The prophets are brothers from different mothers, but their religion is one.", 
            ref: "Sahih Bukhari",
            context: "This hadith explains that all prophets brought the same core message of monotheism, forming a single religious tradition."
          }
        ],
        stories: [
          {
            title: "The Line of Prophets",
            story: "Islam recognizes 124,000 prophets throughout history, including Adam, Noah, Abraham, Moses, and Jesus. Muhammad (PBUH) brought the final revelation.",
            lesson: "Islam is the continuation of the same monotheistic tradition."
          }
        ]
      },
      summary: [
        "Islam began with Prophet Adam",
        "All prophets taught the same message",
        "Muhammad (PBUH) was the final messenger"
      ],
      related: [
        "Who are the prophets in Islam?",
        "How is Islam connected to Christianity?",
        "What is the relationship between Islam and Judaism?"
      ]
    },
    {
      category: 'practices',
      claim: "Halal is just about food restrictions",
      clarification: "Halal means permissible and applies to all aspects of life. Islamic dietary laws emphasize compassion, hygiene, and respect for animals.",
      whyPeopleBelieve: "Halal is most visible in food products, leading people to think it's only about dietary restrictions. The slaughter method is sometimes misunderstood.",
      evidence: {
        quran: [
          { 
            verse: "O you who have believed, eat from the good things which We have provided for you.", 
            ref: "Quran 2:172",
            tafsir: "This verse encourages Muslims to eat from the good, lawful provisions that God has provided. It emphasizes gratitude and mindfulness in consumption."
          },
          { 
            verse: "And there is no creature on [or within] the earth or bird that flies with its wings except that they are communities like you.", 
            ref: "Quran 6:38",
            tafsir: "This verse teaches that animals are communities like humans, deserving of respect and care. It was revealed to emphasize the interconnectedness of all creation."
          }
        ],
        hadith: [
          { 
            text: "Verily, Allah has prescribed excellence in all things. So if you slaughter, slaughter well. Let each one of you sharpen his blade and let him spare suffering to the animal.", 
            ref: "Sahih Muslim",
            context: "This hadith establishes the principle of excellence (ihsan) in all actions, including animal slaughter. It emphasizes compassion and minimizing suffering."
          }
        ],
        stories: [
          {
            title: "The Prophet's Kindness to Animals",
            story: "The Prophet (PBUH) taught compassion to all creatures. He told the story of a woman who entered Paradise for giving water to a thirsty dog, and warned against cruelty to animals.",
            lesson: "Kindness to animals is rewarded by God."
          }
        ]
      },
      summary: [
        "Halal applies to all aspects of life",
        "Compassion for animals is required",
        "Mindfulness in consumption"
      ],
      related: [
        "What is the Islamic method of slaughter?",
        "How does Islam view animal rights?",
        "What is haram in Islam?"
      ]
    }
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
    setShowEvidence({})
  }

  const toggleEvidence = (index) => {
    setShowEvidence(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const filteredMisconceptions = activeCategory === 'all' 
    ? misconceptions 
    : misconceptions.filter(item => item.category === activeCategory)

  return (
    <div className="section">
      <h2>Common Misconceptions</h2>
      <p>Explore common questions about Islam. Click on any claim to learn more.</p>
      
      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat.id)
              setExpandedIndex(null)
              setShowEvidence({})
            }}
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </button>
        ))}
      </div>
      
      {filteredMisconceptions.map((item, index) => (
        <div key={index} className="misconception-accordion">
          <button 
            className="misconception-header"
            onClick={() => toggleExpand(index)}
          >
            <span className="claim-icon">📌</span>
            <span className="claim-text">Claim: {item.claim}</span>
            <span className="expand-icon">{expandedIndex === index ? '▼' : '▶'}</span>
          </button>
          
          {expandedIndex === index && (
            <div className="misconception-content">
              <div className="clarification-box">
                <h4>What Islam Teaches</h4>
                <p>{item.clarification}</p>
              </div>

              <div className="why-believe-box">
                <h4>🔍 Why People Believe This</h4>
                <p>{item.whyPeopleBelieve}</p>
              </div>

              <button 
                className="show-evidence-btn"
                onClick={() => toggleEvidence(index)}
              >
                {showEvidence[index] ? 'Hide Evidence' : 'Show Evidence'}
              </button>

              {showEvidence[index] && (
                <div className="evidence-content">
                  <div className="evidence-tabs">
                    <button
                      className={`evidence-tab ${evidenceSection[index] === 'quran' ? 'active' : ''}`}
                      onClick={() => setEvidenceSection(prev => ({ ...prev, [index]: 'quran' }))}
                    >
                      📖 Quranic Verses
                    </button>
                    <button
                      className={`evidence-tab ${evidenceSection[index] === 'hadith' ? 'active' : ''}`}
                      onClick={() => setEvidenceSection(prev => ({ ...prev, [index]: 'hadith' }))}
                    >
                      📚 Hadith
                    </button>
                    <button
                      className={`evidence-tab ${evidenceSection[index] === 'stories' ? 'active' : ''}`}
                      onClick={() => setEvidenceSection(prev => ({ ...prev, [index]: 'stories' }))}
                    >
                      📖 Stories
                    </button>
                  </div>

                  {(!evidenceSection[index] || evidenceSection[index] === 'quran') && (
                    <div className="evidence-section">
                      <h5>📖 Quranic Verses</h5>
                      {item.evidence.quran.map((verse, i) => (
                        <div key={i} className="verse">
                          <p className="verse-text">"{verse.verse}"</p>
                          <p className="verse-ref">{verse.ref}</p>
                          {verse.tafsir && <p className="verse-tafsir"><strong>Tafsir:</strong> {verse.tafsir}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                  {evidenceSection[index] === 'hadith' && (
                    <div className="evidence-section">
                      <h5>📚 Hadith</h5>
                      {item.evidence.hadith.map((hadith, i) => (
                        <div key={i} className="hadith">
                          <p className="hadith-text">"{hadith.text}"</p>
                          <p className="hadith-ref">{hadith.ref}</p>
                          {hadith.context && <p className="hadith-context"><strong>Context:</strong> {hadith.context}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                  {evidenceSection[index] === 'stories' && (
                    <div className="evidence-section">
                      <h5>📖 Stories</h5>
                      {item.evidence.stories.map((story, i) => (
                        <div key={i} className="story">
                          <h6>{story.title}</h6>
                          <p>{story.story}</p>
                          <p className="story-lesson"><strong>Lesson:</strong> {story.lesson}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="summary-box">
                    <h5>In Summary, Islam Teaches:</h5>
                    <ul className="summary-list">
                      {item.summary.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="related-box">
                    <h5>Related Questions</h5>
                    <ul className="related-list">
                      {item.related.map((question, i) => (
                        <li key={i}>{question}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ViolenceMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Islam Promotes Violence</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many people believe that Islam is a violent religion that promotes terrorism and killing innocent people.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Islam Means Peace</h3>
        <p>The word "Islam" comes from the Arabic root "S-L-M" which means peace, submission, and safety. Let's examine the evidence:</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"Whoever kills a soul unless for a soul or for corruption [done] in the land - it is as if he had slain all of mankind. And whoever saves one - it is as if he had saved all of mankind."</p>
          <p className="verse-ref">Quran 5:32</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And do not kill the soul which Allah has forbidden, except by right."</p>
          <p className="verse-ref">Quran 17:33</p>
        </div>

        <div className="verse">
          <p className="verse-text">"There is no compulsion in religion - the right way is indeed clearly distinct from error."</p>
          <p className="verse-ref">Quran 2:256</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And if they incline to peace, then incline to it [also] and rely upon Allah."</p>
          <p className="verse-ref">Quran 8:61</p>
        </div>

        <div className="verse">
          <p className="verse-text">"The good deed and the evil deed are not alike. Repel the evil deed with one which is better, then lo! he, between whom and you there was enmity, (will become) as though he was a bosom friend."</p>
          <p className="verse-ref">Quran 41:34</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"The Muslim is the one from whose tongue and hand the people are safe."</p>
          <p className="hadith-ref">Sahih Bukhari & Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"None of you truly believes until he loves for his brother what he loves for himself."</p>
          <p className="hadith-ref">Sahih Bukhari & Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Do not envy one another, do not hate one another, do not turn away from one another, and do not undercut one another. Be servants of Allah, brothers."</p>
          <p className="hadith-ref">Sahih Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"A believer is not one who eats his fill while his neighbor is hungry."</p>
          <p className="hadith-ref">Al-Adab Al-Mufrad</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Stories from the Prophet's Life</h4>
        
        <div className="story">
          <h5>The Conquest of Mecca - A Lesson in Forgiveness</h5>
          <p>When Prophet Muhammad (PBUH) and the Muslims conquered Mecca after 13 years of persecution, torture, and killing of Muslims, he had every right to seek revenge. The people of Mecca had tortured and killed many Muslims, including the Prophet's beloved uncle Hamza.</p>
          <p>Instead of revenge, the Prophet (PBUH) declared: "Go, for you are free!" He forgave his fiercest enemies, including those who had personally persecuted him and his family. This act of mercy and forgiveness is one of the greatest examples in human history.</p>
          <p className="lesson">This shows that true strength lies in forgiveness, not revenge.</p>
        </div>

        <div className="story">
          <h5>Kindness to Enemies</h5>
          <p>When the Prophet (PBUH) migrated to Medina, he left his belongings in Mecca with a non-Muslim enemy, Umm Ayman, for safekeeping. Despite being enemies, the Prophet trusted her with his possessions, and she faithfully returned them when asked.</p>
          <p className="lesson">Trust and honesty should be maintained even with those who oppose you.</p>
        </div>

        <div className="story">
          <h5>Respect for the Dead</h5>
          <p>During a battle, the Prophet (PBUH) saw the body of an enemy warrior who had been killed. He instructed his companions: "Do not mutilate the dead." He also ordered that the enemy's body be treated with respect and given a proper burial.</p>
          <p className="lesson">Even in war, Islam teaches respect for human dignity and the dead.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ Rules of War in Islam</h4>
        <p>Islam has strict rules for warfare that were established 1400 years ago:</p>
        <ul className="rules-list">
          <li>Do not kill women, children, elderly, or monks/priests</li>
          <li>Do not destroy crops, trees, or buildings</li>
          <li>Do not kill prisoners of war</li>
          <li>Do not mutilate bodies</li>
          <li>Fight only those who fight you</li>
          <li>Stop fighting if the enemy seeks peace</li>
        </ul>
        <p className="source">Source: Abu Dawud, Al-Muwatta, and other hadith collections</p>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Islam is a religion of peace that values human life above all else. The actions of terrorists or extremists do not represent Islam, just as the actions of any criminal do not represent their religion or community. The Quran and Prophet Muhammad's (PBUH) teachings consistently promote peace, mercy, and respect for all human beings.</p>
      </div>
    </div>
  )
}

function WomenMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Women Are Oppressed in Islam</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many believe that Islam oppresses women, denies them rights, and treats them as inferior to men.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Islam Elevated Women's Status</h3>
        <p>Islam granted women rights 1400 years ago that were revolutionary for that time and that many societies only recognized in the last century.</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"And for women are rights over men similar to those of men over women."</p>
          <p className="verse-ref">Quran 2:228</p>
        </div>

        <div className="verse">
          <p className="verse-text">"The believers, men and women, are allies of one another. They enjoin what is right and forbid what is wrong."</p>
          <p className="verse-ref">Quran 9:71</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And whoever does righteous deeds, whether male or female, while being a believer - those will enter Paradise."</p>
          <p className="verse-ref">Quran 4:124</p>
        </div>

        <div className="verse">
          <p className="verse-text">"O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another."</p>
          <p className="verse-ref">Quran 49:13</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And live with them in kindness. For if you dislike them - perhaps you dislike something in which Allah has placed much good."</p>
          <p className="verse-ref">Quran 4:19</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"The best of you are those who are best to their wives."</p>
          <p className="hadith-ref">Tirmidhi</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Treat your women well and be kind to them for they are your partners and committed helpers."</p>
          <p className="hadith-ref">Tirmidhi</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"The most perfect believer in faith is the one whose character is finest and who is kindest to his wife."</p>
          <p className="hadith-ref">Tirmidhi</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Paradise lies at the feet of your mother."</p>
          <p className="hadith-ref">Nasai</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"A man came to the Prophet and asked, 'Who is most deserving of my good treatment?' The Prophet said, 'Your mother.' The man asked, 'Then who?' The Prophet said, 'Your mother.' The man asked again, 'Then who?' The Prophet said, 'Your mother.' The man asked a fourth time, 'Then who?' The Prophet said, 'Your father.'"</p>
          <p className="hadith-ref">Bukhari & Muslim</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Stories from the Prophet's Life</h4>
        
        <div className="story">
          <h5>Khadijah (RA) - The First Muslim and Businesswoman</h5>
          <p>Khadijah was a successful businesswoman who employed Prophet Muhammad (PBUH) before their marriage. She was a wealthy merchant who ran her own trading business. The Prophet (PBUH) respected her greatly and never married another woman while she was alive. She was the first person to believe in his message and supported him through the most difficult times.</p>
          <p className="lesson">Islam respects and values women's intelligence, business acumen, and leadership.</p>
        </div>

        <div className="story">
          <h5>Aisha (RA) - Scholar and Teacher</h5>
          <p>Aisha, the Prophet's wife, was one of the most knowledgeable scholars of Islam. She narrated over 2,000 hadith and taught both men and women. Companions of the Prophet would come to her for guidance on religious matters. She led an army in battle and was a political leader.</p>
          <p className="lesson">Islam encourages women's education and scholarship.</p>
        </div>

        <div className="story">
          <h5>The Woman Who Corrected the Caliph</h5>
          <p>During a sermon, Caliph Umar ibn Al-Khattab was speaking about dowry amounts. A woman stood up and corrected him, citing a Quranic verse that showed he was wrong. Umar immediately acknowledged his mistake and said, "The woman is right and Umar is wrong."</p>
          <p className="lesson">Islam values truth and knowledge regardless of gender.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ Rights Granted to Women in Islam (1400+ years ago)</h4>
        <ul className="rules-list">
          <li>Right to own and inherit property</li>
          <li>Right to education</li>
          <li>Right to choose her spouse</li>
          <li>Right to keep her own earnings</li>
          <li>Right to divorce</li>
          <li>Right to testify in court</li>
          <li>Right to participate in society and politics</li>
          <li>Protection from abuse and mistreatment</li>
        </ul>
        <p className="note">Many of these rights were not granted to women in Western societies until the 19th and 20th centuries.</p>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Islam elevated the status of women at a time when they were treated as property in many societies. The Quran and Prophet Muhammad's (PBUH) teachings emphasize respect, kindness, and equality between men and women. Any oppression of women in Muslim societies is a cultural issue, not an Islamic one. Islam itself champions women's rights and dignity.</p>
      </div>
    </div>
  )
}

function GodMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Muslims Worship a Different God</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many believe that Muslims worship a different god called "Allah" who is not the same as the God of Christians and Jews.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Allah is the Arabic Word for God</h3>
        <p>Muslims worship the same One God that Christians and Jews worship - the God of Abraham, Moses, Jesus, and all the prophets (peace be upon them).</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.'"</p>
          <p className="verse-ref">Quran 112:1-4</p>
        </div>

        <div className="verse">
          <p className="verse-text">"Say, 'O People of the Scripture, come to a word that is equitable between us and you - that we will not worship except Allah and not associate anything with Him and not take one another as lords instead of Allah.'"</p>
          <p className="verse-ref">Quran 3:64</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And do not argue with the People of the Scripture except in a way that is best, except for those who commit injustice among them, and say, 'We believe in that which has been revealed to us and revealed to you. And our God and your God is one; and we are Muslims [in submission] to Him.'"</p>
          <p className="verse-ref">Quran 29:46</p>
        </div>

        <div className="verse">
          <p className="verse-text">"We have believed in Allah and in what was revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and in what was given to Moses and Jesus and to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [submitting] to Him."</p>
          <p className="verse-ref">Quran 3:84</p>
        </div>

        <div className="verse">
          <p className="verse-text">"Indeed, those who have believed and those who were Jews and Christians and Sabians - those who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord."</p>
          <p className="verse-ref">Quran 2:62</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"Both in this world and in the Hereafter, I am the nearest of all the people to Jesus, the son of Mary. The prophets are paternal brothers; their mothers are different, but their religion is one."</p>
          <p className="hadith-ref">Sahih Bukhari</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Do not envy one another, do not hate one another, do not turn away from one another, and do not undercut one another. Be servants of Allah, brothers."</p>
          <p className="hadith-ref">Sahih Muslim</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Historical and Linguistic Evidence</h4>
        
        <div className="story">
          <h5>"Allah" is Arabic for "God"</h5>
          <p>The word "Allah" is simply the Arabic word for "God." Arab Christians and Arab Jews also use the word "Allah" when referring to God in their Arabic Bibles and religious texts. It's not a different deity - it's the same God referred to in a different language.</p>
          <p className="example">Example: Spanish speakers say "Dios," French speakers say "Dieu," and Arabic speakers say "Allah" - all referring to the same Creator.</p>
        </div>

        <div className="story">
          <h5>Common Prophets and Stories</h5>
          <p>Islam, Christianity, and Judaism share many of the same prophets and stories:</p>
          <ul className="rules-list">
            <li>Adam (the first prophet)</li>
            <li>Noah (the ark)</li>
            <li>Abraham (father of monotheism)</li>
            <li>Moses (the Ten Commandments)</li>
            <li>David and Solomon</li>
            <li>John the Baptist</li>
            <li>Jesus (born of Virgin Mary)</li>
          </ul>
          <p className="lesson">All three faiths trace their spiritual lineage back to Abraham and worship the same God.</p>
        </div>

        <div className="story">
          <h5>The Prophet's Respect for Other Faiths</h5>
          <p>When Prophet Muhammad (PBUH) established the first Muslim community in Medina, he granted religious freedom to Christians and Jews living there. He signed treaties guaranteeing their rights to practice their faith freely. He also allowed a Christian delegation from Najran to pray in his mosque.</p>
          <p className="lesson">Islam teaches respect for people of all faiths who worship the One God.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ What Muslims Believe About God</h4>
        <ul className="rules-list">
          <li>God is One (no partners, no children, no equals)</li>
          <li>God is the Creator of everything</li>
          <li>God is Merciful, Just, and All-Knowing</li>
          <li>God sent prophets to guide humanity</li>
          <li>God revealed holy books (Torah, Psalms, Gospel, Quran)</li>
          <li>God will judge all people on the Day of Judgment</li>
          <li>God is unlike His creation and cannot be compared to anything</li>
        </ul>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Muslims worship the same One God that Christians and Jews worship - the God of Abraham, Moses, and Jesus (peace be upon them). The word "Allah" is simply Arabic for "God." Islam is a continuation of the same monotheistic tradition, with Prophet Muhammad (PBUH) as the final messenger. The core belief in One God unites all three faiths.</p>
      </div>
    </div>
  )
}

function ClothingMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Women's Clothing is Oppressive</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many believe that Islamic dress codes for women (hijab, niqab, etc.) are oppressive and forced upon them against their will.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Modesty is a Choice and Applies to Both Genders</h3>
        <p>Islamic dress codes emphasize modesty for both men and women. The hijab is a personal choice and many Muslim women choose to wear it as an expression of their faith and identity.</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"And tell the believing women to lower their gaze and guard their private parts and not display their adornment except that which [necessarily] appears thereof and to wrap [a portion of] their headcovers over their chests."</p>
          <p className="verse-ref">Quran 24:31</p>
        </div>

        <div className="verse">
          <p className="verse-text">"O Prophet, tell your wives and your daughters and the women of the believers to bring down over themselves [part] of their outer garments."</p>
          <p className="verse-ref">Quran 33:59</p>
        </div>

        <div className="verse">
          <p className="verse-text">"Tell the believing men to lower their gaze and guard their private parts. That is purer for them."</p>
          <p className="verse-ref">Quran 24:30</p>
        </div>

        <div className="verse">
          <p className="verse-text">"There is no compulsion in religion - the right way is indeed clearly distinct from error."</p>
          <p className="verse-ref">Quran 2:256</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"Modesty is part of faith."</p>
          <p className="hadith-ref">Sahih Bukhari & Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Every religion has its characteristic, and the characteristic of Islam is modesty."</p>
          <p className="hadith-ref">Ibn Majah</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Key Points About Islamic Dress</h4>
        
        <div className="story">
          <h5>Modesty Applies to Both Men and Women</h5>
          <p>Islam requires modesty from both men and women. Men are commanded to lower their gaze and cover from navel to knee. Women have additional requirements due to different physical nature and social context. The focus is on modest behavior and dress for everyone.</p>
        </div>

        <div className="story">
          <h5>It's a Personal Choice</h5>
          <p>The Quran clearly states "There is no compulsion in religion" (2:256). No one can force a woman to wear hijab. Many Muslim women choose to wear it as an act of worship and identity. Conversely, some Muslim women choose not to wear it, and that is their personal choice.</p>
        </div>

        <div className="story">
          <h5>Empowerment, Not Oppression</h5>
          <p>Many Muslim women view hijab as empowering - it allows them to be judged for their intellect and character rather than their appearance. It's similar to how nuns in Christianity wear habits as a sign of devotion.</p>
        </div>

        <div className="story">
          <h5>Cultural vs. Religious</h5>
          <p>It's important to distinguish between cultural practices and religious requirements. In some countries, women are forced to dress a certain way due to cultural or political reasons, not Islamic teachings. Islam itself does not force anyone.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ What Islamic Dress Actually Means</h4>
        <ul className="rules-list">
          <li>Modesty in behavior and speech</li>
          <li>Clothing that is not tight or revealing</li>
          <li>Covering the body appropriately</li>
          <li>Lowering the gaze (both men and women)</li>
          <li>Respectful interaction between genders</li>
          <li>Personal choice and intention matters</li>
        </ul>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Islamic dress codes emphasize modesty for both men and women. The hijab is a personal choice that many Muslim women make as an expression of their faith. While some cultures may enforce dress codes, Islam itself teaches that there is no compulsion in religion. The focus is on modesty, respect, and personal devotion, not oppression.</p>
      </div>
    </div>
  )
}

function AishaMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: The Prophet Married a 9-Year-Old</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many people criticize Prophet Muhammad (PBUH) for marrying Aisha when she was reportedly 9 years old, viewing it as inappropriate by modern standards.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Historical Context and Understanding</h3>
        <p>This issue requires understanding the historical context of 7th century Arabia, where marriage practices were different from today. The marriage was not consummated until Aisha reached maturity.</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Historical Context</h4>
        
        <div className="story">
          <h5>Marriage Practices in 7th Century Arabia</h5>
          <p>In 7th century Arabia, it was common for girls to be betrothed at young ages. This was not unique to Islam - it was a widespread practice across many cultures, including Europe, until relatively recently. The concept of "childhood" as we understand it today did not exist then.</p>
          <p className="example">Example: In medieval Europe, girls as young as 12 were often married. The age of consent in the UK was 12 until 1875, and in the US it was 10 in some states until the late 19th century.</p>
        </div>

        <div className="story">
          <h5>Age of Maturity Was Different</h5>
          <p>In hot climates like Arabia, children reached physical maturity earlier. Girls often reached puberty around age 9-10. In that society, once someone reached puberty, they were considered an adult ready for marriage.</p>
        </div>

        <div className="story">
          <h5>The Marriage Was Not Consummated Until Maturity</h5>
          <p>While the marriage contract may have been made when Aisha was young, the actual marriage was not consummated until she reached physical and mental maturity in Medina. This was the practice of the time.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Evidence of Aisha's Maturity and Status</h4>
        
        <div className="story">
          <h5>Aisha Was a Scholar and Leader</h5>
          <p>Aisha became one of the most knowledgeable scholars of Islam. She narrated over 2,000 hadith and taught both men and women. She led an army in battle and was a political advisor. This shows she was treated with respect and given significant responsibilities, not as a child but as an educated adult woman.</p>
        </div>

        <div className="story">
          <h5>She Was the Prophet's Beloved Wife</h5>
          <p>The Prophet (PBUH) loved Aisha dearly and treated her with great respect and kindness. Their relationship was based on mutual love and respect. She was his favorite wife and he often sought her counsel.</p>
        </div>

        <div className="story">
          <h5>Her Age Was Not Unusual for the Time</h5>
          <p>Many of the Prophet's companions also married young. This was the social norm of that era. Judging historical figures by modern standards without context is not fair or accurate.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Important Considerations</h4>
        
        <div className="story">
          <h5>Historical Context Matters</h5>
          <p>We must judge historical events within their historical context. What was normal 1400 years ago may not be acceptable today, and vice versa. The Prophet (PBUH) followed the customs of his time while improving many practices.</p>
        </div>

        <div className="story">
          <h5>Islam Improved Women's Status</h5>
          <p>Despite following some customs of his time, the Prophet (PBUH) revolutionized women's rights. He granted women rights to own property, inherit, choose their spouse, receive education, and divorce - rights that were unprecedented in that era.</p>
        </div>

        <div className="story">
          <h5>Modern Islamic Law</h5>
          <p>Today, the vast majority of Muslim countries have set minimum age requirements for marriage, in line with modern understanding and international standards. Islamic scholars generally agree that marriage requires physical and mental maturity.</p>
        </div>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>The marriage of Prophet Muhammad (PBUH) to Aisha must be understood in its historical context. In 7th century Arabia, early marriage was the norm across all cultures. The marriage was not consummated until Aisha reached maturity. Aisha grew to become a respected scholar, teacher, and leader, demonstrating that she was treated with dignity and respect. While modern standards have changed, it's important to understand historical events within their proper context rather than judging them by today's norms.</p>
      </div>
    </div>
  )
}

function TerrorismMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Islam is a Terrorist Religion</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many people associate Islam with terrorism due to the actions of extremist groups, believing that terrorism is part of Islamic teachings.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Terrorism is Condemned in Islam</h3>
        <p>Terrorism has no basis in Islamic teachings. The actions of terrorists are condemned by the vast majority of Muslims and Islamic scholars worldwide.</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"Whoever kills a soul unless for a soul or for corruption [done] in the land - it is as if he had slain all of mankind. And whoever saves one - it is as if he had saved all of mankind."</p>
          <p className="verse-ref">Quran 5:32</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And do not kill the soul which Allah has forbidden, except by right."</p>
          <p className="verse-ref">Quran 17:33</p>
        </div>

        <div className="verse">
          <p className="verse-text">"There is no compulsion in religion - the right way is indeed clearly distinct from error."</p>
          <p className="verse-ref">Quran 2:256</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And if they incline to peace, then incline to it [also] and rely upon Allah."</p>
          <p className="verse-ref">Quran 8:61</p>
        </div>

        <div className="verse">
          <p className="verse-text">"The good deed and the evil deed are not alike. Repel the evil deed with one which is better, then lo! he, between whom and you there was enmity, (will become) as though he was a bosom friend."</p>
          <p className="verse-ref">Quran 41:34</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And do not incline toward those who do wrong, lest you be touched by the Fire."</p>
          <p className="verse-ref">Quran 11:113</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"The Muslim is the one from whose tongue and hand the people are safe."</p>
          <p className="hadith-ref">Sahih Bukhari & Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"None of you truly believes until he loves for his brother what he loves for himself."</p>
          <p className="hadith-ref">Sahih Bukhari & Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Do not kill women, children, the elderly, or monks/priests."</p>
          <p className="hadith-ref">Abu Dawud</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Whoever kills a person who has a treaty with the Muslims will not smell the fragrance of Paradise."</p>
          <p className="hadith-ref">Sahih Bukhari</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Beware! Whoever is cruel and hard to a non-Muslim minority, or curtails their rights, or burdens them with more than they can bear, or takes anything from them against their will, I will complain against him on the Day of Judgment."</p>
          <p className="hadith-ref">Abu Dawud</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Islamic Condemnation of Terrorism</h4>
        
        <div className="story">
          <h5>Global Muslim Condemnation</h5>
          <p>After every terrorist attack, Muslim organizations, scholars, and leaders worldwide issue strong condemnations. Major Islamic organizations have issued fatwas (religious rulings) declaring terrorism and suicide bombing as forbidden in Islam.</p>
        </div>

        <div className="story">
          <h5>Terrorists Target Muslims Too</h5>
          <p>The majority of victims of terrorist attacks are actually Muslims themselves. In 2019, according to the Global Terrorism Index, 95% of terrorist attack fatalities were in Muslim-majority countries. This shows that terrorists are enemies of Muslims, not representatives of Islam.</p>
        </div>

        <div className="story">
          <h5>Extremists Are a Tiny Minority</h5>
          <p>Extremist groups represent a tiny fraction of Muslims worldwide (less than 0.01%). The vast majority of Muslims are peaceful, law-abiding citizens who condemn terrorism. Blaming all Muslims for the actions of a few extremists is unfair and inaccurate.</p>
        </div>

        <div className="story">
          <h5>Political, Not Religious</h5>
          <p>Most terrorism experts agree that terrorism is driven by political, social, and economic factors, not religious teachings. Terrorists use religion as a cover for their political agendas, but their actions contradict Islamic teachings.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ What Islam Actually Teaches About Violence</h4>
        <ul className="rules-list">
          <li>Killing innocent people is strictly forbidden</li>
          <li>Suicide is forbidden in Islam</li>
          <li>War is only allowed in self-defense</li>
          <li>Strict rules of war must be followed</li>
          <li>Peace must be preferred over war</li>
          <li>Non-combatants must never be harmed</li>
          <li>Forgiveness and mercy are encouraged</li>
        </ul>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Terrorism is completely forbidden in Islam. The Quran and Prophet Muhammad's (PBUH) teachings consistently emphasize peace, mercy, and the sanctity of human life. The actions of terrorists are condemned by the vast majority of Muslims and Islamic scholars worldwide. Terrorism is driven by political, social, and economic factors, not by Islamic teachings. Blaming Islam for terrorism is like blaming Christianity for the actions of the KKK or any other extremist group - it's simply not accurate or fair.</p>
      </div>
    </div>
  )
}

function PolygamyMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Men Can Marry 4 Women But Women Can't</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many believe that Islam unfairly allows men to marry up to 4 women while women can only marry one man, viewing this as gender discrimination.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Polygamy is Restricted, Not Encouraged</h3>
        <p>Islam restricted polygamy from unlimited to maximum 4 wives, with strict conditions. It's not the norm and most Muslims are monogamous. The restriction was actually a reform for women's protection.</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"And if you fear that you will not deal justly with the orphan girls, then marry those that please you of [other] women, two or three or four. But if you fear that you will not be just, then [marry only] one or those your right hand possesses. That is more suitable that you may not incline [to injustice]."</p>
          <p className="verse-ref">Quran 4:3</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And you will never be able to be equal [in feeling] between wives, even if you should strive [to do so]. So do not incline completely [toward one] and leave another hanging."</p>
          <p className="verse-ref">Quran 4:129</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And for women are rights over men similar to those of men over women."</p>
          <p className="verse-ref">Quran 2:228</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"The best of you are those who are best to their wives."</p>
          <p className="hadith-ref">Tirmidhi</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Whoever has two wives and he inclines to one of them over the other, he will come on the Day of Judgment with his side leaning."</p>
          <p className="hadith-ref">Abu Dawud</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"This man has two wives but he does not deal justly between them."</p>
          <p className="hadith-ref">Sahih Bukhari</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Understanding the Context</h4>
        
        <div className="story">
          <h5>Islam Restricted, Not Introduced, Polygamy</h5>
          <p>Before Islam, men could marry unlimited wives. Islam restricted this to maximum 4, with strict conditions. This was actually a reform to protect women's rights and ensure fair treatment.</p>
        </div>

        <div className="story">
          <h5>Strict Conditions Must Be Met</h5>
          <p>Islam allows polygamy only if the man can treat all wives equally in terms of time, money, affection, and care. The Quran acknowledges that this is nearly impossible (4:129), effectively discouraging polygamy for most men.</p>
        </div>

        <div className="story">
          <h5>It's a Permission, Not a Command</h5>
          <p>Polygamy is not required or encouraged in Islam. It's merely permitted under specific circumstances. The Quran explicitly states that marrying one is better if you fear injustice (4:3).</p>
        </div>

        <div className="story">
          <h5>Historical Context</h5>
          <p>In 7th century Arabia, many women were widowed due to constant wars. Polygamy provided social and economic protection for these women and their children. It was a social welfare system of that time.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Why Women Can't Marry Multiple Men</h4>
        
        <div className="story">
          <h5>Paternity and Lineage</h5>
          <p>The primary reason is to ensure clear paternity and lineage. In a society where a woman could have multiple husbands, it would be impossible to determine the father of a child, which has implications for inheritance, family structure, and social order.</p>
        </div>

        <div className="story">
          <h5>Biological and Social Considerations</h5>
          <p>From a biological perspective, a woman can only be pregnant by one man at a time. The Islamic system aims to create stable family units with clear parental responsibilities.</p>
        </div>

        <div className="story">
          <h5>Protection of Women's Rights</h5>
          <p>Islam aims to protect women's rights by ensuring they receive full support and attention from their husband. Multiple husbands would dilute this support and create conflict.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ Modern Practice and Reality</h4>
        <ul className="rules-list">
          <li>Most Muslims are monogamous (one wife)</li>
          <li>Polygamy is illegal in many Muslim countries</li>
          <li>First wife's consent is often required by law</li>
          <li>Strict financial requirements must be met</li>
          <li>It's rare in modern Muslim societies</li>
          <li>Many Muslim countries have banned it completely</li>
        </ul>
        <p className="note">Countries like Tunisia, Turkey, and many others have completely banned polygamy, showing that it's not an essential Islamic practice.</p>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Islam restricted polygamy from unlimited to maximum 4 wives with strict conditions, making it a reform for women's protection rather than discrimination. The Quran explicitly states that marrying one wife is better if you fear injustice. Most Muslims today are monogamous, and many Muslim countries have banned polygamy entirely. The permission for polygamy was contextual and aimed at social welfare, not male privilege. The system is designed to protect women's rights and ensure fair treatment, not to oppress them.</p>
      </div>
    </div>
  )
}

function OriginsMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Islam Started with Prophet Muhammad (PBUH)</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many people believe that Islam began with Prophet Muhammad (PBUH) in the 7th century, thinking it's a "new" religion that started 1400 years ago.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Islam Began with Prophet Adam</h3>
        <p>Islam is not a new religion - it's the original monotheistic faith that began with the first human, Prophet Adam (peace be upon him). Prophet Muhammad (PBUH) was the final messenger in a long line of prophets.</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"Indeed, the religion in the sight of Allah is Islam."</p>
          <p className="verse-ref">Quran 3:19</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And We sent not before you any messenger except that We revealed to him that, 'There is no deity except Me, so worship Me.'"</p>
          <p className="verse-ref">Quran 21:25</p>
        </div>

        <div className="verse">
          <p className="verse-text">"He has ordained for you of religion what He enjoined upon Noah and that which We have revealed to you, [O Muhammad], and what We enjoined upon Abraham and Moses and Jesus - to establish the religion and not be divided therein."</p>
          <p className="verse-ref">Quran 42:13</p>
        </div>

        <div className="verse">
          <p className="verse-text">"Say, 'We have believed in Allah and in what was revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and in what was given to Moses and Jesus and to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [submitting] to Him.'"</p>
          <p className="verse-ref">Quran 3:84</p>
        </div>

        <div className="verse">
          <p className="verse-text">"Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets."</p>
          <p className="verse-ref">Quran 33:40</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"The prophets are brothers from different mothers, but their religion is one."</p>
          <p className="hadith-ref">Sahih Bukhari</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"I was the first of the prophets in creation and the last of them in revelation."</p>
          <p className="hadith-ref">Sahih Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Between Adam and Noah, there were ten generations, all of whom were upon Islam."</p>
          <p className="hadith-ref">Ibn Hibban</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 The Line of Prophets in Islam</h4>
        
        <div className="story">
          <h5>Prophet Adam - The First Prophet</h5>
          <p>Adam (peace be upon him) was the first human and the first prophet. He taught his children about God and the importance of worshipping Him alone. This was the beginning of Islam - submission to the One God.</p>
        </div>

        <div className="story">
          <h5>All Prophets Taught the Same Message</h5>
          <p>From Adam to Muhammad (peace be upon them all), every prophet taught the same core message: worship One God, do good, avoid evil, and prepare for the Hereafter. The message was the same, but the laws were adapted to different times and peoples.</p>
        </div>

        <div className="story">
          <h5>Major Prophets Mentioned in the Quran</h5>
          <p>Islam recognizes and honors all prophets mentioned in the Bible and more:</p>
          <ul className="rules-list">
            <li>Adam - First prophet and first human</li>
            <li>Noah - Built the ark</li>
            <li>Abraham - Father of monotheism</li>
            <li>Ishmael - Son of Abraham</li>
            <li>Isaac - Son of Abraham</li>
            <li>Jacob - Son of Isaac</li>
            <li>Joseph - Son of Jacob</li>
            <li>Moses - Received the Torah</li>
            <li>David - King and prophet</li>
            <li>Solomon - Wise king</li>
            <li>Job - Patient prophet</li>
            <li>Jonah - Swallowed by the whale</li>
            <li>Zachariah - Father of John the Baptist</li>
            <li>John the Baptist - Predecessor of Jesus</li>
            <li>Jesus - Born of Virgin Mary</li>
            <li>Muhammad - Final messenger (PBUH)</li>
          </ul>
        </div>

        <div className="story">
          <h5>Prophet Muhammad (PBUH) - The Final Messenger</h5>
          <p>Prophet Muhammad (PBUH) was not the founder of Islam, but its final messenger. He came to restore the original message that had been corrupted over time. The Quran is the final revelation, completing and perfecting the guidance given through all previous prophets.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 What "Islam" Actually Means</h4>
        
        <div className="story">
          <h5>Islam = Submission to God</h5>
          <p>The word "Islam" means "submission" or "surrender" to the will of God. Anyone who submits to God and follows His guidance is a "Muslim" (one who submits). This is why the Quran says that all true prophets and their followers were Muslims.</p>
        </div>

        <div className="story">
          <h5>Not a New Religion, But the Original One</h5>
          <p>Islam is not a new religion that started 1400 years ago. It's the original monotheistic faith that God has been teaching humanity since the beginning. Prophet Muhammad (PBUH) simply brought the final, complete version of this eternal message.</p>
        </div>

        <div className="story">
          <h5>Connection to Other Faiths</h5>
          <p>Islam, Christianity, and Judaism all trace their spiritual lineage back to Abraham. They all worship the same God and share many of the same prophets and stories. The differences are in how the message was interpreted and preserved over time.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ Key Points to Remember</h4>
        <ul className="rules-list">
          <li>Islam began with Prophet Adam, the first human</li>
          <li>All prophets taught the same core message</li>
          <li>Prophet Muhammad (PBUH) was the final messenger</li>
          <li>The Quran is the final revelation</li>
          <li>Islam means submission to God</li>
          <li>All true believers throughout history were "Muslims" in the sense of submitting to God</li>
          <li>The message is the same, the laws were adapted to different times</li>
        </ul>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Islam is not a new religion that started with Prophet Muhammad (PBUH) 1400 years ago. It's the original monotheistic faith that began with Prophet Adam, the first human and first prophet. All prophets from Adam to Muhammad (peace be upon them all) taught the same core message: worship One God and live righteously. Prophet Muhammad (PBUH) was the final messenger who brought the complete and final revelation - the Quran. Islam is the continuation of the same faith that God has been teaching humanity since the beginning of time.</p>
      </div>
    </div>
  )
}

function HalalMisconception() {
  return (
    <div className="section">
      <Link to="/misconceptions" className="back-link">← Back to Misconceptions</Link>
      <h2>Misconception: Halal is Just About Food Restrictions</h2>
      
      <div className="myth-box">
        <h3>❌ The Misconception</h3>
        <p>Many people think "Halal" is just about dietary restrictions or that it's a cruel way of slaughtering animals. Some believe it's just another set of arbitrary religious rules.</p>
      </div>

      <div className="evidence-section">
        <h3>✅ The Reality: Halal Means Permissible and Includes Compassion</h3>
        <p>"Halal" is an Arabic word meaning "permissible" or "lawful." It applies to all aspects of life, not just food. Islamic dietary laws emphasize compassion, hygiene, and respect for animals.</p>
      </div>

      <div className="evidence-card">
        <h4>📖 Quranic Evidence</h4>
        
        <div className="verse">
          <p className="verse-text">"O you who have believed, eat from the good things which We have provided for you and be grateful to Allah if it is [indeed] Him that you worship."</p>
          <p className="verse-ref">Quran 2:172</p>
        </div>

        <div className="verse">
          <p className="verse-text">"Lawful to you is game from the sea and its food as provision for you and the travelers."</p>
          <p className="verse-ref">Quran 5:96</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And there is no creature on [or within] the earth or bird that flies with its wings except that they are communities like you."</p>
          <p className="verse-ref">Quran 6:38</p>
        </div>

        <div className="verse">
          <p className="verse-text">"And the cattle - He created them for you; in them is warmth and [numerous] benefits, and from them you eat."</p>
          <p className="verse-ref">Quran 16:5</p>
        </div>

        <div className="verse">
          <p className="verse-text">"Eat of what Allah has provided for you and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy."</p>
          <p className="verse-ref">Quran 6:142</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📚 Hadith (Sayings of Prophet Muhammad PBUH)</h4>
        
        <div className="hadith">
          <p className="hadith-text">"Verily, Allah has prescribed excellence in all things. So if you kill, kill well; and if you slaughter, slaughter well. Let each one of you sharpen his blade and let him spare suffering to the animal he slaughters."</p>
          <p className="hadith-ref">Sahih Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"While a man was walking, he felt thirsty and went down a well, and drank water from it. On coming out of it, he saw a dog panting and eating mud due to excessive thirst. The man said, 'This dog is suffering from the same problem as that of mine.' So he went down the well again, filled his shoe with water, and held it with his mouth and watered the dog. Allah thanked him for that deed and forgave him." The people asked, "O Allah's Messenger! Is there a reward for us in serving the animals?" He replied, "Yes, there is a reward for serving any animate (living being)."</p>
          <p className="hadith-ref">Sahih Bukhari</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"A woman was punished because she imprisoned a cat until it died. On account of this, she was doomed to Hell. While she imprisoned it, she did not give the cat food or drink, nor did she free it to eat from the insects of the earth."</p>
          <p className="hadith-ref">Sahih Bukhari & Muslim</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"The Prophet (PBUH) saw a man whose camel had a heavy load on it. He said, 'Fear Allah regarding these dumb animals. Ride them when they are fit to be ridden and get off them when they are tired.'"</p>
          <p className="hadith-ref">Abu Dawud</p>
        </div>

        <div className="hadith">
          <p className="hadith-text">"Whoever kills a sparrow or anything bigger than that without a just cause, Allah will hold him accountable on the Day of Judgment."</p>
          <p className="hadith-ref">Nasai</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 What Halal Actually Means</h4>
        
        <div className="story">
          <h5>Halal = Permissible, Haram = Forbidden</h5>
          <p>In Islam, everything is generally considered halal (permissible) unless specifically prohibited. The opposite of halal is "haram" (forbidden). This applies to food, drink, behavior, business, and all aspects of life.</p>
        </div>

        <div className="story">
          <h5>Halal Applies to All Aspects of Life</h5>
          <p>Halal is not just about food. It includes:</p>
          <ul className="rules-list">
            <li>Halal food and drink</li>
            <li>Halal earnings (money earned through lawful means)</li>
            <li>Halal business practices</li>
            <li>Halal relationships</li>
            <li>Halal entertainment</li>
            <li>Halal speech and behavior</li>
          </ul>
        </div>

        <div className="story">
          <h5>Why Muslims Are Strict About Halal Food</h5>
          <p>Islamic dietary laws serve several purposes:</p>
          <ul className="rules-list">
            <li>Spiritual purification - eating what God has permitted</li>
            <li>Health benefits - avoiding harmful substances</li>
            <li>Animal welfare - ensuring humane treatment</li>
            <li>Hygiene - proper slaughter and preparation</li>
            <li>Gratitude - being mindful of blessings</li>
            <li>Community - shared dietary practices strengthen bonds</li>
          </ul>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Islamic Slaughter: Compassion and Respect</h4>
        
        <div className="story">
          <h5>The Method of Slaughter (Dhabihah)</h5>
          <p>Islamic slaughter has strict requirements designed to minimize suffering:</p>
          <ul className="rules-list">
            <li>The animal must be alive and healthy at the time of slaughter</li>
            <li>The slaughter must be done by a sane adult Muslim</li>
            <li>A sharp knife must be used to ensure quick, painless death</li>
            <li>The cut must sever the windpipe, esophagus, and blood vessels</li>
            <li>The name of Allah must be mentioned before slaughter</li>
            <li>All blood must be drained from the animal</li>
            <li>The animal must not see other animals being slaughtered</li>
            <li>The knife must not be sharpened in front of the animal</li>
          </ul>
        </div>

        <div className="story">
          <h5>Why This Method is Humane</h5>
          <p>Scientific studies have shown that the Islamic method of slaughter causes minimal pain and suffering:</p>
          <ul className="rules-list">
            <li>The quick cut to the neck causes immediate loss of consciousness</li>
            <li>The animal feels no pain after the initial cut</li>
            <li>Draining the blood prevents bacterial growth and improves meat quality</li>
            <li>The method is recognized as humane by many experts</li>
            <li>It's similar to kosher slaughter in Judaism</li>
          </ul>
        </div>

        <div className="story">
          <h5>Comparison with Modern Slaughter Methods</h5>
          <p>Many modern slaughter methods use stunning (electrical, gas, or captive bolt) which can sometimes fail and cause additional suffering. The Islamic method, when performed correctly, ensures a quick, painless death without the need for stunning.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>📖 Islam's Treatment of Animals</h4>
        
        <div className="story">
          <h5>Animals Have Rights in Islam</h5>
          <p>Islam teaches that animals have rights that must be respected:</p>
          <ul className="rules-list">
            <li>Right to proper food and water</li>
            <li>Right to rest when tired</li>
            <li>Right to be treated with kindness</li>
            <li>Right to not be overburdened</li>
            <li>Right to a humane death if slaughtered</li>
            <li>Right to not be harmed or abused</li>
          </ul>
        </div>

        <div className="story">
          <h5>Stories of Compassion from the Prophet's Life</h5>
          <p>The Prophet (PBUH) showed great compassion to animals throughout his life. He taught that kindness to animals is rewarded by God and that cruelty to animals is a sin. Many stories illustrate this, including the story of the woman who entered Paradise for giving water to a thirsty dog, and the woman who was punished for starving a cat.</p>
        </div>

        <div className="story">
          <h5>Environmental Stewardship</h5>
          <p>Islam teaches that humans are stewards of the earth and its creatures. We are responsible for caring for animals and the environment. This includes not wasting resources, not harming animals unnecessarily, and maintaining balance in nature.</p>
        </div>
      </div>

      <div className="evidence-card">
        <h4>⚖️ What is Haram (Forbidden)</h4>
        <ul className="rules-list">
          <li>Pork and pork products</li>
          <li>Blood and blood products</li>
          <li>Carrion (dead animals)</li>
          <li>Animals slaughtered without mentioning God's name</li>
          <li>Alcohol and intoxicants</li>
          <li>Carnivorous animals with fangs</li>
          <li>Birds of prey</li>
          <li>Any food that is harmful to health</li>
        </ul>
        <p className="note">These prohibitions are based on health, hygiene, and spiritual considerations.</p>
      </div>

      <div className="conclusion">
        <h3>Conclusion</h3>
        <p>Halal is not just about food restrictions - it's a comprehensive system that applies to all aspects of life. Islamic dietary laws emphasize compassion, hygiene, and respect for animals. The method of slaughter is designed to minimize suffering and ensure the animal is treated with dignity. Islam teaches that animals have rights and that kindness to them is rewarded by God. Being mindful of what we eat and how we treat animals is part of being a responsible and compassionate human being.</p>
      </div>
    </div>
  )
}

function ProphetSection() {
  const stories = [
    {
      title: "The Trustworthy (Al-Amin)",
      story: "Even before prophethood, Muhammad (PBUH) was known as 'Al-Amin' (The Trustworthy) in Mecca. People would entrust him with their valuables, knowing he would never betray their trust. When he received the first revelation and faced persecution, he still returned all entrusted items to their owners before leaving Mecca.",
      lesson: "Integrity and honesty are fundamental Islamic values, even in difficult times."
    },
    {
      title: "Kindness to Animals",
      story: "The Prophet (PBUH) taught compassion to all creatures. Once, he saw a bird whose chicks had been taken, and the bird was circling in distress. He instructed his companions to return the chicks immediately. He also told the story of a prostitute who entered Paradise because she gave water to a thirsty dog.",
      lesson: "Kindness to animals is rewarded by God and reflects a believer's character."
    },
    {
      title: "Forgiveness in Conquest",
      story: "When the Muslims peacefully conquered Mecca after years of persecution, the Prophet (PBUH) could have taken revenge on those who had tortured and killed Muslims. Instead, he declared: 'Go, for you are free.' He forgave his fiercest enemies, showing mercy instead of vengeance.",
      lesson: "True strength lies in forgiveness and mercy, not revenge."
    },
    {
      title: "Respect for All People",
      story: "A Jewish funeral procession passed by the Prophet (PBUH). He stood up out of respect. When told it was a Jewish funeral, he said: 'Is it not a human soul?' This demonstrated that respect and dignity are due to all people, regardless of their faith.",
      lesson: "Every human being deserves respect and dignity."
    },
    {
      title: "The Black Stone Incident",
      story: "When the Kaaba was being rebuilt, tribes fought over who would place the Black Stone. They were about to go to war. The Prophet (PBUH) suggested a solution: spread a cloth, place the stone on it, and have leaders from each tribe hold the corners. He then placed the stone in position himself, preventing bloodshed.",
      lesson: "Wisdom and peaceful conflict resolution are better than violence."
    }
  ]

  return (
    <div className="section">
      <h2>Stories from the Life of Prophet Muhammad (PBUH)</h2>
      <p>These stories illustrate the beautiful character and teachings of Prophet Muhammad (peace be upon him).</p>
      
      {stories.map((story, index) => (
        <div key={index} className="story-card">
          <h3>{story.title}</h3>
          <p className="story-text">{story.story}</p>
          <div className="lesson">
            <strong>Lesson:</strong> {story.lesson}
          </div>
        </div>
      ))}
    </div>
  )
}

function QASection() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const questions = [
    {
      q: "What is Islam?",
      a: "Islam is a monotheistic faith that believes in One God (Allah) and follows the teachings of Prophet Muhammad (peace be upon him), who is considered the final prophet. Islam teaches peace, submission to God's will, and living a righteous life. The core beliefs include belief in God, angels, revealed books, prophets, the Day of Judgment, and divine decree."
    },
    {
      q: "What do Muslims believe about God?",
      a: "Muslims believe in One God who is unique, has no partners, no children, and is unlike His creation. God is merciful, just, and all-knowing. The concept of God in Islam is pure monotheism (Tawhid) - God alone deserves worship and has no associates."
    },
    {
      q: "What are the Five Pillars of Islam?",
      a: "The Five Pillars are the foundation of Muslim life: 1) Shahada (Declaration of Faith), 2) Salah (Prayer - five daily prayers), 3) Zakat (Charity - giving to those in need), 4) Sawm (Fasting during Ramadan), and 5) Hajj (Pilgrimage to Mecca, if able)."
    },
    {
      q: "Why do Muslims pray five times a day?",
      a: "The five daily prayers are a way to maintain a constant connection with God throughout the day. They serve as spiritual breaks, reminders of God's presence, and opportunities for gratitude and reflection. Each prayer has specific times and helps structure the day around spiritual awareness."
    },
    {
      q: "What is the Quran?",
      a: "The Quran is the holy book of Islam, believed to be the literal word of God revealed to Prophet Muhammad (PBUH) through the Angel Gabriel over 23 years. It has remained unchanged since its revelation and serves as guidance for all aspects of life. The Quran emphasizes justice, mercy, compassion, and moral conduct."
    },
    {
      q: "How does Islam view other religions?",
      a: "Islam teaches respect for all people of faith. The Quran states: 'There is no compulsion in religion' (2:256). Muslims believe in the same God as Jews and Christians and respect all prophets. Islam encourages dialogue and peaceful coexistence with people of other beliefs."
    },
    {
      q: "What is Ramadan?",
      a: "Ramadan is the holy month of fasting in Islam. Muslims abstain from food, drink, and other physical needs from dawn to sunset. It's a time for spiritual reflection, increased prayer, reading the Quran, and developing self-discipline and empathy for those less fortunate. Fasting is one of the Five Pillars of Islam."
    },
    {
      q: "How can I learn more about Islam?",
      a: "You can learn more by: 1) Reading the Quran (available with translations), 2) Learning about Prophet Muhammad's (PBUH) life, 3) Visiting a local mosque and speaking with Muslims, 4) Reading books by reputable scholars, 5) Watching educational content from authentic sources. Always approach with an open mind and seek knowledge from reliable sources."
    }
  ]

  return (
    <div className="section">
      <h2>Questions & Answers</h2>
      <p>Find answers to common questions about Islam. Click on any question to see the answer.</p>
      
      {questions.map((item, index) => (
        <div key={index} className="qa-item">
          <button 
            className="qa-question" 
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <span>{expandedIndex === index ? '▼' : '▶'}</span>
            <span>{item.q}</span>
          </button>
          {expandedIndex === index && (
            <div className="qa-answer">
              <p>{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function FundamentalsSection() {
  const [activeSection, setActiveSection] = useState('what')

  const fundamentalsInfo = {
    what: {
      title: "What Exactly is Islam?",
      content: [
        {
          heading: "The Meaning of Islam",
          text: "Islam is an Arabic word that means 'submission' or 'surrender' to the will of God. A Muslim is someone who submits to God's will and follows His guidance. Islam is not a new religion but rather the original monotheistic faith that has been taught by all prophets from the beginning of human history."
        },
        {
          heading: "Core Beliefs",
          text: "Islam is built on six core beliefs known as the Articles of Faith: 1) Belief in One God who created everything, 2) Belief in angels as spiritual beings who serve God, 3) Belief in revealed books that God sent to guide humanity, 4) Belief in prophets who delivered God's message, 5) Belief in the Day of Judgment when everyone will be held accountable for their actions, and 6) Belief in God's divine wisdom and plan."
        },
        {
          heading: "The Prophets",
          text: "Muslims believe that God sent prophets to guide humanity throughout history. These include Adam, Noah, Abraham, Moses, David, Solomon, John the Baptist, and Jesus, among many others. Prophet Muhammad (peace be upon him) was the final prophet who brought the complete and final message. All prophets taught the same core message: worship One God and live righteously."
        },
        {
          heading: "Why Muslims Use the Quran",
          text: "Muslims follow the Quran because they believe it is the final, complete, and preserved word of God. The Quran was revealed to Prophet Muhammad (peace be upon him) over 23 years and has remained unchanged for over 1,400 years. Unlike other religious texts that may have been altered or lost over time, the Quran has been preserved in its original form through memorization and written records."
        },
        {
          heading: "Belief in Previous Scriptures",
          text: "Muslims believe in the original scriptures that were revealed before the Quran, including the Torah given to Moses, the Psalms given to David, and the Gospel given to Jesus. However, Muslims believe that these original texts have been changed, altered, or lost over time through human intervention. The Quran is the only scripture that has been preserved in its original, complete form."
        },
        {
          heading: "A Complete Way of Life",
          text: "Islam is more than just a religion - it's a complete way of life that provides guidance for all aspects of human existence: spiritual, moral, social, economic, and political. The Quran and the teachings of Prophet Muhammad (peace be upon him) offer comprehensive guidance for living a balanced, purposeful life."
        },
        {
          heading: "Peace and Mercy",
          text: "The word 'Islam' comes from the same root as the word for 'peace.' Islam teaches peace, mercy, and compassion. The greeting among Muslims is 'Peace be upon you.' God is described as 'The Most Merciful' and 'The Most Compassionate.' These qualities are central to Islamic teachings."
        },
        {
          heading: "Universal Message",
          text: "Islam is a universal message for all of humanity, not limited to any particular race, ethnicity, or culture. People from every background have embraced Islam throughout history. The message addresses all of humanity, inviting everyone to worship One God and live a righteous life."
        },
        {
          heading: "Purpose of Life",
          text: "Islam teaches that the purpose of human life is to worship God and live according to His guidance. This worship includes prayer, but also encompasses all good deeds, kindness to others, and fulfilling one's responsibilities. Life is seen as a test, and how we live determines our eternal destiny."
        }
      ]
    },
    allah: {
      title: "Who is Allah?",
      content: [
        {
          heading: "Allah is the Arabic Word for God",
          text: "Allah is simply the Arabic word for 'God.' Arab Christians and Arab Jews also use the word 'Allah' when referring to God in their Arabic Bibles and religious texts. It's not a different deity - it's the same God worshipped by Jews, Christians, and Muslims.",
          verse: "And your God is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.",
          reference: "Quran 2:163"
        },
        {
          heading: "The Same God as Abraham, Moses, and Jesus",
          text: "Muslims worship the same One God that Jews and Christians worship - the God of Abraham, Moses, Jesus, and all the prophets (peace be upon them). Islam is a continuation of the same monotheistic tradition.",
          verse: "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.'",
          reference: "Quran 112:1-4"
        },
        {
          heading: "Pure Monotheism (Tawhid)",
          text: "The central concept in Islam is Tawhid - the absolute oneness of God. God has no partners, no children, no equals, and is unlike His creation. God is self-sufficient, eternal, and all-powerful. Worship is due only to God alone.",
          verse: "There is nothing like unto Him, and He is the Hearing, the Seeing.",
          reference: "Quran 42:11"
        },
        {
          heading: "God's Names and Attributes",
          text: "The Quran mentions 99 names of God, each describing a different aspect of His nature. These include: The Most Merciful (Ar-Rahman), The Most Compassionate (Ar-Rahim), The King (Al-Malik), The All-Knowing (Al-Alim), The All-Wise (Al-Hakim), The Loving (Al-Wadud), and The Forgiving (Al-Ghafur).",
          verse: "And to Allah belong the best names, so invoke Him by them.",
          reference: "Quran 7:180"
        },
        {
          heading: "God is Close to Us",
          text: "While God is transcendent and beyond human comprehension, He is also close to His creation. The Quran says God is closer to us than our jugular vein. God hears our prayers, knows our thoughts, and is always accessible to those who seek Him.",
          verse: "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
          reference: "Quran 2:186"
        },
        {
          heading: "God's Mercy and Justice",
          text: "God is both merciful and just. His mercy encompasses all things, and He forgives those who sincerely repent. At the same time, God is just and will hold everyone accountable for their actions. The balance between mercy and justice is a central theme in Islam.",
          verse: "My mercy encompasses all things.",
          reference: "Quran 7:156"
        }
      ]
    },
    muhammad: {
      title: "Who is Prophet Muhammad (PBUH)?",
      content: [
        {
          heading: "The Final Messenger",
          text: "Prophet Muhammad (peace be upon him) is the final prophet in a long line of prophets that includes Adam, Noah, Abraham, Moses, and Jesus (peace be upon them all). He was born in Mecca in 570 CE and received the first revelation at age 40. He is not the founder of Islam but its final messenger.",
          verse: "Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets.",
          reference: "Quran 33:40"
        },
        {
          heading: "His Character",
          text: "Even before prophethood, Muhammad (PBUH) was known as 'Al-Amin' (The Trustworthy) for his honesty and integrity. He was kind, humble, patient, and just. His wife Khadijah described him as one who maintained family ties, helped the poor, was hospitable to guests, and assisted those in distress.",
          verse: "And indeed, you are of a great moral character.",
          reference: "Quran 68:4"
        },
        {
          heading: "His Message",
          text: "Muhammad (PBUH) brought the same core message as all prophets: worship One God, live righteously, and prepare for the Hereafter. He taught justice, compassion, mercy, and the importance of treating others with kindness and respect.",
          verse: "Say, [O Muhammad], 'O mankind, indeed I am the Messenger of Allah to you all, [from Him] to whom belongs the dominion of the heavens and the earth.'",
          reference: "Quran 7:158"
        },
        {
          heading: "His Life and Teachings",
          text: "The Prophet's life (Sunnah) serves as a practical example for Muslims. His teachings cover all aspects of life: prayer, fasting, charity, family life, business ethics, social justice, and more. Muslims strive to follow his example in their daily lives.",
          verse: "There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day and [who] remembers Allah often.",
          reference: "Quran 33:21"
        },
        {
          heading: "Not Divine",
          text: "Muslims do not worship Muhammad (PBUH) or consider him divine. He was a human being, a prophet and messenger of God. Muslims love and respect him deeply, but worship is due only to God.",
          verse: "Say, 'I am only a man like you, to whom has been revealed that your god is one God.'",
          reference: "Quran 18:110"
        },
        {
          heading: "His Legacy",
          text: "In just 23 years, Muhammad (PBUH) transformed Arabia from a land of tribal warfare and injustice into a unified, just society. His teachings continue to guide over 1.8 billion Muslims worldwide. He is considered the most influential person in history by many scholars.",
          verse: "And We have not sent you but as a mercy to the worlds.",
          reference: "Quran 21:107"
        }
      ]
    },
    pillars: {
      title: "The Five Pillars of Islam",
      content: [
        {
          heading: "1. Shahada (Declaration of Faith)",
          text: "The Shahada is the testimony of faith: 'There is no god but Allah, and Muhammad is the Messenger of Allah.' This simple declaration, when said with sincerity, makes one a Muslim. It expresses the core belief in one God and the prophethood of Muhammad (PBUH).",
          verse: "Allah witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice.",
          reference: "Quran 3:18"
        },
        {
          heading: "2. Salah (Prayer)",
          text: "Muslims perform five daily prayers at specific times: before dawn (Fajr), midday (Dhuhr), afternoon (Asr), sunset (Maghrib), and evening (Isha). Prayer is a direct connection with God, providing spiritual nourishment and reminding Muslims of their purpose throughout the day.",
          verse: "Indeed, prayer has been decreed upon the believers at specified times.",
          reference: "Quran 4:103"
        },
        {
          heading: "3. Zakat (Charity)",
          text: "Zakat is obligatory charity, typically 2.5% of one's accumulated wealth annually. It purifies wealth, helps those in need, and creates social balance. Zakat is given to the poor, needy, debtors, travelers, and other specified categories.",
          verse: "And establish prayer and give zakat.",
          reference: "Quran 2:43"
        },
        {
          heading: "4. Sawm (Fasting in Ramadan)",
          text: "Muslims fast from dawn to sunset during the month of Ramadan, abstaining from food, drink, and other physical needs. Fasting develops self-discipline, empathy for the poor, and spiritual awareness. It's a time for increased prayer, Quran reading, and reflection.",
          verse: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
          reference: "Quran 2:183"
        },
        {
          heading: "5. Hajj (Pilgrimage)",
          text: "Hajj is the pilgrimage to Mecca, required once in a lifetime for those who are physically and financially able. It takes place during the Islamic month of Dhul-Hijjah. Pilgrims perform specific rituals commemorating the trials of Prophet Abraham and his family.",
          verse: "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way.",
          reference: "Quran 3:97"
        },
        {
          heading: "The Foundation of Muslim Life",
          text: "These five pillars form the foundation of a Muslim's faith and practice. They provide structure, spiritual discipline, and a framework for living a righteous life. Together, they help Muslims maintain their connection with God and fulfill their responsibilities to society.",
          verse: "The Messenger of Allah said: 'Islam is built upon five: testifying that there is none worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing prayer, paying zakat, performing Hajj, and fasting Ramadan.'",
          reference: "Sahih Bukhari & Muslim"
        }
      ]
    },
    keypoints: {
      title: "Key Points and Focuses in Islam",
      content: [
        {
          heading: "Tawhid (Monotheism)",
          text: "The most important concept in Islam is Tawhid - the absolute oneness of God. All Islamic teachings revolve around this principle. Worship, obedience, and devotion are due only to God alone.",
          verse: "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.",
          reference: "Quran 2:163"
        },
        {
          heading: "Akhirah (The Hereafter)",
          text: "Islam teaches that this life is a test and that there will be an afterlife where everyone will be judged based on their deeds. Belief in the Day of Judgment motivates Muslims to live righteously and be accountable for their actions.",
          verse: "And fear a Day when you will be returned to Allah. Then every soul will be compensated for what it earned, and they will not be treated unjustly.",
          reference: "Quran 2:281"
        },
        {
          heading: "Adl (Justice)",
          text: "Justice is a fundamental principle in Islam. Muslims are commanded to be just, even against themselves or their families. The Quran emphasizes standing up for justice and opposing oppression.",
          verse: "O you who have believed, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just.",
          reference: "Quran 5:8"
        },
        {
          heading: "Rahmah (Mercy and Compassion)",
          text: "Mercy and compassion are central to Islam. God is described as 'The Most Merciful,' and Muslims are encouraged to be merciful to others. Kindness to family, neighbors, animals, and all creation is emphasized.",
          verse: "And We have not sent you, [O Muhammad], except as a mercy to the worlds.",
          reference: "Quran 21:107"
        },
        {
          heading: "Sabr (Patience)",
          text: "Patience is highly valued in Islam. Muslims are taught to be patient in facing difficulties, in avoiding sins, and in performing good deeds. Patience is mentioned throughout the Quran as a virtue of the righteous.",
          verse: "And be patient, [O Muhammad], and your patience is not but through Allah.",
          reference: "Quran 16:127"
        },
        {
          heading: "Shukr (Gratitude)",
          text: "Gratitude to God is essential in Islam. Muslims are encouraged to be thankful for all blessings, big and small. Gratitude is expressed through prayer, charity, and using blessings in ways that please God.",
          verse: "And if you should count the favors of Allah, you could not enumerate them.",
          reference: "Quran 14:34"
        },
        {
          heading: "Ihsan (Excellence)",
          text: "Ihsan means doing things with excellence and sincerity. It includes worshipping God as if you see Him, being kind to others, and striving for excellence in all aspects of life.",
          verse: "Indeed, Allah is with those who fear Him and those who are doers of good.",
          reference: "Quran 16:128"
        },
        {
          heading: "Ummah (Community)",
          text: "The concept of Ummah emphasizes the unity of all Muslims regardless of race, ethnicity, or nationality. Muslims are brothers and sisters in faith, supporting and caring for one another.",
          verse: "The believers are but brothers.",
          reference: "Quran 49:10"
        }
      ]
    },
    modern: {
      title: "Islam and Modern Life",
      content: [
        {
          heading: "Compatible with Modern Life",
          text: "Islam is fully compatible with modern life. Its teachings are timeless and applicable to all eras. Muslims around the world successfully balance their faith with modern careers, education, technology, and contemporary lifestyles.",
          verse: "We have not sent you, [O Muhammad], except as a mercy to the worlds.",
          reference: "Quran 21:107"
        },
        {
          heading: "Science and Knowledge",
          text: "Islam encourages the pursuit of knowledge and scientific discovery. The Quran repeatedly encourages reflection, observation, and learning. Many of the world's greatest scientific advances came from Muslim scholars during the Islamic Golden Age.",
          verse: "Read in the name of your Lord who created.",
          reference: "Quran 96:1"
        },
        {
          heading: "Women's Rights",
          text: "Islam granted women rights 1400 years ago that were revolutionary for that time, including the right to own property, inherit, choose their spouse, receive education, and divorce. Modern Muslim women are professionals, scholars, leaders, and contributors to society.",
          verse: "And for women are rights over men similar to those of men over women.",
          reference: "Quran 2:228"
        },
        {
          heading: "Work and Business",
          text: "Islam encourages honest work and ethical business practices. Muslims are encouraged to excel in their professions and contribute positively to society. Islamic principles guide business ethics, prohibiting fraud, exploitation, and usury.",
          verse: "O you who have believed, do not consume one another's wealth unjustly but only [in lawful] business by mutual consent.",
          reference: "Quran 4:29"
        },
        {
          heading: "Technology and Innovation",
          text: "Islam embraces beneficial technology and innovation. Muslims use modern technology for education, communication, healthcare, and improving quality of life. The key is using technology in ways that align with Islamic values.",
          verse: "And He has subjected for you whatever is in the heavens and whatever is on the earth - all from Him.",
          reference: "Quran 45:13"
        },
        {
          heading: "Environmental Stewardship",
          text: "Islam teaches responsibility toward the environment. Muslims are commanded to avoid waste, protect natural resources, and care for animals and plants. These teachings are highly relevant to modern environmental concerns.",
          verse: "And cause not corruption upon the earth after its reformation.",
          reference: "Quran 7:56"
        },
        {
          heading: "Mental Health",
          text: "Islamic teachings address mental health through prayer, mindfulness, gratitude, trust in God, and community support. The Quran provides comfort and guidance for dealing with anxiety, stress, and depression.",
          verse: "Indeed, with hardship [will be] ease.",
          reference: "Quran 94:5-6"
        },
        {
          heading: "Social Justice",
          text: "Islam's emphasis on justice, equality, and caring for the poor is highly relevant to modern social issues. Muslims are encouraged to work for social justice, human rights, and the welfare of all members of society.",
          verse: "O you who have believed, be persistently standing firm for Allah, witnesses in justice.",
          reference: "Quran 5:8"
        }
      ]
    },
    practices: {
      title: "Islamic Practices Explained",
      content: [
        {
          heading: "Hijab (Modest Dress)",
          text: "Hijab is the practice of modest dress and behavior. For women, it typically includes covering the hair and body, while men are also commanded to dress modestly. Hijab is a personal choice and an act of worship, representing devotion to God and focusing on character over appearance.",
          verse: "And tell the believing women to lower their gaze and guard their private parts and not display their adornment except that which [necessarily] appears thereof.",
          reference: "Quran 24:31"
        },
        {
          heading: "Prayer (Salah)",
          text: "The five daily prayers are performed at specific times: Fajr (before dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (evening). Each prayer includes recitations from the Quran, bowing, and prostration. Prayer can be performed anywhere clean, though congregational prayer at the mosque is encouraged.",
          verse: "Indeed, prayer has been decreed upon the believers at specified times.",
          reference: "Quran 4:103"
        },
        {
          heading: "Fasting (Sawm)",
          text: "Muslims fast during Ramadan from dawn to sunset, abstaining from food, drink, and other physical needs. Fasting develops self-discipline, spiritual awareness, and empathy for the poor. The fast is broken at sunset with dates and water, followed by a meal. Those who are ill, traveling, pregnant, or elderly are exempt.",
          verse: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
          reference: "Quran 2:183"
        },
        {
          heading: "Halal (Permissible)",
          text: "Halal means 'permissible' and applies to all aspects of life. In food, halal includes meat from animals slaughtered according to Islamic guidelines, and excludes pork and blood. Halal also applies to earnings, business, relationships, and behavior - everything should be lawful and ethical.",
          verse: "O you who have believed, eat from the good things which We have provided for you.",
          reference: "Quran 2:172"
        },
        {
          heading: "Charity (Zakat and Sadaqah)",
          text: "Zakat is obligatory charity (2.5% of annual wealth), while Sadaqah is voluntary charity. Both purify wealth, help those in need, and create social balance. Charity can be given to the poor, needy, orphans, travelers, and for community projects.",
          verse: "And establish prayer and give zakat.",
          reference: "Quran 2:43"
        },
        {
          heading: "Pilgrimage (Hajj)",
          text: "Hajj is the pilgrimage to Mecca, required once in a lifetime for those able. Pilgrims wear simple white garments (Ihram), symbolizing equality before God. They perform rituals including circling the Kaaba, praying at Mount Arafat, and throwing pebbles at pillars representing evil.",
          verse: "And [due] to Allah from the people is a pilgrimage to the House - for whoever is able to find thereto a way.",
          reference: "Quran 3:97"
        },
        {
          heading: "Friday Prayer (Jumu'ah)",
          text: "Muslims attend congregational prayer at the mosque on Friday afternoon. The prayer includes a sermon (khutbah) that addresses religious, social, and moral issues. Friday is considered a special day for community gathering and spiritual renewal.",
          verse: "O you who have believed, when [the adhan] is called for the prayer on the day of Jumu'ah [Friday], then proceed to the remembrance of Allah.",
          reference: "Quran 62:9"
        },
        {
          heading: "Daily Supplications (Dua)",
          text: "Dua is personal prayer and supplication to God. Muslims make dua throughout the day - upon waking, before eating, after prayer, before sleep, and at any time. Dua is a direct conversation with God, expressing needs, gratitude, and seeking guidance.",
          verse: "And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
          reference: "Quran 2:186"
        }
      ]
    }
  }

  const sections = [
    { id: 'what', name: 'What is Islam?', icon: '🕌' },
    { id: 'allah', name: 'Who is Allah?', icon: '✨' },
    { id: 'muhammad', name: 'Prophet Muhammad', icon: '👤' },
    { id: 'pillars', name: 'Five Pillars', icon: '📿' },
    { id: 'keypoints', name: 'Key Points', icon: '🎯' },
    { id: 'modern', name: 'Modern Life', icon: '🌍' },
    { id: 'practices', name: 'Practices', icon: '🙏' }
  ]

  return (
    <div className="section">
      <h2>Islam Fundamentals</h2>
      <p>Learn the essential beliefs, practices, and teachings of Islam.</p>
      
      <div className="quran-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`quran-nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="quran-nav-icon">{section.icon}</span>
            <span className="quran-nav-name">{section.name}</span>
          </button>
        ))}
      </div>

      <div className="quran-content">
        <h3 className="quran-section-title">{fundamentalsInfo[activeSection].title}</h3>
        
        {fundamentalsInfo[activeSection].content.map((item, index) => (
          <div key={index} className="quran-item">
            <h4 className="quran-item-heading">{item.heading}</h4>
            
            {item.text && <p className="quran-item-text">{item.text}</p>}
            
            {item.verse && (
              <div className="quran-verse-box">
                <p className="quran-verse-text">"{item.verse}"</p>
                <p className="quran-verse-ref">{item.reference}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ReligionsSection() {
  const [activeSection, setActiveSection] = useState('common')

  const religionsInfo = {
    common: {
      title: "Common Ground Between Islam, Christianity, and Judaism",
      content: [
        {
          heading: "The Abrahamic Tradition",
          text: "Islam, Christianity, and Judaism are all Abrahamic faiths, meaning they trace their spiritual lineage back to Prophet Abraham (peace be upon him). All three faiths worship the same One God, the God of Abraham, Isaac, Jacob, and all the prophets.",
          verse: "Say, 'We have believed in Allah and in what was revealed to us and what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and in what was given to Moses and Jesus and to the prophets from their Lord. We make no distinction between any of them, and we are Muslims [submitting] to Him.'",
          reference: "Quran 3:84"
        },
        {
          heading: "Belief in One God (Monotheism)",
          text: "All three faiths are fundamentally monotheistic, believing in one supreme God who created the universe. While there are differences in understanding God's nature, the core belief in one God unites these faiths.",
          verse: "And your God is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.",
          reference: "Quran 2:163"
        },
        {
          heading: "Shared Prophets",
          text: "Muslims believe in and respect all the prophets mentioned in the Bible, including Adam, Noah, Abraham, Isaac, Jacob, Joseph, Moses, David, Solomon, John the Baptist, and Jesus (peace be upon them all). The Quran mentions 25 prophets by name, but Muslims believe there were 124,000 prophets throughout history.",
          verse: "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], 'We make no distinction between any of His messengers.'",
          reference: "Quran 2:285"
        },
        {
          heading: "Shared Moral Values",
          text: "All three faiths emphasize similar moral principles: honesty, justice, compassion, charity, humility, and the importance of family. The Ten Commandments in Judaism and Christianity have parallels in Islamic teachings.",
          verse: "And indeed, We sent Noah and Abraham and placed in their descendants prophethood and scripture; and some of them followed [guidance], but many of them were defiantly disobedient.",
          reference: "Quran 57:26"
        },
        {
          heading: "Belief in Divine Revelation",
          text: "All three faiths believe that God has revealed guidance to humanity through holy books. Muslims believe in the Torah (given to Moses), the Psalms (given to David), the Gospel (given to Jesus), and the Quran (given to Muhammad), peace be upon them all.",
          verse: "He has sent down upon you, [O Muhammad], the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel.",
          reference: "Quran 3:3"
        },
        {
          heading: "Belief in the Day of Judgment",
          text: "All three faiths teach that there will be a Day of Judgment when all people will be held accountable for their actions. This belief encourages moral responsibility and righteous living.",
          verse: "And fear a Day when you will be returned to Allah. Then every soul will be compensated for what it earned, and they will not be treated unjustly.",
          reference: "Quran 2:281"
        },
        {
          heading: "Angels and Divine Beings",
          text: "All three faiths believe in the existence of angels as spiritual beings who serve God and carry out His commands. While there are differences in details, the concept of angelic beings is shared.",
          verse: "The Messenger believes in what has been revealed to him from his Lord, and [so do] the believers. They believe in Allah, His angels, His books, and His messengers.",
          reference: "Quran 2:285"
        }
      ]
    },
    christianity: {
      title: "Islam and Christianity: Overlaps and Differences",
      content: [
        {
          heading: "Shared Beliefs",
          text: "Muslims and Christians share many core beliefs: belief in One God, belief in angels, belief in divine revelation, belief in prophets, belief in the Day of Judgment, and similar moral teachings. Both faiths emphasize prayer, charity, and living a righteous life.",
          verse: "And you will find the nearest of them in affection to the believers those who say, 'We are Christians.' That is because among them are priests and monks and because they are not arrogant.",
          reference: "Quran 5:82"
        },
        {
          heading: "Jesus (Peace Be Upon Him)",
          text: "Muslims hold Jesus in high esteem as one of the greatest prophets. The Quran affirms his virgin birth, his miracles, and his role as the Messiah. Muslims believe Jesus performed miracles by God's permission, including healing the blind and lepers, and raising the dead.",
          verse: "[The Day] when Allah will say, 'O Jesus, Son of Mary, remember My favor upon you and upon your mother when I supported you with the Holy Spirit [Gabriel] and you spoke to the people in the cradle and in maturity.'",
          reference: "Quran 5:110"
        },
        {
          heading: "The Virgin Mary",
          text: "Mary (Maryam) is highly honored in Islam. An entire chapter of the Quran is named after her (Chapter 19). Muslims believe in her purity, her virgin birth of Jesus, and her status as one of the most righteous women in history.",
          verse: "And [mention] the one who guarded her chastity, so We blew into her [garment] through Our angel [Gabriel], and We made her and her son a sign for the worlds.",
          reference: "Quran 21:91"
        },
        {
          heading: "Difference: The Nature of Jesus",
          text: "The main theological difference concerns the nature of Jesus. Christianity teaches that Jesus is the Son of God and part of the Trinity. Islam teaches that Jesus was a human prophet and messenger of God, not divine. Muslims believe that attributing divinity to Jesus contradicts pure monotheism.",
          verse: "It is not [befitting] for Allah to take a son; exalted is He! When He decrees an affair, He only says to it, 'Be,' and it is.",
          reference: "Quran 19:35",
          islamicView: "Islam maintains that God is absolutely one and has no partners, children, or equals. Jesus is honored as a great prophet, but worship is due only to God alone."
        },
        {
          heading: "Difference: The Trinity",
          text: "Christianity teaches the doctrine of the Trinity - Father, Son, and Holy Spirit as one God. Islam rejects the Trinity as a form of polytheism (shirk), emphasizing strict monotheism (Tawhid).",
          verse: "They have certainly disbelieved who say, 'Allah is the third of three.' And there is no god except one God. And if they do not desist from what they are saying, there will surely afflict the disbelievers among them a painful punishment.",
          reference: "Quran 5:73",
          islamicView: "Islam teaches that God is one in His essence, attributes, and actions. The concept of God having partners or being divided into persons is incompatible with Islamic monotheism."
        },
        {
          heading: "Difference: Original Sin",
          text: "Christianity teaches that all humans inherit original sin from Adam and Eve, requiring salvation through Jesus. Islam teaches that each person is born pure and innocent, responsible only for their own actions.",
          verse: "And no bearer of burdens will bear the burden of another.",
          reference: "Quran 6:164",
          islamicView: "Islam emphasizes personal responsibility. Each person will be judged based on their own deeds, not inherited sin. Adam and Eve sought forgiveness and were forgiven."
        },
        {
          heading: "Difference: Salvation",
          text: "Christianity teaches salvation through faith in Jesus's sacrifice. Islam teaches salvation through faith in God, good deeds, and God's mercy.",
          verse: "Indeed, those who have believed and those who were Jews or Christians or Sabians - those who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord.",
          reference: "Quran 2:62",
          islamicView: "Islam teaches that salvation is through sincere faith in God, righteous deeds, and God's mercy. God's forgiveness is vast and available to all who sincerely seek it."
        },
        {
          heading: "Difference: The Crucifixion",
          text: "Christianity teaches that Jesus was crucified and died for humanity's sins. Islam teaches that Jesus was not crucified but was raised to heaven by God.",
          verse: "And [for] their saying, 'Indeed, we have killed the Messiah, Jesus, the son of Mary, the messenger of Allah.' And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them.",
          reference: "Quran 4:157",
          islamicView: "Islam teaches that God saved Jesus from death and raised him to heaven. Jesus will return before the Day of Judgment to restore justice and true monotheism."
        }
      ]
    },
    judaism: {
      title: "Islam and Judaism: Overlaps and Differences",
      content: [
        {
          heading: "Shared Beliefs and Practices",
          text: "Islam and Judaism share many beliefs and practices: strict monotheism, dietary laws (halal/kosher), circumcision, prohibition of pork, similar prayer practices, and emphasis on law and guidance. Both faiths have a strong legal tradition (Sharia in Islam, Halakha in Judaism).",
          verse: "And We certainly gave Moses the Torah and sent after him messengers in succession. And We gave Jesus, the son of Mary, clear proofs and supported him with the Holy Spirit.",
          reference: "Quran 2:87"
        },
        {
          heading: "Shared Prophets",
          text: "Muslims believe in all the prophets of Judaism, including Moses, who is mentioned more than any other prophet in the Quran. The story of Moses and the Exodus is recounted in detail in the Quran.",
          verse: "And We sent Moses with Our signs and a clear authority to Pharaoh, Haman, and Qarun; but they said, '[He is] a magician and a liar.'",
          reference: "Quran 28:38"
        },
        {
          heading: "The Torah",
          text: "Muslims believe that the Torah was revealed to Moses (peace be upon him) as guidance for the Children of Israel. The Quran affirms the original Torah as divine revelation.",
          verse: "Indeed, We sent down the Torah, in which was guidance and light. The prophets who submitted [to Allah] judged by it for the Jews.",
          reference: "Quran 5:44"
        },
        {
          heading: "Difference: The Final Prophet",
          text: "Judaism does not recognize any prophets after the biblical period. Islam teaches that Muhammad (peace be upon him) is the final prophet, sent to all of humanity with the final revelation.",
          verse: "Muhammad is not the father of [any] one of your men, but [he is] the Messenger of Allah and last of the prophets. And ever is Allah, of all things, Knowing.",
          reference: "Quran 33:40",
          islamicView: "Islam teaches that prophethood continued after the biblical period, culminating in Muhammad (PBUH) who brought the final, complete revelation for all humanity."
        },
        {
          heading: "Difference: The Quran vs. Torah",
          text: "Judaism considers the Torah as the final and complete revelation. Islam teaches that the Quran is the final revelation, superseding previous scriptures which may have been altered or lost over time.",
          verse: "And We have certainly revealed to you a Book in which is your mention. Then will you not reason?",
          reference: "Quran 21:10",
          islamicView: "Islam teaches that the Quran is the final, preserved revelation from God. Previous scriptures contained truth but may have been altered or lost over time."
        },
        {
          heading: "Difference: The Messiah",
          text: "Judaism awaits the coming of the Messiah. Islam teaches that Jesus was the Messiah and that he will return before the Day of Judgment.",
          verse: "And [mention] when Jesus, the son of Mary, said, 'O Children of Israel, indeed I am the messenger of Allah to you confirming what came before me of the Torah.'",
          reference: "Quran 61:6",
          islamicView: "Islam affirms Jesus as the Messiah who was sent to the Children of Israel. He will return to restore justice and true monotheism."
        },
        {
          heading: "Difference: Covenant and Chosen People",
          text: "Judaism teaches that God made a special covenant with the Children of Israel. Islam teaches that God's covenant is with all who believe and do righteous deeds, regardless of ethnicity.",
          verse: "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.",
          reference: "Quran 49:13",
          islamicView: "Islam teaches that God's guidance and mercy are for all humanity. Righteousness, not ethnicity, determines one's status with God."
        },
        {
          heading: "Difference: Sacrificial System",
          text: "Judaism had a sacrificial system in the Temple. Islam teaches that prayer, charity, and good deeds have replaced animal sacrifice, which was specific to earlier communities.",
          verse: "Their meat will not reach Allah, nor will their blood, but what reaches Him is piety from you.",
          reference: "Quran 22:37",
          islamicView: "Islam teaches that the essence of worship is piety and devotion, not ritual sacrifice. The sacrificial system was specific to earlier communities and has been replaced."
        }
      ]
    },
    islamic: {
      title: "Islamic Perspective on Religious Differences",
      content: [
        {
          heading: "Respect for All Faiths",
          text: "Islam teaches respect for all people of faith. The Quran explicitly states that there is no compulsion in religion and that people are free to choose their beliefs.",
          verse: "There shall be no compulsion in [acceptance of] the religion. The right course has become clear from the wrong.",
          reference: "Quran 2:256"
        },
        {
          heading: "Dialogue and Understanding",
          text: "Islam encourages respectful dialogue with people of other faiths. The Quran instructs Muslims to argue in the best manner and to find common ground.",
          verse: "And do not argue with the People of the Scripture except in a way that is best, except for those who commit injustice among them, and say, 'We believe in that which has been revealed to us and revealed to you. And our God and your God is one; and we are Muslims [in submission] to Him.'",
          reference: "Quran 29:46"
        },
        {
          heading: "Common Ground",
          text: "The Quran emphasizes finding common ground with people of other faiths, particularly in worshiping One God and doing good deeds.",
          verse: "Say, 'O People of the Scripture, come to a word that is equitable between us and you - that we will not worship except Allah and not associate anything with Him and not take one another as lords instead of Allah.'",
          reference: "Quran 3:64"
        },
        {
          heading: "God's Mercy is Vast",
          text: "Islam teaches that God's mercy encompasses all things. God will judge people based on their knowledge, intentions, and actions. Those who sincerely seek truth and do good will find God's mercy.",
          verse: "Indeed, those who have believed and those who were Jews or Christians or Sabians - those who believed in Allah and the Last Day and did righteousness - will have their reward with their Lord.",
          reference: "Quran 2:62"
        },
        {
          heading: "No Monopoly on Truth",
          text: "Islam teaches that God has sent guidance to all peoples throughout history. Muslims believe that truth exists in many traditions and that God's wisdom is vast.",
          verse: "And We certainly sent into every nation a messenger, [saying], 'Worship Allah and avoid Taghut.'",
          reference: "Quran 16:36"
        },
        {
          heading: "Focus on What Unites",
          text: "The Quran encourages focusing on shared beliefs and values rather than differences. The emphasis is on worshiping One God, doing good, and living righteously.",
          verse: "To Allah belongs whatever is in the heavens and whatever is on the earth. And We have instructed those who were given the Scripture before you and yourselves to fear Allah.",
          reference: "Quran 4:131"
        },
        {
          heading: "Peaceful Coexistence",
          text: "Islam teaches peaceful coexistence with people of other faiths. Throughout history, Muslim communities have lived alongside Christians, Jews, and others with mutual respect.",
          verse: "For you is your religion, and for me is my religion.",
          reference: "Quran 109:6"
        },
        {
          heading: "The Test of Life",
          text: "Islam teaches that religious diversity is part of God's plan. The differences between faiths are a test, and people will be judged based on their sincerity and actions.",
          verse: "And if your Lord had willed, He could have made mankind one community; but they will continue to differ.",
          reference: "Quran 11:118"
        }
      ]
    },
    coexistence: {
      title: "Building Bridges and Understanding",
      content: [
        {
          heading: "The Importance of Knowledge",
          text: "Understanding other faiths is essential for building bridges and dispelling misconceptions. The Quran encourages learning and seeking knowledge.",
          verse: "Read in the name of your Lord who created.",
          reference: "Quran 96:1"
        },
        {
          heading: "Respectful Dialogue",
          text: "Meaningful dialogue requires respect, listening, and a genuine desire to understand. The Quran instructs Muslims to speak kindly and avoid argumentation.",
          verse: "And speak to people good [words].",
          reference: "Quran 2:83"
        },
        {
          heading: "Shared Values in Action",
          text: "People of different faiths can work together on shared values: helping the poor, protecting the environment, promoting justice, and building peaceful communities.",
          verse: "And cooperate in righteousness and piety, but do not cooperate in sin and aggression.",
          reference: "Quran 5:2"
        },
        {
          heading: "Historical Examples of Coexistence",
          text: "Throughout Islamic history, there are many examples of peaceful coexistence. In Medina, the Prophet Muhammad (PBUH) established a constitution that guaranteed religious freedom for Jews and Christians. In Muslim Spain, Muslims, Christians, and Jews lived together in a period of great cultural and intellectual achievement.",
          verse: "Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes - from being righteous toward them and acting justly toward them.",
          reference: "Quran 60:8"
        },
        {
          heading: "Addressing Misconceptions",
          text: "Many conflicts between religious communities stem from misconceptions and lack of understanding. Education and personal relationships can help overcome these barriers.",
          verse: "O you who have believed, avoid much [negative] assumption. Indeed, some assumption is sin.",
          reference: "Quran 49:12"
        },
        {
          heading: "The Role of Empathy",
          text: "Empathy - understanding and sharing the feelings of others - is essential for building bridges. The Quran teaches compassion and kindness to all people.",
          verse: "And We have not sent you, [O Muhammad], except as a mercy to the worlds.",
          reference: "Quran 21:107"
        },
        {
          heading: "Working for the Common Good",
          text: "People of all faiths can and should work together for the common good. This includes fighting poverty, promoting education, protecting human rights, and building peaceful societies.",
          verse: "And let there be [arising] from you a nation inviting to [all that is] good, enjoining what is right and forbidding what is wrong.",
          reference: "Quran 3:104"
        },
        {
          heading: "Hope for the Future",
          text: "Despite differences, there is hope for greater understanding and cooperation between faiths. By focusing on shared values and respecting differences, people of different faiths can build a better world together.",
          verse: "And He placed between you affection and mercy.",
          reference: "Quran 30:21"
        }
      ]
    }
  }

  const sections = [
    { id: 'common', name: 'Common Ground', icon: '🤝' },
    { id: 'christianity', name: 'Christianity', icon: '✝️' },
    { id: 'judaism', name: 'Judaism', icon: '✡️' },
    { id: 'islamic', name: 'Islamic View', icon: '🕌' },
    { id: 'coexistence', name: 'Building Bridges', icon: '🌉' }
  ]

  return (
    <div className="section">
      <h2>Islam and Other Faiths</h2>
      <p>Explore the connections, differences, and shared values between Islam, Christianity, and Judaism.</p>
      
      <div className="quran-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`quran-nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="quran-nav-icon">{section.icon}</span>
            <span className="quran-nav-name">{section.name}</span>
          </button>
        ))}
      </div>

      <div className="quran-content">
        <h3 className="quran-section-title">{religionsInfo[activeSection].title}</h3>
        
        {religionsInfo[activeSection].content.map((item, index) => (
          <div key={index} className="quran-item">
            <h4 className="quran-item-heading">{item.heading}</h4>
            
            {item.text && <p className="quran-item-text">{item.text}</p>}
            
            {item.verse && (
              <div className="quran-verse-box">
                <p className="quran-verse-text">"{item.verse}"</p>
                <p className="quran-verse-ref">{item.reference}</p>
              </div>
            )}
            
            {item.islamicView && (
              <div className="quran-islamic-view">
                <strong>Islamic Perspective:</strong> {item.islamicView}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function QuranSection() {
  const [activeSection, setActiveSection] = useState('overview')
  const [expandedAyah, setExpandedAyah] = useState(null)

  const quranInfo = {
    overview: {
      title: "What is the Quran?",
      content: [
        {
          heading: "The Holy Quran",
          text: "The Quran is the holy book of Islam, believed by Muslims to be the literal word of God (Allah). It was revealed to Prophet Muhammad (peace be upon him) through the Angel Gabriel over a period of 23 years, beginning in 610 CE when the Prophet was 40 years old."
        },
        {
          heading: "Structure of the Quran",
          text: "The Quran consists of 114 chapters (surahs) of varying lengths, divided into 6,236 verses (ayahs). The chapters are arranged roughly in order of length, with the longest chapters at the beginning and the shortest at the end, except for the opening chapter (Al-Fatiha)."
        },
        {
          heading: "Divisions",
          text: "The Quran is divided into 30 equal parts (juz) to facilitate reading during Ramadan. Each juz is further divided into two hizb (sections), making 60 hizbs in total. This structure helps Muslims complete reading the entire Quran during the month of Ramadan."
        },
        {
          heading: "Preservation",
          text: "The Quran has been preserved in its original form for over 1,400 years. Unlike other religious texts, the Quran was memorized by thousands of early Muslims and written down during the Prophet's lifetime. Today, millions of Muslims have memorized the entire Quran (Hafiz), ensuring its preservation."
        },
        {
          heading: "Language and Translations",
          text: "The Quran was originally revealed in Arabic, and many Muslims and non-Muslims alike make the conscious effort to learn and read it in its original language to appreciate its beauty and depth. However, translations exist in hundreds of languages worldwide, making the Quran's message accessible to people of all backgrounds. While translations help convey the meaning, the original Arabic text holds a special place in Islamic tradition and is what is recited in prayer and memorized by millions."
        }
      ]
    },
    miracles: {
      title: "Scientific Miracles in the Quran",
      content: [
        {
          heading: "Human Embryonic Development",
          text: "The Quran describes the stages of human embryonic development with remarkable accuracy, details that were unknown in the 7th century. Verse 23:12-14 describes the creation from a 'clot of congealed blood' (alaqah), then a 'lump of flesh' (mudghah), and then the formation of bones and flesh.",
          verse: "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging. Then We made the sperm-drop into a clinging clot, and We made the clot into a lump [of flesh], and We made [from] the lump, bones, and We covered the bones with flesh.",
          reference: "Quran 23:12-14",
          scientificFact: "Modern embryology has confirmed these stages: the blastocyst stage (alaqah), the embryonic stage (mudghah), and the development of the skeletal system followed by muscular development."
        },
        {
          heading: "The Expanding Universe",
          text: "The Quran mentions that the universe is expanding, a fact only discovered by modern science in the 20th century.",
          verse: "And the heaven We constructed with strength, and indeed, We are [its] expander.",
          reference: "Quran 51:47",
          scientificFact: "In 1929, Edwin Hubble discovered that galaxies are moving away from each other, confirming that the universe is expanding. This was unknown 1,400 years ago."
        },
        {
          heading: "The Big Bang",
          text: "The Quran describes the origin of the universe as coming from a single point, matching the Big Bang theory.",
          verse: "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them and made from water every living thing?",
          reference: "Quran 21:30",
          scientificFact: "The Big Bang theory, proposed in the 20th century, states that the universe began from a single, extremely dense point approximately 13.8 billion years ago."
        },
        {
          heading: "The Iron from Space",
          text: "The Quran mentions that iron was 'sent down' to Earth, which aligns with modern scientific understanding.",
          verse: "We sent down iron, wherein is great military might and benefits for the people.",
          reference: "Quran 57:25",
          scientificFact: "Iron is not formed on Earth but is created in supernova explosions and 'sent down' to our planet through meteorites. This was unknown in the 7th century."
        },
        {
          heading: "The Barrier Between Seas",
          text: "The Quran describes how different seas meet but maintain their distinct characteristics.",
          verse: "And it is He who has released [simultaneously] the two seas, one fresh and sweet and one salty and bitter, and He placed between them a barrier and prohibiting partition.",
          reference: "Quran 25:53",
          scientificFact: "Oceanographers have discovered that where fresh and salt water meet (estuaries), there is a transitional zone with distinct properties, preventing complete mixing."
        },
        {
          heading: "The Darkness in Deep Oceans",
          text: "The Quran describes the darkness found in deep oceans, which was only discovered with modern technology.",
          verse: "Or [they are] like darkness within an unfathomable sea which is covered by waves, upon which are waves, over which are clouds - darkness [layered] upon darkness.",
          reference: "Quran 24:40",
          scientificFact: "Scientists have discovered that light only penetrates about 200 meters into the ocean. Below this depth, complete darkness prevails, exactly as described in the Quran."
        }
      ]
    },
    modern: {
      title: "The Quran and Modern Struggles",
      content: [
        {
          heading: "Mental Health and Anxiety",
          text: "The Quran addresses anxiety and worry with verses that bring comfort and remind believers of God's presence and support.",
          verse: "Indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
          reference: "Quran 94:5-6",
          application: "This verse reminds us that difficulties are temporary and relief will come. It's a source of hope for those struggling with depression, anxiety, or difficult life circumstances."
        },
        {
          heading: "Social Justice and Equality",
          text: "The Quran emphasizes justice, equality, and standing up against oppression.",
          verse: "O you who have believed, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness.",
          reference: "Quran 5:8",
          application: "This verse teaches that justice must be maintained even toward those we dislike. It's relevant in today's world of political polarization and social conflict."
        },
        {
          heading: "Environmental Stewardship",
          text: "The Quran teaches responsibility toward the environment and all living creatures.",
          verse: "And cause not corruption upon the earth after its reformation. And invoke Him in fear and aspiration. Indeed, the mercy of Allah is near to the doers of good.",
          reference: "Quran 7:56",
          application: "This verse addresses modern environmental concerns, reminding humans of their duty to protect the planet and avoid destruction."
        },
        {
          heading: "Addiction and Self-Control",
          text: "The Quran provides guidance on overcoming harmful habits and addictions.",
          verse: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah].",
          reference: "Quran 2:45",
          application: "This verse offers a practical approach to overcoming addiction through patience (sabr) and prayer, combining spiritual practice with psychological resilience."
        },
        {
          heading: "Family and Relationships",
          text: "The Quran provides guidance on maintaining healthy family relationships and resolving conflicts.",
          verse: "And among His Signs is that He created for you from yourselves spouses, that you may find tranquility in them; and He placed between you love and mercy.",
          reference: "Quran 30:21",
          application: "This verse emphasizes the importance of love, mercy, and tranquility in marriage, offering guidance for modern relationship challenges."
        },
        {
          heading: "Financial Stress and Greed",
          text: "The Quran addresses materialism and the pursuit of wealth at the expense of spiritual well-being.",
          verse: "Your wealth and your children are but a trial, and Allah has with Him a great reward.",
          reference: "Quran 64:15",
          application: "This verse helps put financial stress in perspective, reminding believers that worldly possessions are temporary and that true success lies in spiritual fulfillment."
        }
      ]
    },
    powerful: {
      title: "Powerful Verses and Their Tafsir",
      content: [
        {
          heading: "Ayat al-Kursi (The Throne Verse)",
          verse: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
          reference: "Quran 2:255",
          tafsir: "This is considered the greatest verse in the Quran. It describes God's absolute power, knowledge, and sovereignty. The Prophet (PBUH) said that whoever recites this verse after every prayer will enter Paradise. It emphasizes that God is self-sufficient, eternal, and all-knowing, while all creation depends on Him."
        },
        {
          heading: "The Light Verse",
          verse: "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp, the lamp is within glass, the glass as if it were a pearly [white] star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon light. Allah guides to His light whom He wills.",
          reference: "Quran 24:35",
          tafsir: "This beautiful metaphor describes God's guidance as light that illuminates the heart and mind. The niche represents the chest, the lamp represents faith, the glass represents the heart, and the oil represents the pure, natural disposition (fitrah) that recognizes truth. It teaches that God's light is pure and perfect, guiding those who seek it."
        },
        {
          heading: "The Verse of Patience",
          verse: "Indeed, Allah is with those who fear Him and those who are doers of good.",
          reference: "Quran 16:128",
          tafsir: "This short but powerful verse provides immense comfort. It reminds believers that God's presence and support are with those who maintain consciousness of Him (taqwa) and do good deeds. It's a source of strength during difficult times, assuring believers that they are never truly alone."
        },
        {
          heading: "The Verse of Ease",
          verse: "So verily, with the hardship, there is relief. Verily, with the hardship, there is relief.",
          reference: "Quran 94:5-6",
          tafsir: "This verse is repeated twice for emphasis. In Arabic grammar, the word 'relief' is indefinite while 'hardship' is definite, indicating that relief is greater and more expansive than hardship. It teaches that no difficulty lasts forever and that God's mercy always provides a way out."
        },
        {
          heading: "The Verse of Trust",
          verse: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
          reference: "Quran 65:3",
          tafsir: "This verse teaches complete trust in God (tawakkul). It assures believers that when they place their trust in God, He is sufficient for them. It also reminds that everything happens according to God's wisdom and plan, providing comfort in uncertain times."
        },
        {
          heading: "The Verse of Forgiveness",
          verse: "Say, 'O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'",
          reference: "Quran 39:53",
          tafsir: "This verse is one of the most hopeful in the Quran. It addresses those who have sinned and feel hopeless, assuring them that God's mercy encompasses all sins. It was revealed to encourage repentance and remind believers that no matter how far they've strayed, God's door is always open."
        }
      ]
    },
    recitations: {
      title: "Beautiful Quran Recitations",
      content: [
        {
          heading: "Why Listen to Quran Recitation?",
          text: "Listening to Quran recitation is a spiritual experience that brings peace to the heart. The Quran itself describes its recitation as having a soothing effect: 'And those who have believed say, 'If only a Quran had been revealed to us, we would have been better than them.' So now there has come to them a Quran by which We guide whom We will.' (Quran 47:16)"
        },
        {
          heading: "Famous Reciters",
          text: "Throughout Islamic history, many renowned reciters have touched the hearts of millions with their beautiful voices and proper tajweed (rules of Quranic recitation)."
        },
        {
          heading: "Recommended Reciters to Listen To",
          reciters: [
            {
              name: "Sheikh Abdul Rahman Al-Sudais",
              description: "Imam of the Grand Mosque in Mecca, known for his powerful and emotional recitation style.",
              style: "Emotional and powerful"
            },
            {
              name: "Sheikh Maher Al-Muaiqly",
              description: "Imam of the Grand Mosque in Mecca, known for his clear and melodious voice.",
              style: "Clear and melodious"
            },
            {
              name: "Sheikh Saad Al-Ghamdi",
              description: "Renowned for his beautiful voice and emotional delivery, especially in shorter chapters.",
              style: "Emotional and touching"
            },
            {
              name: "Sheikh Mishary Rashid Alafasy",
              description: "Kuwaiti reciter known for his beautiful voice and clear pronunciation, popular worldwide.",
              style: "Melodious and clear"
            },
            {
              name: "Sheikh Abdul Basit Abdul Samad",
              description: "Egyptian reciter considered one of the greatest of the 20th century, known for his unique style.",
              style: "Classic and powerful"
            },
            {
              name: "Sheikh Mohamed Siddiq El-Minshawi",
              description: "Egyptian reciter known for his beautiful, emotional style that moves listeners to tears.",
              style: "Emotional and moving"
            }
          ]
        },
        {
          heading: "Where to Listen",
          links: [
            {
              name: "Quran.com",
              url: "https://quran.com",
              description: "Comprehensive Quran website with multiple reciters, translations, and tafsir."
            },
            {
              name: "EveryAyah",
              url: "https://everyayah.com",
              description: "Download Quran recitations by verse from various reciters."
            },
            {
              name: "YouTube",
              url: "https://youtube.com",
              description: "Search for specific reciters or chapters to find beautiful recitations."
            },
            {
              name: "Muslim Central",
              url: "https://muslimcentral.com",
              description: "Audio platform with Quran recitations and Islamic lectures."
            }
          ]
        },
        {
          heading: "Tips for Listening",
          tips: [
            "Start with shorter chapters (Juz Amma) to appreciate the beauty",
            "Read the translation while listening to understand the meaning",
            "Listen in a quiet environment to fully appreciate the recitation",
            "Choose reciters whose style resonates with you",
            "Make it a daily habit, even for just 10-15 minutes"
          ]
        }
      ]
    }
  }

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📖' },
    { id: 'miracles', name: 'Scientific Miracles', icon: '🔬' },
    { id: 'modern', name: 'Modern Relevance', icon: '🌍' },
    { id: 'powerful', name: 'Powerful Verses', icon: '✨' },
    { id: 'recitations', name: 'Recitations', icon: '🎵' }
  ]

  return (
    <div className="section">
      <h2>The Holy Quran</h2>
      <p>Explore the miraculous book that has guided billions for over 1,400 years.</p>
      
      <div className="quran-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`quran-nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => {
              setActiveSection(section.id)
              setExpandedAyah(null)
            }}
          >
            <span className="quran-nav-icon">{section.icon}</span>
            <span className="quran-nav-name">{section.name}</span>
          </button>
        ))}
      </div>

      <div className="quran-content">
        <h3 className="quran-section-title">{quranInfo[activeSection].title}</h3>
        
        {quranInfo[activeSection].content.map((item, index) => (
          <div key={index} className="quran-item">
            <h4 className="quran-item-heading">{item.heading}</h4>
            
            {item.text && <p className="quran-item-text">{item.text}</p>}
            
            {item.verse && (
              <div className="quran-verse-box">
                <p className="quran-verse-text">"{item.verse}"</p>
                <p className="quran-verse-ref">{item.reference}</p>
              </div>
            )}
            
            {item.scientificFact && (
              <div className="quran-scientific-fact">
                <strong>Scientific Fact:</strong> {item.scientificFact}
              </div>
            )}
            
            {item.application && (
              <div className="quran-application">
                <strong>Modern Application:</strong> {item.application}
              </div>
            )}
            
            {item.tafsir && (
              <div className="quran-tafsir">
                <strong>Tafsir (Exegesis):</strong> {item.tafsir}
              </div>
            )}
            
            {item.reciters && (
              <div className="quran-reciters-list">
                {item.reciters.map((reciter, i) => (
                  <div key={i} className="reciter-card">
                    <h5>{reciter.name}</h5>
                    <p>{reciter.description}</p>
                    <span className="reciter-style">{reciter.style}</span>
                  </div>
                ))}
              </div>
            )}
            
            {item.links && (
              <div className="quran-links-list">
                {item.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="quran-link-card">
                    <h5>{link.name}</h5>
                    <p>{link.description}</p>
                    <span className="link-arrow">→</span>
                  </a>
                ))}
              </div>
            )}
            
            {item.tips && (
              <div className="quran-tips-list">
                <ul>
                  {item.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
