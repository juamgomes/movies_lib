import React from 'react'
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 text-white mb-9 px-2'>
      <div className='flex flex-col justify-between rounded-lg bg-zinc-950 p-4 h-full'>
        
        {showLink && (
          <Link to={`/movie/${movie.id}`} >
            <img className='max-w-full' src={imageURL + movie.poster_path} alt={movie.title} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default MovieCard;
