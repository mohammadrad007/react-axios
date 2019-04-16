import React, { Component } from 'react';

import Blog from './container/Blog/Blog'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <Blog />
      </div>
    );
  }
}

export default App;
