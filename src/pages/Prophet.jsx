import { useState } from 'react'

export default function Prophet() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', name: 'Overview', icon: '👤' },
    { id: 'earlyLife', name: 'Early Life', icon: '👶' },
    { id: 'character', name: 'Character', icon: '⭐' },
    { id: 'illiteracy', name: 'Illiteracy', icon: '📝' },
    { id: 'revelation', name: 'Revelation', icon: '✨' },
    { id: 'message', name: 'Message', icon: '📢' },
    { id: 'opposition', name: 'Opposition', icon: '⚔️' },
    { id: 'leadership', name: 'Leadership', icon: '🤝' },
    { id: 'legacy', name: 'Legacy', icon: '🌟' }
  ]

  const content = {
    overview: {
      title: "Who Was Prophet Muhammad?",
      subtitle: "A historical figure, not a myth",
      points: [
        {
          heading: "A Documented Historical Figure",
          text: "Prophet Muhammad (peace be upon him) was a real person who lived in 7th-century Arabia. His life is among the most well-documented in human history, with detailed records of his words, actions, and character preserved by both his followers and his contemporaries."
        },
        {
          heading: "Central Figure of Islam",
          text: "Muhammad is the central figure of Islam, believed by Muslims to be the final prophet sent by God. Over 1.8 billion people today revere him as a messenger who brought guidance for humanity."
        },
        {
          heading: "Influence Beyond Religion",
          text: "His influence extends far beyond religion. He established legal systems, ethical frameworks, and leadership principles that shaped civilizations. His teachings on justice, mercy, and human dignity continue to inspire people of all backgrounds."
        },
        {
          heading: "A Life We Can Understand",
          text: "Unlike many historical figures whose lives are shrouded in legend, Muhammad's life is documented in remarkable detail. We know about his family, his work, his struggles, his relationships, and his daily habits. This allows us to understand him as a human being, not just a symbol."
        }
      ],
      timeline: [
        { year: "570 CE", event: "Born in Mecca" },
        { year: "610 CE", event: "First revelation at age 40" },
        { year: "622 CE", event: "Migration to Medina" },
        { year: "630 CE", event: "Peaceful conquest of Mecca" },
        { year: "632 CE", event: "Passed away in Medina" }
      ]
    },
    earlyLife: {
      title: "Early Life & Background",
      subtitle: "What kind of person was he before prophethood?",
      points: [
        {
          heading: "Orphaned Early",
          text: "Muhammad was born in Mecca around 570 CE. His father died before he was born, and his mother passed away when he was only six years old. This early loss meant he experienced hardship and responsibility from a young age."
        },
        {
          heading: "Raised by Relatives",
          text: "After his mother's death, his grandfather cared for him briefly, and then his uncle Abu Talib became his guardian. Growing up in a large extended family, he learned the value of community and caring for others."
        },
        {
          heading: "Simple Beginnings",
          text: "He didn't grow up with privilege or power. As a young man, he worked as a shepherd - a humble profession that taught patience and responsibility. Later, he became a merchant, traveling with trade caravans."
        },
        {
          heading: "Living Among His People",
          text: "He lived among his people, not above them. He experienced the same challenges, hopes, and struggles as those around him. This grounded perspective shaped his understanding of human needs and suffering."
        }
      ]
    },
    character: {
      title: "Character & Reputation",
      subtitle: "Was he known to be honest?",
      points: [
        {
          heading: "Known as 'Al-Amin'",
          text: "Long before he claimed prophethood, Muhammad was known as 'Al-Amin' - The Trustworthy. This wasn't a title he gave himself; it was how his community described him because of his consistent honesty and integrity."
        },
        {
          heading: "Trusted with Valuables",
          text: "People in Mecca would entrust him with their money and valuables, knowing he would keep them safe. This trust was remarkable in a society where business dealings were often marked by suspicion and conflict."
        },
        {
          heading: "Chosen as Mediator",
          text: "When disputes arose between families or tribes, people would ask Muhammad to mediate. His fairness and wisdom were respected across social lines - by the rich and poor, by allies and rivals."
        },
        {
          heading: "Reputation Before Prophethood",
          text: "His reputation was established decades before he began his mission. When he later called people to a new message, no one could question his character - they had known him as trustworthy for years."
        }
      ]
    },
    illiteracy: {
      title: "Illiteracy & Authorship",
      subtitle: "Could he have made this up?",
      points: [
        {
          heading: "Unlettered Prophet",
          text: "Historical records confirm that Muhammad could not read or write. In Arabic, he is called 'Ummi' - the unlettered. This was well-known in his time and is mentioned in early Islamic sources."
        },
        {
          heading: "An Oral Society",
          text: "7th-century Arabia was largely an oral society. While some people could read, books were rare. Most knowledge was passed down through poetry, storytelling, and memorization. Muhammad grew up in this environment."
        },
        {
          heading: "No Formal Education",
          text: "He did not study with scholars, nor did he have access to libraries or religious texts. There's no evidence that he studied the Torah, Gospel, or other scriptures before his prophethood."
        },
        {
          heading: "The Qur'an Emerged",
          text: "The Qur'an, revealed over 23 years, contains detailed narratives about previous prophets, complex legal principles, and profound philosophical concepts. Its emergence in this context - from someone who could not read or write - is historically notable."
        }
      ]
    },
    revelation: {
      title: "The Beginning of Revelation",
      subtitle: "When did things change?",
      points: [
        {
          heading: "Age 40",
          text: "Muhammad was 40 years old when the first revelation came. He was already established in his community, with a reputation for honesty and a stable life. He wasn't a young person seeking direction or an ambitious leader looking for followers."
        },
        {
          heading: "A Pattern of Reflection",
          text: "For years before the revelation, he would retreat to a cave on Mount Hira outside Mecca. He would spend time in solitude, reflecting on life and the world around him. This was his personal practice, unknown to most people."
        },
        {
          heading: "The First Experience",
          text: "During one of these retreats, he experienced something that would change his life. He reported being visited by the Angel Gabriel, who commanded him to 'Read.' His response was fear and confusion - he said he could not read."
        },
        {
          heading: "Not Seeking Leadership",
          text: "He wasn't seeking power, followers, or recognition. His initial reaction was fear and uncertainty. He returned home shaken, wondering if something was wrong with him. His wife Khadijah comforted him and became his first supporter."
        }
      ]
    },
    message: {
      title: "Message & Mission",
      subtitle: "What was he actually calling people to?",
      points: [
        {
          heading: "Worship One God",
          text: "At the heart of his message was a simple call: worship the One God who created everything. This challenged the idol worship that was central to Meccan society and its economy."
        },
        {
          heading: "Justice and Moral Reform",
          text: "He called for justice in a society where the weak were exploited. He spoke against the mistreatment of orphans, the oppression of the poor, and the practice of burying infant girls alive."
        },
        {
          heading: "Care for the Vulnerable",
          text: "His message emphasized caring for those in need - the poor, the widows, the orphans, the slaves. Charity wasn't optional; it was central to the faith he taught."
        },
        {
          heading: "Accountability",
          text: "He taught that everyone would be held accountable for their actions. This idea gave dignity to the oppressed and warned the powerful that they couldn't escape justice."
        }
      ]
    },
    opposition: {
      title: "Opposition & Persecution",
      subtitle: "What did it cost him?",
      points: [
        {
          heading: "Social Pressure",
          text: "The Meccan elite opposed his message because it threatened their power and wealth. They mocked him, called him names, and tried to discredit him. His own tribe turned against him."
        },
        {
          heading: "Economic Boycott",
          text: "For three years, his clan was boycotted - no one could trade with them or marry into their families. They were forced to live in a valley outside Mecca, surviving on leaves and whatever food they could find."
        },
        {
          heading: "Personal Loss",
          text: "He lost his beloved wife Khadijah and his uncle Abu Talib in the same year. These were his two greatest supporters. This period became known as the 'Year of Sorrow.'"
        },
        {
          heading: "Refused Compromises",
          text: "The Meccans offered him wealth, power, and even leadership if he would abandon his message. He refused every offer. When given the choice between his mission and comfort, he chose the mission."
        }
      ]
    },
    leadership: {
      title: "Leadership & Mercy",
      subtitle: "How did he behave when he had power?",
      points: [
        {
          heading: "Forgiveness Over Revenge",
          text: "When Muslims finally conquered Mecca peacefully, Muhammad could have taken revenge on those who had persecuted him. Instead, he declared: 'Go, for you are free.' He forgave his fiercest enemies."
        },
        {
          heading: "Living Modestly",
          text: "Even as the leader of a growing community, he lived simply. He patched his own clothes, sat on the floor, and ate whatever was available. He said: 'I am a servant of Allah; I eat as a servant eats and sit as a servant sits.'"
        },
        {
          heading: "Building Community",
          text: "In Medina, he established a constitution that guaranteed rights for all residents, including Jews and Christians. He created a society where different communities could live together in peace."
        },
        {
          heading: "Emphasis on Mercy",
          text: "He taught that mercy was better than justice, forgiveness better than revenge. When someone asked him to curse his enemies, he replied: 'I was not sent to curse, but as a mercy.'"
        }
      ]
    },
    legacy: {
      title: "Death & Legacy",
      subtitle: "Why does this still matter?",
      points: [
        {
          heading: "Died Without Wealth",
          text: "When Muhammad passed away in 632 CE, he left behind no wealth. His armor was mortgaged to a Jewish neighbor for food. He died as he lived - simply, with his focus on his message rather than material gain."
        },
        {
          heading: "Message Continued",
          text: "His death didn't end his message. Within a century, Islam had spread from Spain to India. The civilization that emerged preserved Greek philosophy, advanced mathematics and medicine, and created centers of learning."
        },
        {
          heading: "Influence Across Centuries",
          text: "Today, over 1.8 billion people follow his teachings. His influence on law, ethics, literature, art, and civilization is immeasurable. He is consistently ranked among the most influential people in history."
        },
        {
          heading: "A Life Worth Understanding",
          text: "Whether one accepts his message or not, his life is worth understanding. It's the story of someone who faced immense challenges, remained true to his principles, and left a legacy that continues to shape our world."
        }
      ]
    }
  }

  return (
    <div className="section">
      <h2>Prophet Muhammad (PBUH)</h2>
      <p>A historical figure whose life continues to shape our world</p>
      
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
        
        {content[activeSection].timeline && (
          <div className="timeline">
            <h4>Key Events</h4>
            {content[activeSection].timeline.map((event, index) => (
              <div key={index} className="timeline-item">
                <span className="timeline-year">{event.year}</span>
                <span className="timeline-event">{event.event}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
