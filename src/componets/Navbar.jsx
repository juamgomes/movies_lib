import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch('');
  };

  return (
    <nav id='navbar' className='bg-black h-auto sm:h-14 p-4 sm:p-10 flex flex-col sm:flex-row items-center justify-between'>
      <h2 className='text-indigo-600 text-xl sm:text-2xl font-bold flex items-center gap-2'>
        <BiCameraMovie />
        <Link to='/'>MOVIESLib</Link>
      </h2>
      <form className='mt-4 sm:mt-0 flex flex-col sm:flex-row items-center justify-center gap-2' onSubmit={handleSubmit}>
        <input
          className='text-white p-2 rounded-lg outline-none ring-1 ring-indigo-600 bg-transparent'
          type='text'
          placeholder='Pesquise por um filme'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className='bg-indigo-600 p-2 transition rounded-lg flex items-center ring-1 ring-indigo-600 justify-center hover:bg-transparent'
          type='submit'
        >
          <BiSearchAlt2 size={25} color='white' />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
