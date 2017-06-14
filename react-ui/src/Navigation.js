import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <p className='search'>SEARCH: </p>
        <input id='search-query' placeholder="github repository name"/>
        <p id="previous-button">previous</p>
        <p id="next-button">next</p>
        <p className="search-results"></p>
        <p className="total-results"></p>
        <p className="total-repos"></p>
      </nav>
    );
  }
}

export default Navigation;
