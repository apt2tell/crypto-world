import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoinsAPI } from '../redux/coins/coinsSlice';
import Coin from './Coin/Coin';

const Coins = () => {
  const coins = useSelector((state) => state.coins);
  console.log(coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinsAPI());
  }, [dispatch]);

  return (
    <>
      <ul className="coins-card">
        {coins.coins.map((coin) => (
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
    </>
  );
};

export default Coins;
