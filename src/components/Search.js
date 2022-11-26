import React, { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { BsGear } from 'react-icons/bs';

const Search = () => {
  const [search, setSearch] = useState('');

  const searchCoins = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchContainer">
      <FiChevronLeft />
      <input
        type="text"
        placeholder="Search Coins"
        value={search}
        onChange={searchCoins}
      />
      <BsGear />
    </div>
  );
};

export default Search;
