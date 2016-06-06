import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';

export default React.createClass({
  render() {
    return(
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <p>
              Login with Spotify to create a new playlist, or join one by navigating with the unique playlist URL.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <p>
              Search by track, album, or artist and add tracks to the playlist.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <p>
              Vote and listen to the songs that you want to hear! Songs are reordered based on votes.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
});
