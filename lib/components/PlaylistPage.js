import React from 'react';
import SearchBar from './SearchBar';

const INPUT_KLASS = "spotify-search"
const INPUT_PLACEHOLDER = "Search Spotify"

export default React.createClass({
  getInitialState() {
    return {
      playlistTracks : {},
      searchResults : {},
      query : ""
    }
  },

  handleSearch(e) {
    this.setState({query: e.target.value});
  },

  render() {
    return (
      <div>
        <SearchBar klass={INPUT_KLASS}
                  placeholder={INPUT_PLACEHOLDER} handleChange={this.handleSearch}
        />
      </div>
    )
  }
});
