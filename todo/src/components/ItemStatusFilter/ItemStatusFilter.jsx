import React from 'react';

import './ItemStatusFilter.css';

const ItemStatusFilter = ({filter}) => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info"
              onClick={() => filter("All")}>All</button>
      <button type="button"
              className="btn btn-outline-secondary"
              onClick={() => filter("Active")}>Active</button>
      <button type="button"
              className="btn btn-outline-secondary"
              onClick={() => filter("Done")}>Done</button>
    </div>
  );
};

export default ItemStatusFilter;
