import React from 'react';
import Request from 'superagent';

import SearchBar from './SearchBar';
import SearchResult from 'SearchResult';

const INPUT_KLASS = "spotify-search"
const INPUT_PLACEHOLDER = "Search Spotify"

export default React.createClass({
  getInitialState() {
    return {
      playlistTracks : {},
      searchResults : [],
    }
  },

  handleSearch(e) {
    let queryValue = e.target.value;
    this.searchSpotify(queryValue);
  },

  searchSpotify(query) {
    let self = this;
    Request
      .get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`)
      .set('Accept', 'application/json')
      .end(function(err, res){
        let tracks = JSON.stringify(res.body.tracks.items)
        console.log(tracks)
        self.setState({ searchResults : tracks })
      });
  },

  render() {
    return (
      <div>
        <SearchBar klass={INPUT_KLASS}
                   placeholder={INPUT_PLACEHOLDER}
                   handleChange={this.handleSearch}
        />
      </div>
    )
  }
});
