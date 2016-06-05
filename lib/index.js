import React from 'react';
import ReactDOM from 'react-dom';

import './styles/custom.css';
import Body from './components/Body';

var Root = React.createClass({
  render() {
    return (
      <div>
        <Body />
      </div>
    );
  }
});

ReactDOM.render(<Root />, document.getElementById('container'));
