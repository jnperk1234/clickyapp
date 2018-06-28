import React, { Component } from 'react';
import Navbar from './components/NavBar';
import FooterBar from './components/FooterBar';
import GameGrid from './components/GameGrid';
import OnePiece from './utilis/OnePiece';

class App extends Component {

  state = {
    gameActive: false,
    score: 0,
    topScore: 0,
    result: "Click Any Pirate To Begin!",
    pirates: OnePiece
  }


  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  shufflePirates() {
    let tempPirateArray = this.state.pirates;
    this.setState({
      pirates: this.shuffle(tempPirateArray)
    });
  }

  findPirateIndex(id) {
    for (let i = 0; i < this.state.pirates.length; i++) {
      if (parseInt(id, 0) === parseInt(this.state.pirates[i].id, 0)) {
        return i;
      }
    }
  }

  setPirateClicked(index, value) {
    let tempPirateArray = this.state.pirates;
    tempPirateArray[index].clicked = value;
    console.log("Set pirate at index " + index + " clicked to true");
    this.shufflePirates();
  }

  resetPirates() {
    let tempPirateArray = this.state.pirates;
    tempPirateArray.forEach(function(pirate) {
      pirate.clicked = false;
    });
    this.shufflePirates();
    console.log("All pirates reset");
  }

  increaseScore() {
    let tempScore = this.state.score;
    let tempTopScore = this.state.topScore;
    tempScore += 1;

    (tempScore >= tempTopScore) ? this.setState({score: tempScore, topScore: tempScore}) : this.setState({ score: tempScore});
  }

  endGame() {
    this.setState({
      score: 0
    });
    this.resetPirates();
  }

  setGameActive(toggle) {
    this.setState({
      gameActive: toggle
    });
  }

  clickPirate = event => {
    
    let PirateIndex = this.findPirateIndex(event.target.id);
    this.setGameActive(true);

    if (this.state.Pirates[PirateIndex].clicked === true) {
      this.setState({
        result: "You guessed Incorrectly!"
      });
      this.endGame();
    }
    else {
      this.increaseScore();
      this.setState({
        result: String("You guessed Correctly!")
      });
      this.setPiratesClicked(PirateIndex, true);
      console.log(this.state);
    }

    this.shufflePirates();
    console.log(this.state.Pirates);
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} gameActive={this.state.gameActive} result={this.state.result}></Navbar>
        <GameGrid Pirates={this.state.Pirates} clickPirate={this.clickPirate}></GameGrid>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default App;
