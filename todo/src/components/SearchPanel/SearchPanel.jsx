import React from 'react';

import './SearchPanel.css';

const SearchPanel = ({searchFilter}) => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="Type to search..." 
              onChange={(e) => searchFilter(e.target.value)}/>
  );
};

export default SearchPanel;
