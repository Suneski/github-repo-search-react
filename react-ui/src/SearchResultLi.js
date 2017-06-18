import React from 'react';

class SearchResultLi extends React.Component {

  render() {

    return(
      <li className="list-item">
        <a
          href={this.props.userNameHref}
          target='_blank'
          rel="noopener noreferrer">
          <img
            src={this.props.avatar_url}
            alt='user_avatar'/>
        </a>
        <a
          href={this.props.userNameHref}
          target='_blank'
          rel="noopener noreferrer"
          className='bold'>
            {this.props.repo_name}
        </a>
        <a
          href={this.props.userNameHref}
          target='_blank'
          rel="noopener noreferrer"
          className='bold'>
            {this.props.username}
        </a>
      </li>
    )
  }
}

export default SearchResultLi;
