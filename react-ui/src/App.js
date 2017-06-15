import React, { Component } from 'react';
import $ from 'jquery';

import SearchResultLi from './SearchResultLi.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      page: '',
      searchResults: [],
      previousButton: 'previous-button-invisible',
      nextButton: 'next-button-invisible',
    }
  }

  searchQueryText(evt) {
    this.setState({
      searchTerm: evt.target.value,
      page: 1
    })
  }

  makeAjaxCall() {
    $.ajax({
      url: 'https://api.github.com/search/repositories?q=' + this.state.searchTerm + '&page=' + this.state.page
    })
    .done((data) => {
      console.log(data);
      this.setState({
        totalCount: data.total_count,
        pageCount: Math.ceil(data.total_count / 30),
        searchResults: data.items,
      })
      if (this.state.pageCount > 1) {
        this.setState({
          previousButton: 'previous-button-visible',
          nextButton: 'next-button-visible'
        })
      }
    });
  };

  previousButton() {
    if (this.state.page > 1)
      this.setState({
        page: this.state.page - 1
      })
  }


  render() {
    let results = this.state.searchResults.map((x) => <SearchResultLi
      key={x.id}
      login={x.login}
      html_url={x.html_url}
      avatar_url={x.owner.avatar_url}
      repo_name={x.name}
      username={x.owner.login}
      repoNameHref={'https://github.com/' + x.full_name}
      userNameHref={'https://github.com/' + x.owner.login}
    />);

    return (
      <div className="App">
        <nav>
          <p className='search'>SEARCH: </p>
          <input id='search-query' placeholder="github repository name" onKeyUp={(evt) => this.searchQueryText(evt)}/>
          <button className='search-button' onClick={() => this.makeAjaxCall()}>SEARCH</button>
          <p id={this.state.previousButton} onClick={() => this.previousButton()}>previous</p>
          <p id="next-button">next</p>
          <p className="search-results"></p>
          <p className="total-results"></p>
          <p className="total-repos"></p>
        </nav>

        <ul id='repos'>
          {results}
        </ul>
      </div>
    );
  }
}

export default App;
