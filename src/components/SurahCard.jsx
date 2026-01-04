import { useState } from 'react'
import { getYouTubeEmbedUrl } from '../utils/getYouTubeEmbedUrl'
import VerseItem from './VerseItem'

export default function SurahCard({ surah, isActive, onToggle }) {
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [expanded, setExpanded] = useState(false)
  
  const embedUrl = getYouTubeEmbedUrl(surah.audioUrl)
  
  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime)
  }
  
  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  
  const handleVerseClick = (startTime) => {
    const iframe = document.querySelector(`#youtube-${surah.id}`)
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'seekTo', args: [startTime, true] }),
        '*'
      )
    }
  }
  
  const activeVerse = surah.versesData.find(
    verse => currentTime >= verse.startTime && currentTime <= verse.endTime
  )
  
  return (
    <div className={`surah-card ${isActive ? 'active' : ''}`}>
      <div className="surah-header" onClick={() => onToggle(surah.id)}>
        <div className="surah-info">
          <h3>{surah.name}</h3>
          <p className="surah-details">
            Surah {surah.number} • {surah.verses} verses • {surah.reciter}
          </p>
          <p className="surah-summary">{surah.summary}</p>
        </div>
        <button className="expand-btn">
          {isActive ? '▼' : '▶'}
        </button>
      </div>
      
      {isActive && (
        <div className="surah-content">
          {embedUrl && (
            <div className="video-container">
              <iframe
                id={`youtube-${surah.id}`}
                width="100%"
                height="315"
                src={`${embedUrl}?enablejsapi=1`}
                title={surah.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onTimeUpdate={handleTimeUpdate}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            </div>
          )}
          
          <button 
            className="toggle-verses-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide Verses' : 'Show Verses'}
          </button>
          
          {expanded && (
            <div className="verses-list">
              {surah.versesData.map(verse => (
                <VerseItem
                  key={verse.number}
                  verse={verse}
                  isActive={activeVerse?.number === verse.number}
                  onClick={() => handleVerseClick(verse.startTime)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
