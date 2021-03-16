import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
import { useGenre } from "./GenresContext";

interface Movie {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MoviesContextData {
  movies: Movie[]
}

const MoviesContext = createContext({} as MoviesContextData)

interface MoviesProviderProps {
  children: React.ReactNode
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const { selectedGenreID } = useGenre()
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    api.get<Movie[]>(`movies/?Genre_id=${selectedGenreID}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreID]);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  )
}

export const useMovie = () => useContext(MoviesContext)