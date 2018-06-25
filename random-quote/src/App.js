import React, { Component } from "react";
import "./index.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Cool Stuff",
      author: "Me"
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    const url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    //get data from this url
    fetch(url)
      .then(response => response.json())
      .then(function(data) {
        console.table(data);
      })
      .catch(error => console.error(error));
    // $.getJSON(url, function(data) {
    //     randomVar = data.quoteText;
    //     //passing value to corresponding div
    //     $("#quotes").hide().fadeIn(1000).html('"' + data.quoteText + '"');
    //     $("#author").hide().fadeIn(500).html("- " + data.quoteAuthor);
    //     randomVar = data.quoteText + '  -' + data.quoteAuthor;
    // });
  }
  render() {
    return (
      <div id="quote-box" onLoad="this.state.getQuote">
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
