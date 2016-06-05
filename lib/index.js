import React from 'react';
import ReactDOM from 'react-dom';

import './styles/custom.css';
import Body from './components/Body';
import Navbar from './components/Navbar';

var Root = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <Body />
      </div>
    );
  }
});

ReactDOM.render(<Root />, document.getElementById('container'));
