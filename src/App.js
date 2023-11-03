import React from "react";
/*import './App.css';*/

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//import Banner from './components/Banner/Banner';
/*import Card from './components/Card/Card';*/
/*import Main from  './components/Main/Main';*/
/*import Slideshow './components/Slideshow/Slideshow';*/
/*import Collapse from './components/Collapse/Collapse';*/

import Home from './pages/Home/Home';
import About from './pages/About/About';
import NoPage from './pages/NoPage/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accomodation from './pages/Accomodation/Accomodation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />;
          <Route path="/home" element={<Home />} />;
          <Route path="/about" element={<About />} />;
          <Route path="/accomodation/:id" element={<Accomodation />} />;
          <Route path="*" element={<NoPage />} />;
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
