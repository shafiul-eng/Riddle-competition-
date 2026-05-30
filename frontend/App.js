import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Riddles from './pages/Riddles';
import Competition from './pages/Competition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/riddles" element={<Riddles />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
