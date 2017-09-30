import React, { Component } from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket>
        <Filter />
        <FilteredFruitList />
      </FruitBasket>
    )
  }
}

export default App;
