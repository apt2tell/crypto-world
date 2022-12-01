import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
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
        bg="primary"
        className="white-card"
        id={id}
        style={{
          width: '100%', height: '160px', borderColor: '#fff', bg: 'rgb(251,80,146)!',
        }}
      >
        <Card.Img
          src={img}
          alt={name}
          style={{
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', width: '55px', margin: '50px 0 50px',
          }}
        />
        <Card.ImgOverlay>
          <div className="top">
            <span className="rank">
              rank
              {rank}
            </span>
            <span>
              <Link
                to={`/details/${name}`}
              >
                <FaArrowRight
                  className="arrow-icon"
                  onClick={displayCoin}
                  style={{
                    color: 'white', border: '1.5px solid white', borderRadius: '50%', padding: '3px', fontSize: '25px',
                  }}
                />
              </Link>
            </span>
          </div>
          <div className="details">
            <Card.Title className="name">
              {name}
            </Card.Title>
            <div className="floater">
              <p className="symbol">{symbol}</p>
              <p className="price">
                $
                {price}
              </p>
            </div>
          </div>
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
