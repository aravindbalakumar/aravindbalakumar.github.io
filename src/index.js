import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import RouteResources from './Components/Navbar/Routes';
import { BrowserRouter, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Navbar/>
    <RouteResources/>
    <footer id="footerspec">&copy; 2024 Aravind balakumar. All rights reserved.</footer>
    </HashRouter>
    {/* <Home></Home> */}
  </React.StrictMode>
);
