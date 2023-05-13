import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Plan from './components/Plan';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/5year" element={<Plan />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
