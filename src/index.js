import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import RouteResources from './Components/Navbar/Routes';
import { BrowserRouter, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Navbar/>
    <RouteResources/>
    </HashRouter>
    {/* <Home></Home> */}
  </React.StrictMode>
);
