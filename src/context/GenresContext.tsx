import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { api } from '../services/api';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresContextData {
  genres: Genre[]
  selectedGenre: Genre | undefined
  selectedGenreID: number
  selectGenre: (id: number) => void
}

const GenresContext = createContext({} as GenresContextData)

interface GenresProviderProps {
  children: React.ReactNode
}

export function GenresProvider({ children }: GenresProviderProps) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenreID, setSelectedGenreID] = useState(1)

  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function selectGenre(id: number) {
    setSelectedGenreID(id)
  }

  const selectedGenre = useMemo(() => genres.find(genre => genre.id === selectedGenreID), [selectedGenreID])

  return (
    <GenresContext.Provider value={{ genres, selectedGenreID, selectGenre, selectedGenre }}>
      {children}
    </GenresContext.Provider>
  )
}

export const useGenre = () => useContext(GenresContext)