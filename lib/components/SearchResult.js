import React from 'react';

import Track from './Track';
import Button from './Button';

const BUTTON_TEXT = "Add to Playlist";
const BUTTON_KLASS = "add-to-playlist"

export default React.createClass({
  addToPlaylist(event) {
    event.preventDefault();
    console.log("adding track to playlist", this.props.index);
    let key = this.props.index;
    this.props.addToPlaylist(key);
  },

  render() {
    return(
      <ul>
        <li>{this.props.track}</li>
        <Button
          klass={BUTTON_KLASS}
          text={BUTTON_TEXT}
          handleClick={this.addToPlaylist}
        />
      </ul>
    )
  }
})
