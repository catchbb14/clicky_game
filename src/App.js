import React, { Component } from 'react';
import PlayerCard from "./components/PlayerCard";
import NavBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import './App.css';
import friends from "./friends.json";

var shuffle = require('shuffle-array');

class App extends Component {
  
  state = {
    friends,
    currScore: 0,
    topScore: 0,
    chosen: [],
    message: "Click a player to begin the game!"
  };

  shuffleList = () => {
    this.setState({ friends: shuffle(friends) })
  };

  resetGame = (gameMessage) => {
    this.setState({
      currScore: 0,
      chosen: [],
      message: gameMessage
    });
    this.shuffleList();
  }

  handleClick = id => {
    if(this.state.chosen.includes(id)) {
      this.resetGame("Try again! You have already chosen him.");
    } else {
      this.handleCorrect();
      this.setState({ chosen: [...this.state.chosen, id] })
    }
  }

  handleCorrect = () => {
    const newScore = this.state.currScore + 1;
    this.shuffleList();

    this.setState({
      currScore: newScore,
      message: ""
    })

    if(newScore > this.state.topScore) {
      this.setState({ topScore: newScore })
    }
    if(newScore === 12) {
      this.resetGame("You won!");
    }
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          message = {this.state.message}
          currScore = {this.state.currScore}
          topScore = {this.state.topScore}
        />
        <div className = "container">
          {this.state.friends.map(friend => (
            <PlayerCard
              shuffleList = {this.shuffleList}
              resetGame = {this.resetGame}
              handleClick = {this.handleClick}
              handleCorrect = {this.handleCorrect}
              id = {friend.id}
              key = {friend.id}
              name = {friend.name}
              number = {friend.number}
              position = {friend.position}
              image = {friend.image}
            />
          ))}
        </div> 
      </Wrapper>
    );
  }
}

export default App;
