import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const navbar = () => {
  return (
    <nav id='navbar' className='h-14 p-10 flex items-center justify-between'>
        <h2 className='text-indigo-600 text-2xl font-bold flex items-center gap-2'>
            <BiCameraMovie />
            <Link to="/">MOVIESLib</Link>
        </h2>
          <form className='flex items-center gap-2'>
            <input className='text-white py-2 rounded-lg outline-none ring-1 ring-indigo-600 ed-lg px-2 bg-transparent' type='text' placeholder='Pesquise por um filme' />
            <button type='submit'><BiSearchAlt2 size={25} color='white'/></button>
            
          </form>
    </nav>
  )
}

export default navbar