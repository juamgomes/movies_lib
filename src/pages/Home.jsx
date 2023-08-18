import {React, useState, useEffect} from 'react'
import MovieCard from '../componets/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, SetTopMovies] = useState([])

  const getTopRateMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    SetTopMovies(data.results);
  };


  useEffect(() => {

    const topRateURL = `${moviesURL}top_rated?${apiKey}`;

    getTopRateMovies(topRateURL);

  }, [])

  return (
    <div>
      <h2 className='text-white text-4xl text-center mt-8 mb-4 font-bold'>Melhores filmes</h2>
      <div className='flex flex-wrap justify-between p-2 max-w-7xl m-auto'>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );  
  
};

export default Home