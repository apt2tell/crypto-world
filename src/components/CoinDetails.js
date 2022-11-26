import React from 'react';
import { useSelector } from 'react-redux';
import Details from './Details';

const CoinDetails = () => {
  const coinsDetails = useSelector((state) => state.coins);

  return (
    <>
      {coinsDetails.filter((coin) => coin.display === true).map((coin) => (
        <Details
          key={coin.id}
          id={coin.id}
          symbol={coin.symbol}
          rank={coin.rank}
          name={coin.name}
          price={coin.price}
        />
      ))}
    </>
  );
};

export default CoinDetails;
