import React from 'react';

import Button from './Button';

const BUTTON_TEXT = "Add to Playlist";
const BUTTON_KLASS = "add-to-playlist"

export default React.createClass({

  render() {
    let result = this.props.result;
    let artist = result.artists[0].name
    let trackName = result.name

    return(
      <div>
        <li>{trackName} by {artist}</li>
        <Button
          klass={BUTTON_KLASS}
          text={BUTTON_TEXT}
          handleClick={this.props.handleClick}
        />
      </div>
    )
  }
})
