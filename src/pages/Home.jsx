import {React, useState, useEffect} from 'react'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const {topMovies, SetTopMovies} = useState([])

  const getTopRateMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    console.log(data)
  };


  useEffect(() => {

    const topRateURL = `${moviesURL}top_rated?${apiKey}`;

    getTopRateMovies(topRateURL);

  }, [])

  return (
    <div>Home</div>
  )
}

export default Home