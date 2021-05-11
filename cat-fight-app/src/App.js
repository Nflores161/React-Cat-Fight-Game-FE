import './App.css';
import React, { Component } from 'react';
import Welcome from './Welcome'
import Leaderboard from './Leaderboard'
import CharacterList from './CharacterList'
import Battleground from './Battleground'

class App extends Component {

  constructor(){
    super()
    this.state = {
      cats: [],
      currentPlayerCat: {},
      currentAICat: {},
      battleOver: false,
      playerTurn: true
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/cats')
      .then(res => res.json())
      .then(catsArray => this.setState({cats: catsArray}))
  }

  assignCat = (clickedCat) => {
    let playerID = clickedCat.id
    let computerID
    let number = Math.floor((Math.random() * 10))
    if(number===playerID) {number = playerID+1}
    computerID = number
    this.setState({
      currentPlayerCat: clickedCat,
      currentAICat: this.state.cats.find(cat => cat.id === computerID)
    })
  }

  catAttacc = () => {
    if (this.state.currentAICat.power || this.state.currentPlayerCat.power > 0 ) {
    let newAiPower = this.state.currentAICat.power - this.state.currentPlayerCat.attacc
    let newPlayerPower = this.state.currentPlayerCat.power - this.state.currentAICat.attacc
    this.setState({
      currentAICat : {...this.state.currentAICat, power : newAiPower},
      playerTurn: !this.state.playerTurn
    })
    setTimeout(() => this.setState({
      currentPlayerCat : {...this.state.currentPlayerCat, power : newPlayerPower},
      playerTurn: !this.state.playerTurn
    }), 3000)
    } else {
    this.setState({
      battleOver : true
    })
  }
  }



  render(){
    console.log(this.state.playerTurn)
    return(
      <div>
        <Welcome />
        {this.state.battleOver ? <Leaderboard/> : null}
        <CharacterList cats={this.state.cats} assignCat={this.assignCat}/>
        <Battleground currentAICat={this.state.currentAICat} currentPlayerCat={this.state.currentPlayerCat} catAttacc={this.catAttacc} playerTurn={this.state.playerTurn}/>
      </div>
    )
  }
}

export default App;


