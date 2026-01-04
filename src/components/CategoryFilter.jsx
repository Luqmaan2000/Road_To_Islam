import { categories } from '../data/surahsData'

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="category-tabs">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(cat.id)}
        >
          <span className="category-icon">{cat.icon}</span>
          <span className="category-name">{cat.name}</span>
        </button>
      ))}
    </div>
  )
}
