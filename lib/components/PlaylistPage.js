import React from 'react';
import SearchBar from './SearchBar';

const INPUT_KLASS = "spotify-search"
const INPUT_PLACEHOLDER = "Search Spotify"

export default React.createClass({
  render() {
    return (
      <div>
        <SearchBar klass={INPUT_KLASS} placeholder={INPUT_PLACEHOLDER} />
      </div>
    )
  }
});
