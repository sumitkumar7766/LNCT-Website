import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Home from './landing_page/home/HomePage';
import PageNotFound from './landing_page/PageNotFound';
import LNCTUPage from './landing_page/LNCT-University/LNCTUPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/LNCTU' element={<LNCTUPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  <Footer />
  </BrowserRouter>
);