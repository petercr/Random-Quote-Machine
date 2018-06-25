import React, { Component } from 'react';
import './index.css';
import './App.css';

constructor() {
  super();
  this.state = {
    quote: '',
    author: ''
  }
}

class App extends Component {
  render() {
    return (
      <div id="quote-box">
        <div className="top-section">
          <p id="text">Some cool quote...</p>
          <p id="author">The one who thought it up..?!</p>
        </div>
        <div className="bottom-section">
        <button id="new-quote">New Quote</button>
        <button id="tweet-quote">Tweet this quote!!</button>
        </div>
      </div>
    );
  }
}

export default App;
