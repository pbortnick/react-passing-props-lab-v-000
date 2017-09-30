import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) =>
  <div className="fruit-basket">
    <Filter handleChange={props.handleFilterChange} />
    <FilteredFruitList
      filter={props.filter} />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: null,
  currentFilter: null,
  updateFilterCallback: null
};

export default FruitBasket;
