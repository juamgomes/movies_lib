import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../componets/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);
  

  return (
    <div>
    <h2 className='text-white text-4xl text-center mt-8 mb-4 font-bold'>Resultados para: <span className="text-yellow-400">{query}</span></h2>
    <div className='flex flex-wrap justify-between p-2 max-w-7xl m-auto'>
      {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  </div>
  )
}

export default Search