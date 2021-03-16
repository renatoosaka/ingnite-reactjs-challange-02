import { MovieCard } from './MovieCard';
import { useGenre } from '../context/GenresContext';
import { useMovie } from '../context/MoviesContext';

import '../styles/content.scss';

export function Content() {
  const { selectedGenre } = useGenre()
  const { movies } = useMovie()
  
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre?.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}