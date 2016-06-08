import React from 'react';

import NavRightLoggedIn from './NavRightLoggedIn';
import NavRightVisitor from './NavRightVisitor';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

export default React.createClass({
  getInitialState() {
    return { userAuthenticated: true }
  },

  handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  },

  render() {
    let RightNav = this.state.userAuthenticated ? <NavRightLoggedIn /> : <NavRightVisitor />

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">UpTune</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      { RightNav }
    </Navbar>
    );
  }
});
