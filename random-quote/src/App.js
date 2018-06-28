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
    this.tweetQuote = this.tweetQuote.bind(this);
  }

  getQuote() {
    const wikiUrl =`https://talaikis.com/api/quotes/random/ `;
    //get data from this url
    // console.log(wikiUrl);

    // variables for both buttons
    const quote = document.getElementById('text');
    const author = document.getElementById('author');


    fetch(wikiUrl)
      .then(results => {
        return results.json();
      })
      .then(function(data) {
         console.log(data);
         quote.innerText = data.quote;
         author.innerText = data.author;

      })
      .catch(error => console.error(error));
  }

  tweetQuote() {
    // get both the quote text and author from DOM
    const quote = document.getElementById('text').innerText;
    const author = document.getElementById('author').innerText;
    let tweetUrl = '';

    const linkQuote = quote.replace(/\s/g, "+");
    // console.dir( linkQuote );
    const linkAuthor = "+" + "Author:" + author.replace(/\s/g, "+");
    tweetUrl = linkQuote + linkAuthor;
    console.log(tweetUrl);
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
          <button id="tweet-quote" onClick={this.tweetQuote}>Tweet this quote!!</button>
        </div>
      </div>
    );
  }
}

export default App;
