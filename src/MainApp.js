import React from "react";
import { Navbar } from './Navbar';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { Restaurant } from './Restaurant';
import { Search } from './Search';
import { News } from './News';

export const MainApp = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='restaurant' element={<Restaurant />} />
        <Route path='search' element={<Search />} />
        <Route path='news' element={<News />} />
              
        <Route path='*' element={ <Navigate to='/restaurant'/>} />
      </Routes>
    </BrowserRouter>
  </>
}
