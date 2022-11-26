import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FiArrowRightCircle } from 'react-icons/fi';
import { coinDisplay } from '../../redux/coins/coinsSlice';

const Coin = ({
  id, name, symbol, price, img, rank,
}) => {
  const dispatch = useDispatch();

  const displayCoin = () => {
    dispatch(coinDisplay(symbol));
  };
  return (
    <li className="coin-list">
      <Card
        className="white-card"
        id={id}
        style={{
          width: '100%', height: '160px', borderColor: '#fff', backgroundColor: '#f3f3f3',
        }}
      >
        <Card.Img
          src={img}
          alt={name}
          style={{
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '55px', margin: '50px 0 50px',
          }}
        />
        <Card.ImgOverlay
          className="details"
        >
          <Card.Title>
            <h3>{name}</h3>
          </Card.Title>
          <Card.Text>
            $
            {price}
          </Card.Text>
          <Card.Text>{symbol}</Card.Text>
          <Card.Text>{rank}</Card.Text>
          <Link
            to={`/coinsDetails/${name}`}
          >
            <FiArrowRightCircle
              className="arrow-icon"
              onClick={displayCoin}
            />
          </Link>
        </Card.ImgOverlay>

      </Card>
    </li>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Coin;
