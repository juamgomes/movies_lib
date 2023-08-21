import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES 
import App from "./App";
import Movie from './pages/Movie';
import Home from './pages/Home';
import Search from './pages/Search';

import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          
          <Route path='/' element={<Home />}/> 
          <Route path='movie/:id' element={<Movie />}/>
          <Route path='search' element={<Search/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
