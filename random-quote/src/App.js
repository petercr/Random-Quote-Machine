import React, { Component } from "react";
import "./index.css";
import "./App.css";

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Cool Stuff",
      author: "Me"
    };
    this.getQuote = this.getQuote.bind(this);
    this.testCase = this.testCase.bind(this);
  }

  getQuote() {
    const wikiUrl =
      `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?`;
    //get data from this url
    // console.log(wikiUrl);

    let testData;

    fetch(wikiUrl, {mode: 'no-cors'})
      .then((results) => {
        return results.json();
      })
      .then(function(data) {
         console.log(data);
         testData = data;
      })
      .catch(error => console.error(error));
      console.table(testData);
  }

  testCase() {
    console.log("hello everybody");
  }


  render() {
    return (
      <div id="quote-box" >
        <div className="top-section">
          <p id="text">Some cool quote...</p>
          <p id="author">The one who thought it up..?!</p>
        </div>
        <div className="bottom-section">
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
          <button id="tweet-quote">Tweet this quote!!</button>
        </div>
      </div>
    );
  }
}

export default App;
