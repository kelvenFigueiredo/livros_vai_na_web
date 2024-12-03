import React from 'react';
import Home from '../pages/Home/Home';
import DonatedBooks from '../pages/DonatedBooks/DonatedBooks';
import ErrorPage from '../pages/Error/ErrorPage';
import Header from '../components/Header/Header';
import Donate from '../pages/Donate/Donate';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoute = () =>{
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DonatedBooks' element={<DonatedBooks/>}/>
        <Route path='/Donate' element={<Donate/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoute