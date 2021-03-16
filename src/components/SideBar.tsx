import { Button } from './Button';
import { useGenre } from '../context/GenresContext'

import '../styles/sidebar.scss';

export function SideBar() {
  const { genres, selectGenre, selectedGenreID } = useGenre()

  function handleClickButton(id: number) {
    selectGenre(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreID === genre.id}
          />
        ))}
      </div>

    </nav>    
  )
}