import { useState, useEffect } from 'react'
import './App.css'
import WorkoutTracker from './components/WorkoutTracker'
import GoalManager from './components/GoalManager'

function App() {
  const [userId] = useState('user-' + Math.random().toString(36).substr(2, 9))
  const [activeTab, setActiveTab] = useState('workouts')
  const [apiStatus, setApiStatus] = useState('checking')

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/health')
        if (response.ok) {
          setApiStatus('connected')
        } else {
          setApiStatus('error')
        }
      } catch (error) {
        setApiStatus('error')
        console.error('API health check failed:', error)
      }
    }
    checkHealth()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🐙 OctoFit Tracker</h1>
          <p>Your personal fitness tracking companion</p>
          <div className="api-status">
            <span className={`status-indicator ${apiStatus}`}></span>
            API: {apiStatus === 'connected' ? '✅ Connected' : apiStatus === 'error' ? '❌ Disconnected' : '⏳ Checking...'}
          </div>
        </div>
      </header>

      <nav className="navigation">
        <button 
          className={`nav-button ${activeTab === 'workouts' ? 'active' : ''}`}
          onClick={() => setActiveTab('workouts')}
        >
          💪 Workouts
        </button>
        <button 
          className={`nav-button ${activeTab === 'goals' ? 'active' : ''}`}
          onClick={() => setActiveTab('goals')}
        >
          🎯 Goals
        </button>
      </nav>

      <main className="main-content">
        {apiStatus === 'error' && (
          <div className="error-banner">
            ⚠️ Unable to connect to API. Please ensure the backend server is running on http://localhost:8000
          </div>
        )}

        {activeTab === 'workouts' && <WorkoutTracker userId={userId} />}
        {activeTab === 'goals' && <GoalManager userId={userId} />}
      </main>

      <footer className="footer">
        <p>Made with ❤️ using GitHub Copilot Agent Mode</p>
      </footer>
    </div>
  )
}

export default App
