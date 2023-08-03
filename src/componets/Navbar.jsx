import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const navbar = () => {
  return (
    <nav id='navbar'>
        <h2 className='text-indigo-600 text-2xl font-bold flex items-center gap-2'>
            <BiCameraMovie />
            <Link to="/">MOVIESLib</Link>
        </h2>
          <form>
            <input type='text' placeholder='Pesquise por um filme' />
            <button type='submit'></button>
            <BiSearchAlt2 />
          </form>
    </nav>
  )
}

export default navbar