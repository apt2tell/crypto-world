import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import './App.css';
import Search from './components/Search';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search />
        <NavBar />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/Details/:name" element={<CoinDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
