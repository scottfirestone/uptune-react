import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';

export default React.createClass({
  render() {
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              Login with Spotify to create a new playlist, or join one by navigating with the unique playlist URL.
            </Col>
            <Col sm={6} md={3}>
              Search by track, album, or artist and add tracks to the playlist.
            </Col>
            <Col sm={6} md={3}>
              Vote and listen to the songs that you want to hear! Songs are reordered based on votes.
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});
