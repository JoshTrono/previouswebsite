import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Plan from './components/Plan';

function App() {
  return (
    <HashRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/5year" element={<Plan />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
