import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notification hasUnread={true} />
      </div>
    );
  }
}

export default App;
