import React from 'react';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

export default React.createClass({
  render() {
    return (
      <Nav pullRight>
        <NavItem eventKey={1} href="#">New Playlist</NavItem>
        <NavDropdown eventKey={3} title="mingus_amongus" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>My Settings</MenuItem>
          <MenuItem eventKey={3.2}>My Playlists</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Log Out</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
});
