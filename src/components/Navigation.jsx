import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/fundamentals" className="nav-link">Islam Fundamentals</Link>
      <Link to="/quran" className="nav-link">The Quran</Link>
      <Link to="/prophet" className="nav-link">Prophet Muhammad (PBUH)</Link>
      <Link to="/religions" className="nav-link">Islam & Other Faiths</Link>
      <Link to="/misconceptions" className="nav-link">Common Misconceptions</Link>
      <Link to="/qa" className="nav-link">Questions & Answers</Link>
    </nav>
  )
}
