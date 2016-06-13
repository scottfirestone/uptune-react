import React from 'react';
import SearchResult from './SearchResult';

export default React.createClass({

  render() {
    let handleClick = this.props.handleClick;

    return(
      <div className="search-results">
        <ul>
          {this.props.results.map(function(result, i) {
            return <SearchResult result={result} key={i} handleClick={handleClick}   />;
          })}
        </ul>
      </div>
    )
  }
})
