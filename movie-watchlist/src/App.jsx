import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import AddMovie from "./components/AddMovie"

export default function App() {

  const [watched, setWatched] = React.useState([])

  function toggleWatched(id){
    const updateMovies = watched.map(movie => (
      movie.id === id ? {...movie, watched: !movie.watched} : movie
    ))
    setWatched(updateMovies)
  }

  const movieList = watched.map((movie) => (
    <Card
      key={movie.id}
      title={movie.title}
      rating={movie.rating}
      image={movie.poster}
      year={movie.year}
      watched={movie.watched}
      genre={movie.genre}
      duration={movie.duration}
      watchedToggle={() => toggleWatched(movie.id)}
    />
  ))

  

  return (
    <>
      <h1 className="app-title">Movie Watchlist</h1>
      <Header
       totalMovies={watched.length} 
       watchedMovies={watched.filter(movie => movie.watched).length} 
       nonWatchedMovies={watched.filter(movie => !movie.watched).length} 
       />
      <AddMovie addMovie={setWatched} />
      <div className="movie-grid">{movieList}</div>
    </>
  )
}
