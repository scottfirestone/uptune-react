import React from 'react';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login With Spotify</NavItem>
      </Nav>
    );
  }
});
