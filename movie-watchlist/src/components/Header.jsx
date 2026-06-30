export default function Header({ totalMovies, watchedMovies, nonWatchedMovies }) {
  return (
    <div className="header-stats">
      <div className="stat-card">
        <span className="stat-icon">🎬</span>
        <span className="stat-count">{totalMovies}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-card">
        <span className="stat-icon">👁️</span>
        <span className="stat-count watched">{watchedMovies}</span>
        <span className="stat-label">Watched</span>
      </div>
      <div className="stat-card">
        <span className="stat-icon">⏳</span>
        <span className="stat-count unwatched">{nonWatchedMovies}</span>
        <span className="stat-label">To Watch</span>
      </div>
    </div>
  )
}
