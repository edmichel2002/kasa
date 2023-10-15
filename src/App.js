
import React from "react";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>;
      <Route path="/about" element={<About/>}/>;
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
