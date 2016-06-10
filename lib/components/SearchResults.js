import React from 'react';

export default ({results}) => {
  if (results.length === 0) {
    return <h1>No results yet!</h1>;
  } else {
    return (
      <ul>{results.map((artist, track) =>
        <li>
          {artist}
        </li>
      )}</ul>
    )
  }
};
