import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Search = ({ input, setInput }) => (
  <>
    <nav className="search-wrapper">
      <Link
        className="home-link"
        to="/"
      >
        <FaArrowLeft />
      </Link>
      <input
        type="text"
        placeholder="Search Coins"
        value={input}
        onChange={setInput}
      />
      <GoGear
        className="gear-link"
      />
    </nav>
  </>
);

Search.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};

export default Search;
