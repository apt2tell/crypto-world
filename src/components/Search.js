import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronLeft } from 'react-icons/fi';
import { BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Search = ({ input, setInput }) => (
  <>
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
        onChange={setInput}
      />
      <BsGear
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
