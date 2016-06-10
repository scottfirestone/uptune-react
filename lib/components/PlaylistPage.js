import React from 'react';
import Request from 'superagent';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import SearchResults from './SearchResults';

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
    e.preventDefault();
    let queryValue = e.target.value;
    this.searchSpotify(queryValue);
  },

  storeResults(tracks) {
    debugger;
    this.state.searchResults = tracks;
    this.setState({ searchResults : self.state.searchResults });
  },

  searchSpotify(query) {
    let self = this;
    let limit = "5"
    let type = "track"
    Request
      .get("https://api.spotify.com/v1/search")
      .query({ q : query })
      .query({ limit : limit })
      .query({ type : type })
      .set('Accept', 'application/json')
      .end(function(err, res){
        let tracks = res.body.tracks;
        self.storeResults(tracks);
        // self.state.searchResults = tracks;
        // self.setState({ searchResults : self.state.searchResults })
      });
  },

  // addToPlaylist(track) {
  //   let timestamp =(new Date()).getTime();
  //   this.state.playlistTracks['playlistTrack-' + timestamp] = track;
  //   this.setState({ playlistTracks : this.state.playlistTracks })
  // },
  //
  // renderSearchResult(key) {
  //   return <SearchResult
  //             key={key}
  //             index={key} details={this.state.searchResults[key]}
  //          />
  // },

  render() {
    return (
      <div>
        <SearchBar klass={INPUT_KLASS}
                   placeholder={INPUT_PLACEHOLDER}
                   handleChange={this.handleSearch}
        />
        <SearchResults results={this.state.searchResults} />
      </div>
    )
  }
});


// <ul className="list-of-fishes">
//   {Object.keys(this.state.searchResults).map(this.renderFish)}
// </ul>
