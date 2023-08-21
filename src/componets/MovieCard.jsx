import React from 'react'
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG;


const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='w-30 text-white mb-9 mx-1 flex flex-col justify-between rounded-lg bg-zinc-950 p-4'>
        <img className='max-w-full pb-4' src={imageURL + movie.poster_path} alt={movie.title}/>
        <h2 className='p-4 font-semibold'>{movie.title}</h2>
        <p className='p-4 flex gap-2 items-center'>
            <FaStar  color='yellow'/> {movie.vote_average}
        </p>
        {showLink && <Link className='bg-indigo-800 rounded-md py-4 hover:bg-transparent ring-2 ring-indigo-800 transition text-center font-semibold' to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard