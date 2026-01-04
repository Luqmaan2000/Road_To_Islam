import { useState } from 'react'

export default function Fundamentals() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📚' },
    { id: 'pillars', name: 'Five Pillars', icon: '🏛️' },
    { id: 'beliefs', name: 'Six Articles', icon: '🌟' },
    { id: 'meaning', name: 'Meaning of Life', icon: '💭' },
    { id: 'practices', name: 'Daily Practices', icon: '🕌' }
  ]

  const content = {
    overview: {
      title: "What is Islam?",
      subtitle: "A complete way of life",
      points: [
        {
          heading: "Islam Means Submission",
          text: "The word 'Islam' comes from the Arabic root 'S-L-M,' which means peace and submission. Islam is the act of submitting to the will of the One God (Allah) and finding peace in that submission."
        },
        {
          heading: "A Monotheistic Faith",
          text: "At its core, Islam is about believing in and worshipping One God. This belief, called Tawhid, is the foundation of everything in Islam. Muslims believe there is no god but Allah, and Muhammad is His messenger."
        },
        {
          heading: "Not a New Religion",
          text: "Islam is not a new religion that started 1400 years ago. It's the original monotheistic faith that began with the first human, Prophet Adam. All prophets - from Adam to Muhammad - taught the same core message: worship One God."
        },
        {
          heading: "A Complete Way of Life",
          text: "Islam is not just a religion practiced on Fridays. It's a complete way of life that guides every aspect of a Muslim's existence - from how they pray and eat, to how they treat others and conduct business."
        }
      ]
    },
    pillars: {
      title: "The Five Pillars of Islam",
      subtitle: "The foundation of Muslim life",
      points: [
        {
          heading: "Shahada (Declaration of Faith)",
          text: "The testimony that there is no god but Allah, and Muhammad is His messenger. This simple statement, when said with conviction, makes a person a Muslim."
        },
        {
          heading: "Salah (Prayer)",
          text: "Muslims pray five times a day - dawn, noon, afternoon, sunset, and evening. Prayer is a direct connection with God, a reminder of faith throughout the day, and a source of spiritual strength."
        },
        {
          heading: "Zakat (Charity)",
          text: "Muslims give 2.5% of their accumulated wealth annually to those in need. This purifies wealth, helps the poor, and creates a society of care and compassion."
        },
        {
          heading: "Sawm (Fasting)",
          text: "During the month of Ramadan, Muslims fast from dawn to sunset, abstaining from food, drink, and other physical needs. Fasting teaches self-discipline, empathy for the poor, and spiritual focus."
        },
        {
          heading: "Hajj (Pilgrimage)",
          text: "Once in a lifetime, if able, Muslims travel to Mecca to perform the Hajj pilgrimage. It's a journey of faith that unites Muslims from every corner of the world in worship of One God."
        }
      ]
    },
    beliefs: {
      title: "The Six Articles of Faith",
      subtitle: "What Muslims believe",
      points: [
        {
          heading: "Belief in Allah (God)",
          text: "Muslims believe in One God, Allah, who is the Creator and Sustainer of everything. He has no partners, no children, and no equals. He is Merciful, Just, and All-Knowing."
        },
        {
          heading: "Belief in Angels",
          text: "Muslims believe in angels who worship God and carry out His commands. They include Gabriel, who brought revelations to the prophets, and the angels who record our deeds."
        },
        {
          heading: "Belief in Revealed Books",
          text: "Muslims believe that God revealed holy books to guide humanity, including the Torah to Moses, the Psalms to David, the Gospel to Jesus, and the Quran to Muhammad."
        },
        {
          heading: "Belief in Prophets",
          text: "Muslims believe in all prophets, from Adam to Muhammad. They include Noah, Abraham, Moses, Jesus, and many others. All prophets brought the same message: worship One God."
        },
        {
          heading: "Belief in the Day of Judgment",
          text: "Muslims believe that everyone will be resurrected and judged by God for their actions. This life is a test, and the next life is eternal - either in Paradise or Hell."
        },
        {
          heading: "Belief in Divine Decree",
          text: "Muslims believe that everything happens by God's will and wisdom. While humans have free will, God knows everything and has power over all things."
        }
      ]
    },
    meaning: {
      title: "The Meaning of Life in Islam",
      subtitle: "Why are we here?",
      points: [
        {
          heading: "To Worship God",
          text: "The primary purpose of human existence is to worship and know God. This worship isn't limited to rituals - it includes living a righteous life, being kind to others, and using one's talents for good."
        },
        {
          heading: "To Be Stewards of Earth",
          text: "Humans are God's vicegerents (representatives) on earth. We are entrusted with caring for the planet, its creatures, and each other. This is both a responsibility and an honor."
        },
        {
          heading: "To Be Tested",
          text: "Life is a test. God created us with free will to choose between good and evil. Our choices in this life determine our fate in the next. This test gives life meaning and purpose."
        },
        {
          heading: "To Do Good and Avoid Evil",
          text: "Islam teaches that we should actively do good - help others, speak truth, show mercy - and avoid evil - lying, cheating, harming others. Every action counts."
        },
        {
          heading: "To Prepare for the Hereafter",
          text: "This life is temporary, like a journey. The Hereafter is eternal. Muslims believe that the best use of this life is to prepare for the next by doing good and drawing closer to God."
        }
      ]
    },
    practices: {
      title: "Daily Practices of Muslims",
      subtitle: "How Islam is lived every day",
      points: [
        {
          heading: "Prayer Five Times a Day",
          text: "Muslims pause five times daily to pray, reconnecting with God and remembering what's truly important. Prayer is a spiritual anchor in a busy world."
        },
        {
          heading: "Reading the Quran",
          text: "Many Muslims read or listen to the Quran daily, even if just a few verses. It's a source of guidance, comfort, and spiritual nourishment."
        },
        {
          heading: "Remembering God (Dhikr)",
          text: "Muslims frequently remember God through phrases like 'Alhamdulillah' (praise be to God) and 'SubhanAllah' (glory be to God). This keeps God in mind throughout the day."
        },
        {
          heading: "Being Kind to Others",
          text: "Islam emphasizes good character - being honest, kind, patient, and respectful. The Prophet Muhammad said: 'The best among you are those who have the best manners.'"
        },
        {
          heading: "Eating Halal",
          text: "Muslims eat halal (permissible) food and avoid haram (forbidden) food like pork and alcohol. This is about mindfulness, gratitude, and following God's guidance."
        }
      ]
    }
  }

  return (
    <div className="section">
      <h2>Islam Fundamentals</h2>
      <p>Understanding the basics of Islam - beliefs, practices, and purpose</p>
      
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
        <h3>{content[activeSection].title}</h3>
        <p className="subtitle">{content[activeSection].subtitle}</p>
        
        {content[activeSection].points.map((point, index) => (
          <div key={index} className="content-block">
            <h4>{point.heading}</h4>
            <p>{point.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
