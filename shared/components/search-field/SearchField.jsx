import React from 'react';

import './search-field.scss';

const SearchField = () => (
  <div className="search-field__wrapper">
    <input
      className="search-field"
      id="search-field"
      name="searchField"
      placeholder="Search"
    />
  </div>
);

export default SearchField;
