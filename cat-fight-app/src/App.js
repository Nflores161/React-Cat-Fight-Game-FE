import './App.css';
import React, { Component } from 'react';
import Welcome from './Welcome'
import Leaderboard from './Leaderboard'
import CharacterList from './CharacterList'
import Battleground from './Battleground'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class App extends Component {

  constructor(){
    super()
    this.state = {
      cats: [],
      users: [],
      currentPlayerCat: {},
      currentAICat: {},
      battleOver: false,
      playerTurn: true,
      loggedInUser: '',

    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/cats')
      .then(res => res.json())
      .then(catsArray => this.setState({cats: catsArray}))
    
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(usersArray => this.setState({users: usersArray}))
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

    getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }

  playerCatAttacc = () => {

    let playerMultiplier = this.getRandomInt(1, 5)
    if (this.state.currentAICat.power > this.state.currentPlayerCat.attacc * playerMultiplier) {
    let newAiPower = this.state.currentAICat.power - (this.state.currentPlayerCat.attacc * playerMultiplier)
    this.setState({
      currentAICat : {...this.state.currentAICat, power : newAiPower},
      playerTurn: !this.state.playerTurn
    })
    setTimeout(() => this.computerCatAttacc(), 1000)
    } else if (this.state.currentAICat.power <= this.state.currentPlayerCat.attacc * playerMultiplier){
    this.setState({
      currentAICat : {...this.state.currentAICat, power : 0},
      battleOver: true
    })
  }
  }

  computerCatAttacc = () => {
    let AIMultiplier = this.getRandomInt(1, 5)
    if (this.state.currentPlayerCat.power > this.state.currentAICat.attacc * AIMultiplier ) {
    let newPlayerPower = this.state.currentPlayerCat.power - (this.state.currentAICat.attacc * AIMultiplier)
    this.setState({
      currentPlayerCat : {...this.state.currentPlayerCat, power : newPlayerPower},
      playerTurn: !this.state.playerTurn
    })
  } else if (this.state.currentPlayerCat.power <= this.state.currentAICat.attacc * AIMultiplier){
    this.setState({
      currentPlayerCat : {...this.state.currentPlayerCat, power : 0},
      battleOver: true
    })
  }
}

// checkBattleOver = () => {
//   if (this.state.currentPlayerCat.power || this.state.currentAICat.power <= 0){
//     this.setState({
//       battleOver : true
//     })
//     alert("GAME OVER RETURN TO HOOMAN")
//   }
// }

  handleLogin = (username) => {
    let userExists = this.state.users.find(user => user.name === username)
    if (userExists === undefined){
      alert("User not found. Please register to continue.")
    } else {
      this.setState({
        loggedInUser: username
      })
    }
  }

  handleRegister = (username) => {
    let userExists = this.state.users.find(user => user.name === username)
    if (userExists !== undefined){
      alert("This username is taken. Please try again.")
    } else {
      fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: username,
          scores: []
        })
      })
        .then(res => res.json())
        .then(newUser => {
          this.setState({
            users: [...this.state.users, newUser]
          })
          alert("Registration successful. Please log in to continue.")
        })
    }
  }

  render(){

    
    
    return(
      <div>
        {this.state.battleOver ? console.log("GAME OVER RETURN TO HOOMAN") : null}
        <Welcome />
        <LoginForm handleLogin={this.handleLogin}/>
        <RegisterForm handleRegister={this.handleRegister} />
        <Leaderboard users={this.state.users}/>
        {this.state.battleOver ? <Leaderboard users={this.state.users}/> : null}
        <CharacterList cats={this.state.cats} assignCat={this.assignCat}/>
        <Battleground currentAICat={this.state.currentAICat} currentPlayerCat={this.state.currentPlayerCat} playerCatAttacc={this.playerCatAttacc} playerTurn={this.state.playerTurn}/>
      </div>
    )
  }
}

export default App;


