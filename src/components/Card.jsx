import { Link } from 'react-router-dom'

export default function Card({ title, description, link, icon }) {
  return (
    <div className="card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
      <Link to={link} className="card-link">Learn More →</Link>
    </div>
  )
}
