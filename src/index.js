import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Home from './landing_page/home/HomePage';
import PageNotFound from './landing_page/PageNotFound';
import LNCTUPage from './landing_page/LNCT-University/LNCTUPage';
import AboutUs from './landing_page/About/AboutUs';
import LNCTPage from './landing_page/LNCT/LNCTPage';
import LNCTSPage from './landing_page/LNCT&S/LNCTSPage';
import LNCTEPage from './landing_page/LNCTE/LNCTEPage';
import LNCTMBAPage from './landing_page/LNCTMBA/LNCTMBAPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/LNCTU' element={<LNCTUPage />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/LNCT' element={<LNCTPage />} />
      <Route path='/LNCTS' element={<LNCTSPage />} />
      <Route path='/LNCTE' element={<LNCTEPage />} />
      <Route path='/LNCTMBA' element={<LNCTMBAPage />} />
    </Routes>
  <Footer />
  </BrowserRouter>
);