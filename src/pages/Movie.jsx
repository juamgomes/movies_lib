import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import {
  FaStar
}
from 'react-icons/fa'
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null) 

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  }


  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getMovie(movieUrl)
  },[]);

  return (
  <div className='w-3/4 md:w-3/4 lg:w-2/3 xl:w-3/4 flex flex-col justify-center items-center bg-zinc-950 rounded-2xl m-auto gap-10 p-6 mb-6'>
    {movie && (
      <>
        
          <div className='flex flex-col md:flex-row w-full gap-10'>
            <img className='w-full md:w-1/3 rounded-lg' src={imageURL + movie.poster_path} alt={movie.title}/>
            <div className='flex flex-col gap-2'>
              <h2 className='text-4xl font-bold'>{movie.title}</h2>
              <p className='flex gap-2 items-center'>
                  <FaStar  color='yellow'/> {movie.vote_average}
              </p>
              <p className=''>{movie.tagline}</p>
              <div>
                <h3 className='flex gap-2 items-center mb-2'>
                <BsFillFileEarmarkTextFill /> Descrição:
                </h3>
                <p className='text-justify'>{movie.overview}</p>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-48 font-semibold justify-center items-center lg:text-left'>

            <div className='mb-2 bg-indigo-800 p-4 px-8 rounded-2xl hover:bg-indigo-950'>
              <h3 className='flex gap-2 items-center'>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className='mb-2 bg-indigo-800 p-4 px-8 rounded-2xl hover:bg-indigo-950'>
              <h3 className='flex gap-2 items-center'>
                <BsGraphUp /> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className='mb-2 bg-indigo-800 p-4 px-8 rounded-2xl hover:bg-indigo-950'>
              <h3 className='flex gap-2 items-center'>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>          
        </div>
      </>
    )}
  </div>
  )
}

export default Movie