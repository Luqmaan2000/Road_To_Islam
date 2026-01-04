import { useState } from 'react'

export default function QA() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedQuestion, setExpandedQuestion] = useState(null)

  const categories = [
    { id: 'all', name: 'All Questions', icon: '❓' },
    { id: 'beliefs', name: 'Beliefs', icon: '🌟' },
    { id: 'practices', name: 'Practices', icon: '🕌' },
    { id: 'women', name: 'Women', icon: '👩' },
    { id: 'misconceptions', name: 'Misconceptions', icon: '💡' }
  ]

  const questions = [
    {
      id: 1,
      category: 'beliefs',
      question: "What do Muslims believe about God?",
      answer: "Muslims believe in One God (Allah) who is the Creator and Sustainer of everything. He has no partners, no children, and no equals. He is Merciful, Just, and All-Knowing. The concept of God's oneness is called Tawhid and is the central belief in Islam."
    },
    {
      id: 2,
      category: 'beliefs',
      question: "Who is Prophet Muhammad?",
      answer: "Prophet Muhammad (peace be upon him) is the final messenger in Islam. Muslims believe he was chosen by God to receive the final revelation, the Quran. He was born in Mecca in 570 CE and received his first revelation at age 40. He is considered the perfect example of how to live according to Islamic teachings."
    },
    {
      id: 3,
      category: 'beliefs',
      question: "What is the Quran?",
      answer: "The Quran is the holy book of Islam, believed by Muslims to be the word of God revealed to Prophet Muhammad through the Angel Gabriel over 23 years. It contains guidance for all aspects of life and has been preserved unchanged for over 1400 years."
    },
    {
      id: 4,
      category: 'practices',
      question: "Why do Muslims pray five times a day?",
      answer: "The five daily prayers are a direct connection with God. They serve as spiritual reminders throughout the day, help maintain mindfulness of God, and provide structure and discipline. Each prayer has specific times and can be performed anywhere."
    },
    {
      id: 5,
      category: 'practices',
      question: "What is Ramadan?",
      answer: "Ramadan is the holy month of fasting in Islam. Muslims fast from dawn to sunset, abstaining from food, drink, and other physical needs. It's a time for spiritual reflection, increased devotion, and self-discipline. Fasting is one of the Five Pillars of Islam."
    },
    {
      id: 6,
      category: 'practices',
      question: "What is Hajj?",
      answer: "Hajj is the annual pilgrimage to Mecca, one of the Five Pillars of Islam. It's obligatory once in a lifetime for those who are physically and financially able. Millions of Muslims from around the world gather to worship together, demonstrating the unity of the Muslim community."
    },
    {
      id: 7,
      category: 'women',
      question: "What does Islam say about women's rights?",
      answer: "Islam granted women rights 1400 years ago that were revolutionary for that time, including the right to own property, inherit, choose their spouse, receive education, and divorce. The Quran emphasizes equality between men and women in spiritual worth and rewards."
    },
    {
      id: 8,
      category: 'women',
      question: "Why do some Muslim women wear hijab?",
      answer: "Hijab is a personal choice that represents modesty and devotion to God. Many Muslim women choose to wear it as an expression of their faith and identity. The Quran emphasizes modesty for both men and women, and hijab is one way women fulfill this requirement."
    },
    {
      id: 9,
      category: 'misconceptions',
      question: "Does Islam promote violence?",
      answer: "No. Islam strictly prohibits killing innocents. The Quran states: 'Whoever kills a soul unless for a soul or for corruption [done] in the land - it is as if he had slain all of mankind' (5:32). The word 'Islam' comes from the root meaning peace, and the actions of extremists do not represent the religion."
    },
    {
      id: 10,
      category: 'misconceptions',
      question: "Do Muslims worship a different God?",
      answer: "No. Muslims worship the same One God that Christians and Jews worship - the God of Abraham, Moses, and Jesus (peace be upon them). The word 'Allah' is simply Arabic for 'God.' Arab Christians and Jews also use 'Allah' when referring to God."
    },
    {
      id: 11,
      category: 'misconceptions',
      question: "What is Jihad?",
      answer: "Jihad means 'struggle' or 'striving.' The greater jihad is the internal struggle against one's ego and base desires. The lesser jihad can include armed struggle, but only in self-defense and under strict conditions. Terrorism and killing innocents are absolutely forbidden."
    },
    {
      id: 12,
      category: 'beliefs',
      question: "What happens after death in Islam?",
      answer: "Muslims believe in an afterlife where everyone will be resurrected and judged by God for their actions. This life is a test, and the next life is eternal. Those who believed and did good deeds will enter Paradise, while those who rejected God and did evil will face punishment."
    }
  ]

  const filteredQuestions = activeCategory === 'all' 
    ? questions 
    : questions.filter(q => q.category === activeCategory)

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id)
  }

  return (
    <div className="section">
      <h2>Questions & Answers</h2>
      <p>Find clear, respectful answers to common questions about Islam</p>
      
      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat.id)
              setExpandedQuestion(null)
            }}
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </button>
        ))}
      </div>
      
      <div className="qa-list">
        {filteredQuestions.map(q => (
          <div key={q.id} className="qa-item">
            <button 
              className="qa-question"
              onClick={() => toggleQuestion(q.id)}
            >
              <span className="qa-icon">❓</span>
              <span className="qa-text">{q.question}</span>
              <span className="expand-icon">{expandedQuestion === q.id ? '▼' : '▶'}</span>
            </button>
            
            {expandedQuestion === q.id && (
              <div className="qa-answer">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
