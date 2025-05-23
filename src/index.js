import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Home from './landing_page/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);