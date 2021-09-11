import React from 'react';

import './ItemStatusFilter.css';

const ItemStatusFilter = ({filter, filterBtnArr, setFilterBtnArray, currentFilter}) => {

  const chooseFilter = () => {
    filter(currentFilter.label)
    filterBtnArr.map(x => x.className = "btn btn-outline-secondary")
    filterBtnArr[currentFilter.id].className = 'btn btn-info';
    setFilterBtnArray(filterBtnArr)
    }
  return (
      <button type="button"
              className={currentFilter.className}
              onClick={(e) => chooseFilter(e)}>{currentFilter.label}</button>
  );
};

export default ItemStatusFilter;
