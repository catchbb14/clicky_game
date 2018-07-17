import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import friends from "./friends.json";

var shuffle = require('shuffle-array');

class App extends Component {
  
  state = {
    friends,
    currScore: 0,
    topScore: 0,
    chosen: [],
    message: ""
  };

  shuffleList = () => {
    this.setState({ friends: shuffle(friends) })
  };

  resetGame = () => {
    this.setState({
      currScore: 0,
      topScore = this.state.currScore,
      chosen = [],
      message = "You have already chosen that one, try again!"
    });
    this.shuffleList();
  }

  render() {
    return (
      <Wrapper>
        
      </Wrapper>
    );
  }
}

export default App;
