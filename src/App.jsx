import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Fundamentals from './pages/Fundamentals'
import Quran from './pages/Quran'
import Prophet from './pages/Prophet'
import Religions from './pages/Religions'
import Misconceptions from './pages/Misconceptions'
import QA from './pages/QA'

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/quran" element={<Quran />} />
          <Route path="/prophet" element={<Prophet />} />
          <Route path="/religions" element={<Religions />} />
          <Route path="/misconceptions" element={<Misconceptions />} />
          <Route path="/qa" element={<QA />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
