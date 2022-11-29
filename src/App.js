import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import './App.css';
import logo from './components/assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-menu">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="crypto">crypto world</h1>
        </div>
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/details/:name" element={<CoinDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
