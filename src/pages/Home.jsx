import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="section">
      <h2>Welcome to Understanding Islam</h2>
      <p>Explore Islam through clear, accurate information and discover the beauty of its teachings. Whether you're curious, seeking answers, or simply want to learn, you're in the right place.</p>
      
      <div className="cards">
        <Card 
          title="Islam Fundamentals"
          description="Start with the basics - learn what Islam is, who Muslims worship, and the core beliefs that guide over 1.8 billion people worldwide."
          link="/fundamentals"
          icon="📚"
        />
        <Card 
          title="Prophet Muhammad"
          description="Discover the life of one of history's most influential figures - his character, his message, and his lasting impact on the world."
          link="/prophet"
          icon="👤"
        />
        <Card 
          title="The Quran"
          description="Dive into the holy book of Islam - its preservation, its scientific insights, and its timeless wisdom for modern life."
          link="/quran"
          icon="📖"
        />
        <Card 
          title="Common Questions"
          description="Find clear, respectful answers to the most common questions about Islam - from beliefs to practices to misconceptions."
          link="/qa"
          icon="❓"
        />
        <Card 
          title="Other Faiths"
          description="Explore the connections between Islam, Christianity, and Judaism - shared beliefs, common ground, and mutual respect."
          link="/religions"
          icon="🤝"
        />
        <Card 
          title="Misconceptions"
          description="Address common misunderstandings about Islam with evidence, context, and thoughtful explanations."
          link="/misconceptions"
          icon="💡"
        />
      </div>

      <div className="quote-box">
        <p>"The seeking of knowledge is obligatory for every Muslim."</p>
        <p className="quote-source">- Prophet Muhammad (PBUH)</p>
      </div>

      <div className="home-cta">
        <h3>Ready to Begin Your Journey?</h3>
        <p>Start with Islam Fundamentals to build a solid foundation, or jump to any topic that interests you most.</p>
        <div className="home-cta-buttons">
          <Link to="/fundamentals" className="home-cta-btn primary">Start with Fundamentals</Link>
          <Link to="/qa" className="home-cta-btn secondary">Browse Questions</Link>
        </div>
      </div>
    </div>
  )
}
