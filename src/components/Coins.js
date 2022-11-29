import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinsAPI } from '../redux/coins/coinsSlice';
import Coin from './Coin/Coin';
import Search from './Search';
import '../App.css';

const Coins = () => {
  const [input, setInput] = useState('');
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinsAPI());
  }, [dispatch]);

  const searchCoins = (e) => setInput(e.target.value);

  const filterCoins = coins.filter((coin) => (
    coin.name.toLowerCase().includes(input.toLowerCase())
  ));

  return (
    <>
      <Search
        input={input}
        setInput={searchCoins}
      />
      <div>
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
