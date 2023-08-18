import React from 'react'
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa'

const imageURL = import.meta.env.VITE_IMG;


const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='w-30 text-white mb-9 mx-1 flex flex-col justify-between bg-zinc-950 p-4'>
        <img className='max-w-full pb-4' src={imageURL + movie.poster_path} alt={movie.title}/>
        <h2 className='p-4'>{movie.title}</h2>
        <p className='p-4'>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard