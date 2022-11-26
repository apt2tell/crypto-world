import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiChevronLeft } from 'react-icons/fi';
import { BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getCoinsAPI } from '../redux/coins/coinsSlice';
import Coin from './Coin/Coin';
import '../App.css';

const Coins = () => {
  const [input, setInput] = useState('');
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinsAPI());
  }, [dispatch]);

  const filterCoins = coins.filter((coin) => (
    coin.name.toLowerCase().includes(input.toLocaleLowerCase())
  ));

  const searchCoins = (e) => setInput(e.target.value);

  return (
    <>
      <div>
        <nav className="search-wrapper">
          <Link
            className="home-link"
            to="/"
          >
            <FiChevronLeft />
          </Link>
          <input
            type="text"
            placeholder="Search Coins"
            value={input}
            onChange={searchCoins}
          />
          <BsGear
            className="gear-link"
          />
        </nav>
        <ul className="coins-card">
          {filterCoins.map((coin) => (
            <Coin
              key={coin.id}
              img={coin.icon}
              id={coin.id}
              symbol={coin.symbol}
              rank={coin.rank}
              name={coin.name}
              price={coin.price}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Coins;
