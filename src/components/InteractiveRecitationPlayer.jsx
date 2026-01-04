import { useState } from 'react'
import { surahs } from '../data/surahsData'
import CategoryFilter from './CategoryFilter'
import SurahCard from './SurahCard'

export default function InteractiveRecitationPlayer() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSurah, setActiveSurah] = useState(null)
  
  const filteredSurahs = activeCategory === 'all' 
    ? surahs 
    : surahs.filter(surah => surah.category === activeCategory)
  
  const handleSurahToggle = (surahId) => {
    setActiveSurah(activeSurah === surahId ? null : surahId)
  }
  
  return (
    <div className="quran-player">
      <h2>Interactive Quran Recitation</h2>
      <p>Listen to beautiful recitations and follow along with the verses</p>
      
      <CategoryFilter 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="surahs-grid">
        {filteredSurahs.map(surah => (
          <SurahCard
            key={surah.id}
            surah={surah}
            isActive={activeSurah === surah.id}
            onToggle={handleSurahToggle}
          />
        ))}
      </div>
    </div>
  )
}
