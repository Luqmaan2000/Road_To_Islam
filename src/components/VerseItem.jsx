import { formatTime } from '../utils/formatTime'

export default function VerseItem({ verse, isActive, onClick }) {
  return (
    <div 
      className={`verse-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="verse-number">{verse.number}</div>
      <div className="verse-content">
        <p className="verse-arabic">{verse.arabic}</p>
        <p className="verse-transliteration">{verse.transliteration}</p>
        <p className="verse-translation">{verse.translation}</p>
      </div>
      <div className="verse-timing">
        {formatTime(verse.startTime)} - {formatTime(verse.endTime)}
      </div>
    </div>
  )
}
