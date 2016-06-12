import React from 'react';
import SearchResult from './SearchResult';

export default React.createClass({
  render() {
    return(
      <div className="search-results">
        <ul>
          {this.props.results.map(function(result) {
            return <SearchResult result={result} key={result.id} handleClick={this.props.handleClick}/>;
          })}
        </ul>
      </div>
    )
  }
})
