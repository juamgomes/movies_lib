import React, { useState, useEffect } from 'react';
import MovieCard from '../componets/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className='m-9 rounded-2xl p-4 min-h-screen'>
      <h2 className='text-white text-4xl text-center mt-8 mb-4 font-bold'>Melhores filmes</h2>
      <div className='flex flex-wrap justify-center p-2 max-w-7xl mx-auto'>
        {topMovies.length === 0 && <p className='text-white'>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Home;
