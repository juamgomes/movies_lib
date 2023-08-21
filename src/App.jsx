import { Outlet } from 'react-router-dom'
import Navbar from './componets/Navbar';

import './App.css';

function App() {
  return (
      <div className='App'>
        <Navbar />
        <div className='text-white'>
          <Outlet/>
        </div>
      </div>
  )
}

export default App
