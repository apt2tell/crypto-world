import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const Details = ({
  id, name, symbol, price, rank, icon,
  priceChange1h, priceChange1d, priceChange1w,
  totalSupply, marketCap, volume, websiteUrl,
}) => (
  <Card bg="primary" id={id} className="details-wrapper">
    <div className="coin-title">
      <h2>{name}</h2>
      <p>{symbol}</p>
    </div>

    <div>
      <div className="info info-img">
        <img src={icon} alt="Crypto logo" className="coinImg" />
      </div>
      <div className="coin-top">
        <Alert variant="success" className="info">
          <Alert.Heading className="head-subtitle">Category:</Alert.Heading>
          <p className="coinCategory">
            {name}
            {' '}
            Ecosystem
          </p>
        </Alert>
        <Alert variant="success" className="info">
          <Alert.Heading className="head-subtitle">CMC Rank:</Alert.Heading>
          <p>{rank}</p>
        </Alert>
        <Alert variant="success" className="info">
          <Alert.Heading className="head-subtitle">Market Price:</Alert.Heading>
          <p className="text-md-start">{price}</p>
        </Alert>
      </div>
      <div className="coin-body">
        <h3 className="coin-body-title">Price changes per time</h3>
        <Alert variant="success" className="coin-prices">
          <div className="change">
            <h3>7d:</h3>
            <p className="coinprice">{`%${priceChange1w}`}</p>
          </div>

          <div className="change">
            <h3>24h:</h3>
            <p className="coinprice">{`%${priceChange1d}`}</p>
          </div>
          <div className="change">
            <h3>1h:</h3>
            <p className="coinprice">{`%${priceChange1h}`}</p>
          </div>
        </Alert>
        <div className="coin-time">
          <h3 className="coin-body-title">Daily price tracking</h3>
          <div className="supply hl">
            <h3>High 24h:</h3>
            <p className="coinprice">{`$${priceChange1d}`}</p>
          </div>
          <div className="supply hl">
            <h3>Low 24h:</h3>
            <p className="coinprice">{`$${priceChange1h}`}</p>
          </div>
        </div>
        <Alert variant="success" className="coin-supplies">
          <div className="supply">
            <Alert.Heading>Total supply:</Alert.Heading>
            <p>{totalSupply}</p>
          </div>
          <div className="supply max-supply">
            <Alert.Heading>Max supply:</Alert.Heading>
            <p>{marketCap || 'Not max supply data'}</p>
          </div>
          <div className="supply">
            <Alert.Heading>Volume:</Alert.Heading>
            <p>{volume}</p>
          </div>
        </Alert>
        <div className="coin-social">
          <a href={websiteUrl}><img src={icon} alt="website logo" className="social-icon" /></a>
        </div>
      </div>
    </div>
  </Card>
);

Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  priceChange1h: PropTypes.number.isRequired,
  priceChange1d: PropTypes.number.isRequired,
  priceChange1w: PropTypes.number.isRequired,
  totalSupply: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default Details;
