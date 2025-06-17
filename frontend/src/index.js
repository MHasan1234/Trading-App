import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import index.css from './landing_page/signup./index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";
// import Home from "./landing_page/signup/Home";

import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
 
<Navbar />
<div className="container mt-5 pt-5">
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/login' element={<Login />} />
  {/* <Route path='/' element={<Home />} /> */}
  {/* <Route path='/dashboard' element={<Dashboard />} /> */}
  <Route path='/about' element={<AboutPage />} />
  <Route path='/product' element={<ProductPage />} />
  <Route path='/pricing' element={<PricingPage />} />
  <Route path='/support' element={<SupportPage />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
  </div>
  <Footer />
  
  </BrowserRouter>
);


