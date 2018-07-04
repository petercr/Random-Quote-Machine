import React, { Component } from "react";
import "./index.css";
import "./App.css";

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Cool Stuff",
      author: "Me",
      background: "bg1" 
    };
    this.getQuote = this.getQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
    this.changeBg = this.changeBg.bind(this);
  }

  getQuote() {
    const wikiUrl =`https://talaikis.com/api/quotes/random/ `;

    fetch(wikiUrl)
      .then(results => {
        return results.json();
      })
      .then((data) => {
        // eslint-disable-next-line
         console.log(data);

        // update the state with return API data
        this.setState({quote: data.quote});
        this.setState({author: data.author});
        

      })
      .catch(error => console.error(error));
    this.changeBg();

  }

  tweetQuote(e) {
    e.preventDefault();
    // get both the quote text and author from DOM
    const quote = this.state.quote;
    const author = this.state.author;
    let tweetUrl = '';

    const linkQuote = quote.replace(/\s/g, "+");
    const linkAuthor = "+Author:+" + author.replace(/\s/g, "+");
    tweetUrl = linkQuote + linkAuthor;
    console.log(tweetUrl);
    window.open(`https://twitter.com/intent/tweet?text=${tweetUrl}`);
  }

  changeBg() {
    const background = this.state.background;
    console.log(background);
    if (background === "bg1"){
      this.setState({background: "bg2"});
    }
    else if (background === "bg2") {
      this.setState({background: "bg3"});
    }
    else if (background === "bg3") {
      this.setState({background: "bg4"});
    }
    else {
      this.setState({background: "bg1"});
    }
  }

  componentDidMount() {
    this.getQuote();
  }



  render() {
    return (
      <div id="quote-box" className={this.state.background} >
        <div className="top-section">
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
        </div>
        <div className="bottom-section">
          <a id="new-quote" onClick={this.getQuote}>New Quote</a>
          <a id="tweet-quote" href="twitter.com/intent/tweet" onClick={this.tweetQuote} className="twitter-share-button" >Tweet this quote!</a>
        </div>
      </div>
    );
  }
}

export default App;
