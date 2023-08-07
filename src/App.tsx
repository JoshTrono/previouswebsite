import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Plan from './components/Plan';
import Hobbies from './components/Hobbies';
import './index.css';

function App() {
  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/5year" element={<Plan />} />
        <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
        <script type="module" src="./styles/js/main.js"></script>
    </BrowserRouter>


  );
}

export default App;
