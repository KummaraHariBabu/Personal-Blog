// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Profile from "./Components/Profile";
import Header from './Components/Header';
import Section1 from "./Components/Section1";
import Contact from './Components/Contact';
import Qualification from './Components/Qualification';
import About from './Components/About';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Route Definitions */}
        <Header/>
        <Routes>
          <Route path='/' element={<Section1/>}/>
          <Route path='/profiles' element={<Profile />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/qualification' element={<Qualification/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
