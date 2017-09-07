import React, { Component } from 'react';

import DisplayEmoji from './assets/DisplayEmoji';
import { Emojis } from './assets/emojis.js';
import './App.css';

class App extends Component {
  state = {
    index: 0,
  };

  resetIndex = () => {
    this.setState({ index: 0 });
  };

  getRandomEmoji = () => {
    this.setState({
      index: Math.floor(Math.random() * 70)
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to Emoji Routlette</h2>
        <button onClick={this.getRandomEmoji}>Get new emoji</button>
        {(this.state.index < Emojis.length)
          ? <DisplayEmoji
            key={this.state.index}
            index={this.state.index}
            resetFn={this.resetIndex}
            getNewEmoji={this.getRandomEmoji}
          />
          : <div>No emoji for index: {this.state.index}</div>}

      </div>
    );
  }
}

export default App;
