import { useState } from 'react'

export default function Religions() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', name: 'Overview', icon: '🤝' },
    { id: 'christianity', name: 'Christianity', icon: '✝️' },
    { id: 'judaism', name: 'Judaism', icon: '✡️' },
    { id: 'similarities', name: 'Similarities', icon: '💡' },
    { id: 'differences', name: 'Differences', icon: '🔍' }
  ]

  const content = {
    overview: {
      title: "Islam and Other Faiths",
      subtitle: "Common ground and mutual respect",
      points: [
        {
          heading: "Shared Heritage",
          text: "Islam, Christianity, and Judaism are all Abrahamic faiths - they trace their spiritual lineage back to Prophet Abraham. They share many prophets, stories, and core beliefs."
        },
        {
          heading: "One God",
          text: "All three faiths are monotheistic - they believe in One God. Muslims worship the same God that Christians and Jews worship - the God of Abraham, Moses, and Jesus (peace be upon them)."
        },
        {
          heading: "Reverence for Prophets",
          text: "Muslims believe in and honor all the prophets mentioned in the Bible, including Adam, Noah, Abraham, Moses, David, Solomon, John the Baptist, and Jesus (peace be upon them all)."
        },
        {
          heading: "Respect for Other Faiths",
          text: "Islam teaches respect for people of all faiths who worship the One God. The Quran states: 'There is no compulsion in religion' (2:256) and commands Muslims to argue with others 'in the best way' (16:125)."
        }
      ]
    },
    christianity: {
      title: "Islam and Christianity",
      subtitle: "Shared beliefs and key differences",
      points: [
        {
          heading: "Shared Beliefs",
          text: "Muslims and Christians both believe in One God, the Day of Judgment, angels, and prophets. Both revere Jesus (peace be upon him) and his mother Mary. The Quran mentions Jesus 25 times and Mary 34 times."
        },
        {
          heading: "Jesus in Islam",
          text: "Muslims believe Jesus was a mighty prophet, born of the Virgin Mary through a miracle from God. He performed miracles by God's permission, healed the sick, and raised the dead. He will return before the Day of Judgment."
        },
        {
          heading: "Key Difference: Jesus's Nature",
          text: "Christians believe Jesus is the Son of God and part of the Trinity. Muslims believe Jesus was a human prophet, not divine. The Quran states: 'He is Allah, One, Allah, the Eternal Refuge. He neither begets nor is born' (112:1-4)."
        },
        {
          heading: "Key Difference: Original Sin",
          text: "Christianity teaches that humans inherit original sin from Adam. Islam teaches that everyone is born pure and sinless. Each person is responsible only for their own actions."
        },
        {
          heading: "Key Difference: Scripture",
          text: "Christians follow the Bible (Old and New Testaments). Muslims follow the Quran, which they believe is the final, uncorrupted revelation from God. Muslims believe the original Torah and Gospel were divine but have been altered over time."
        }
      ]
    },
    judaism: {
      title: "Islam and Judaism",
      subtitle: "Ancient connections and shared traditions",
      points: [
        {
          heading: "Shared Beliefs",
          text: "Muslims and Jews both believe in One God, the Day of Judgment, angels, and prophets. Both share dietary laws (halal/kosher have many similarities), circumcision, and strict monotheism."
        },
        {
          heading: "Prophets in Common",
          text: "Muslims believe in all the Hebrew prophets - Abraham, Isaac, Jacob, Joseph, Moses, David, Solomon, and many others. The Quran tells their stories with reverence and detail."
        },
        {
          heading: "Key Difference: Jesus and Muhammad",
          text: "Jews do not accept Jesus or Muhammad as prophets. Muslims believe both were prophets sent by God. Muslims believe Jesus was the Messiah, but not divine, and Muhammad was the final messenger."
        },
        {
          heading: "Key Difference: Scripture",
          text: "Jews follow the Torah (first five books of Moses) and the Tanakh (Hebrew Bible). Muslims follow the Quran, which they believe supersedes previous revelations while confirming their core message."
        },
        {
          heading: "Historical Relationship",
          text: "In Medina, the Prophet Muhammad established a constitution that guaranteed religious freedom for Jews. Muslims and Jews have had periods of cooperation and conflict throughout history, like any two communities."
        }
      ]
    },
    similarities: {
      title: "Key Similarities",
      subtitle: "What unites these faiths",
      points: [
        {
          heading: "Monotheism",
          text: "All three faiths believe in One God who created everything. This is the most fundamental shared belief."
        },
        {
          heading: "Prophets",
          text: "All three faiths revere prophets as messengers of God. They share many of the same prophets and their stories."
        },
        {
          heading: "Moral Values",
          text: "All three faiths emphasize honesty, kindness, justice, charity, and respect for others. They teach similar ethical principles."
        },
        {
          heading: "Sacred Texts",
          text: "All three faiths have sacred scriptures that they believe contain God's guidance. They all value reading, studying, and living by these texts."
        },
        {
          heading: "Prayer and Worship",
          text: "All three faiths emphasize prayer, worship, and a personal relationship with God. They all have regular times for prayer and worship."
        },
        {
          heading: "Afterlife",
          text: "All three faiths believe in an afterlife and that our actions in this life matter for the next."
        }
      ]
    },
    differences: {
      title: "Key Differences",
      subtitle: "Understanding the distinctions",
      points: [
        {
          heading: "View of Jesus",
          text: "Christians believe Jesus is the Son of God and part of the Trinity. Jews believe Jesus was a teacher but not the Messiah. Muslims believe Jesus was a prophet but not divine."
        },
        {
          heading: "View of Muhammad",
          text: "Christians and Jews do not accept Muhammad as a prophet. Muslims believe he was the final messenger of God."
        },
        {
          heading: "Concept of God",
          text: "Christians believe in the Trinity (Father, Son, Holy Spirit). Jews and Muslims believe in absolute monotheism - God is One, with no partners or divisions."
        },
        {
          heading: "Original Sin",
          text: "Christianity teaches original sin. Judaism and Islam teach that everyone is born pure and responsible only for their own actions."
        },
        {
          heading: "Scripture",
          text: "Christians follow the Bible. Jews follow the Torah and Tanakh. Muslims follow the Quran, which they believe is the final revelation."
        },
        {
          heading: "Salvation",
          text: "Christians believe salvation comes through faith in Jesus. Jews believe salvation comes through following the Torah. Muslims believe salvation comes through faith and good deeds."
        }
      ]
    }
  }

  return (
    <div className="section">
      <h2>Islam & Other Faiths</h2>
      <p>Exploring connections, similarities, and mutual respect between faiths</p>
      
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
