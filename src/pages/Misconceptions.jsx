import { useState } from 'react'

export default function Misconceptions() {
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
            tafsir: "This verse establishes the sanctity of human life in Islam. Killing one innocent person is equated with killing all of humanity, showing the grave seriousness of taking a life."
          },
          { 
            verse: "There is no compulsion in religion - the right way is indeed clearly distinct from error.", 
            ref: "Quran 2:256",
            tafsir: "This verse establishes that faith must be voluntary and cannot be compelled, emphasizing freedom of belief."
          }
        ],
        hadith: [
          { 
            text: "The Muslim is the one from whose tongue and hand the people are safe.", 
            ref: "Sahih Bukhari & Muslim",
            context: "This hadith defines a true Muslim by their peaceful behavior toward others."
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
            tafsir: "This verse establishes the principle of mutual rights and responsibilities between men and women."
          },
          { 
            verse: "The believers, men and women, are allies of one another.", 
            ref: "Quran 9:71",
            tafsir: "This verse emphasizes the partnership between men and women in faith."
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
      whyPeopleBelieve: "The Arabic word 'Allah' is unfamiliar to non-Arabic speakers, leading some to think it refers to a different deity.",
      evidence: {
        quran: [
          { 
            verse: "And our God and your God is one; and we are Muslims [in submission] to Him.", 
            ref: "Quran 29:46",
            tafsir: "This verse establishes that Muslims worship the same God as Christians and Jews."
          },
          { 
            verse: "We have believed in Allah and in what was revealed to Abraham, Ishmael, Isaac, Jacob, and the Descendants, and in what was given to Moses and Jesus.", 
            ref: "Quran 3:84",
            tafsir: "This verse shows continuity with previous monotheistic traditions."
          }
        ],
        hadith: [
          { 
            text: "The prophets are paternal brothers; their mothers are different, but their religion is one.", 
            ref: "Sahih Bukhari",
            context: "This hadith explains that all prophets brought the same core message of monotheism."
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
      whyPeopleBelieve: "Images of women forced to wear certain clothing in some countries create the impression that Islam mandates this.",
      evidence: {
        quran: [
          { 
            verse: "There is no compulsion in religion - the right way is indeed clearly distinct from error.", 
            ref: "Quran 2:256",
            tafsir: "This verse establishes the principle of religious freedom in Islam."
          },
          { 
            verse: "Tell the believing men to lower their gaze and guard their private parts.", 
            ref: "Quran 24:30",
            tafsir: "This verse begins the section on modesty, starting with men."
          }
        ],
        hadith: [
          { 
            text: "Modesty is part of faith.", 
            ref: "Sahih Bukhari & Muslim",
            context: "This hadith establishes modesty as an essential component of faith."
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
      category: 'practices',
      claim: "Halal is just about food restrictions",
      clarification: "Halal means permissible and applies to all aspects of life. Islamic dietary laws emphasize compassion, hygiene, and respect for animals.",
      whyPeopleBelieve: "Halal is most visible in food products, leading people to think it's only about dietary restrictions.",
      evidence: {
        quran: [
          { 
            verse: "O you who have believed, eat from the good things which We have provided for you.", 
            ref: "Quran 2:172",
            tafsir: "This verse encourages Muslims to eat from the good, lawful provisions that God has provided."
          },
          { 
            verse: "And there is no creature on [or within] the earth or bird that flies with its wings except that they are communities like you.", 
            ref: "Quran 6:38",
            tafsir: "This verse teaches that animals are communities like humans, deserving of respect and care."
          }
        ],
        hadith: [
          { 
            text: "Verily, Allah has prescribed excellence in all things. So if you slaughter, slaughter well. Let each one of you sharpen his blade and let him spare suffering to the animal.", 
            ref: "Sahih Muslim",
            context: "This hadith establishes the principle of excellence (ihsan) in all actions, including animal slaughter."
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
