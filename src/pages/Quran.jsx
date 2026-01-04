import { useState } from 'react'
import InteractiveRecitationPlayer from '../components/InteractiveRecitationPlayer'

export default function Quran() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📖' },
    { id: 'structure', name: 'Structure', icon: '📚' },
    { id: 'preservation', name: 'Preservation', icon: '🔒' },
    { id: 'themes', name: 'Themes', icon: '💡' },
    { id: 'player', name: 'Recitation Player', icon: '🎵' }
  ]

  const content = {
    overview: {
      title: "What is the Quran?",
      subtitle: "The holy book of Islam",
      points: [
        {
          heading: "Divine Revelation",
          text: "The Quran is the word of God, revealed to Prophet Muhammad (peace be upon him) through the Angel Gabriel over 23 years, beginning in 610 CE."
        },
        {
          heading: "Complete Guidance",
          text: "It contains guidance for all aspects of life - spiritual, moral, social, and legal. It addresses the human condition and provides answers to life's fundamental questions."
        },
        {
          heading: "Miraculous Nature",
          text: "Muslims believe the Quran is a miracle in itself - its linguistic beauty, scientific accuracy, and lack of contradictions are seen as proof of its divine origin."
        },
        {
          heading: "Universal Message",
          text: "The Quran's message is universal, meant for all of humanity regardless of time, place, or culture. It emphasizes justice, mercy, and the worship of One God."
        }
      ]
    },
    structure: {
      title: "Structure of the Quran",
      subtitle: "How is it organized?",
      points: [
        {
          heading: "114 Chapters (Surahs)",
          text: "The Quran is divided into 114 chapters, called surahs. Each surah varies in length, from just 3 verses to 286 verses."
        },
        {
          heading: "Verses (Ayat)",
          text: "Each surah is composed of verses, called ayat. There are approximately 6,236 verses in total, though the exact count varies slightly."
        },
        {
          heading: "Meccan and Medinan",
          text: "Surahs are classified as Meccan (revealed before the migration to Medina) or Medinan (revealed after). Meccan surahs often focus on faith and the afterlife, while Medinan surahs address social and legal matters."
        },
        {
          heading: "Not in Chronological Order",
          text: "The surahs are not arranged in the order they were revealed. Instead, they are roughly organized by length, with longer surahs generally appearing first."
        }
      ]
    },
    preservation: {
      title: "Preservation of the Quran",
      subtitle: "How has it remained unchanged?",
      points: [
        {
          heading: "Memorization",
          text: "From the beginning, Muslims memorized the Quran. Today, millions of Muslims have memorized the entire book, creating a living chain of preservation that spans 14 centuries."
        },
        {
          heading: "Written Record",
          text: "During Prophet Muhammad's lifetime, scribes wrote down the revelations. Shortly after his death, the written compilation was standardized under Caliph Uthman."
        },
        {
          heading: "Multiple Copies",
          text: "Caliph Uthman sent copies of the standardized Quran to major Muslim cities. These copies served as the authoritative text, preventing variations."
        },
        {
          heading: "Manuscript Evidence",
          text: "Ancient Quranic manuscripts dating back to the 7th century exist today. They show remarkable consistency with modern copies, demonstrating the Quran's preservation."
        }
      ]
    },
    themes: {
      title: "Key Themes in the Quran",
      subtitle: "What does it teach?",
      points: [
        {
          heading: "Monotheism (Tawhid)",
          text: "The central theme is the oneness of God. The Quran repeatedly emphasizes that there is no god but Allah, and that He alone deserves worship."
        },
        {
          heading: "Prophethood",
          text: "The Quran tells the stories of many prophets, including Adam, Noah, Abraham, Moses, Jesus, and Muhammad (peace be upon them all). It presents them as teachers of the same message."
        },
        {
          heading: "The Afterlife",
          text: "The Quran teaches that this life is a test, and that we will be resurrected and judged. It vividly describes Paradise and Hell as consequences of our choices."
        },
        {
          heading: "Justice and Mercy",
          text: "The Quran balances justice with mercy. It teaches that God is just and will hold everyone accountable, but also that He is merciful and forgiving to those who repent."
        },
        {
          heading: "Moral Guidance",
          text: "The Quran provides detailed guidance on ethical behavior - honesty, kindness, patience, humility, and respect for others. It emphasizes character over ritual."
        }
      ]
    },
    player: {
      title: "Interactive Recitation Player",
      subtitle: "Listen and follow along",
      points: []
    }
  }

  return (
    <div className="section">
      <h2>The Quran</h2>
      <p>The holy book of Islam - preserved, unchanged, and guiding billions</p>
      
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

      {activeSection !== 'player' ? (
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
      ) : (
        <InteractiveRecitationPlayer />
      )}
    </div>
  )
}
