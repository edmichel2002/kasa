import React from "react";
/*import './App.css';*/

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import Banner from './components/Banner/Banner';
/*import Card from './components/Card/Card';*/
/*import Main from  './components/Main/Main';*/
/*import Slideshow './components/Slideshow/Slideshow';*/
/*import Collapse from './components/Collapse/Collapse';*/

import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
        <div className="App">
          <BrowserRouter>
          <Header />
            <Routes>
              <Route index element={<Home/>}/>;
              <Route path="/home" element={<Home/>}/>;
              <Route path="/about" element={<About/>}/>;
              <Route path="*" element={<NoPage />}/>;
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
  );
}

export default App;
