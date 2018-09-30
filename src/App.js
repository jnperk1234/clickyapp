import React, { Component } from 'react';
import Navbar from './components/Navbar';
import FooterBar from './components/FooterBar';
import GameGrid from './components/GameGrid';
import Pirates from './utils/Pirates';

class App extends Component {

  state = {
    gameActive: false,
    score: 0,
    topScore: 0,
    result: "Click Any Pirate To Begin!",
    pirates: Pirates
  }

  // Use Fisher-Yates Shuffle to shuffle the pirates array in this.state
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there are remaining elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
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
    console.log("All Pirates reset");
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

  clickOp= event => {

    let pirateIndex = this.findPirateIndex(event.target.id);
    this.setGameActive(true);

    if (this.state.pirates[pirateIndex].clicked === true) {
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
      this.setPirateClicked(pirateIndex, true);
      console.log(this.state);
    }

    this.shufflePirates();
    console.log(this.state.pirates);
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} gameActive={this.state.gameActive} result={this.state.result}></Navbar>
        <GameGrid pirates={this.state.pirates} clickPirate={this.clickPirate}></GameGrid>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default App;
