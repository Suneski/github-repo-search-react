import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      page: ''
    }
  }

  searchQueryText(evt) {
    console.log(evt.target.value)
    this.setState({
      searchTerm: evt.target.value,
      page: 1
    })
  }

  makeAjaxCall() {
    $.ajax({
      url: 'https://api.github.com/search/repositories?q=' + this.state.searchTerm + '&page=' + '1'
    })
    .done((data) => {
      console.log(data);
    });
  };


  render() {
    return (
      <div className="App">
        <nav>
          <p className='search'>SEARCH: </p>
          <input id='search-query' placeholder="github repository name" onKeyUp={(evt) => this.searchQueryText(evt)}/>
          <button className='search-button' onClick={() => this.makeAjaxCall()}>SEARCH</button>
          <p id="previous-button">previous</p>
          <p id="next-button">next</p>
          <p className="search-results"></p>
          <p className="total-results"></p>
          <p className="total-repos"></p>
        </nav>

        <ul id='repos'>

        </ul>
      </div>
    );
  }
}

export default App;
