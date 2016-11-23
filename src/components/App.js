import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/vendors/normalize.css';
import '../styles/vendors/skeleton.css';
import './../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <Link to='/profile'>Link to profile</Link>
        </p>
      </div>
    );
  }
}

export default App;
