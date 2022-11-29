import React from 'react';
import { useSelector } from 'react-redux';
import Details from './Details';
import Search from './Search';

const CoinDetails = () => {
  const coins = useSelector((state) => state.coins);

  return (
    <>
      <Search />
      {coins.filter((coin) => coin.display === true).map((coin) => (
        <Details
          key={coin.id}
          id={coin.id}
          symbol={coin.symbol}
          rank={coin.rank}
          name={coin.name}
          price={coin.price}
          icon={coin.icon}
          priceChange1h={coin.priceChange1h}
          priceChange1d={coin.priceChange1d}
          priceChange1w={coin.priceChange1w}
          totalSupply={coin.totalSupply}
          marketCap={coin.marketCap}
          volume={coin.volume}
          websiteUrl={coin.websiteUrl}
        />
      ))}
    </>
  );
};

export default CoinDetails;
