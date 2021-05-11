import './App.css';
import React, { Component } from 'react';
import Welcome from './Welcome'
import Leaderboard from './Leaderboard'
import CharacterList from './CharacterList'
import Battleground from './Battleground'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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

componentDidUpdate() {
  if (this.state.battleOver === true) {
    let winner
    let loser
    if (this.state.currentPlayerCat.power > this.state.currentAICat.power){
      winner = this.state.currentPlayerCat
      loser = this.state.currentAICat
    } else {
      winner = this.state.currentAICat
      loser = this.state.currentPlayerCat
    }
    let score = (winner.power - loser.power) * 100
    fetch(`http://localhost:3000/users/${this.state.loggedInUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        scores : [...this.state.loggedInUser.scores, score]
      })
    }
     )
     .then(res => res.json())
     .then(updatedUser => 
      this.setState({
        loggedInUser : updatedUser,
        users : this.state.users.map(user => user.id === updatedUser.id ? updatedUser : user)
     }))
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
        loggedInUser: userExists
      })
    }

  }

  handleLogout = () => {
    this.setState({loggedInUser: ''})
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
          scores: [0]
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

    console.log(this.state.loggedInUser.scores)
    
    return(
      <Router >
        <div>
          {this.state.battleOver ? console.log("GAME OVER RETURN TO HOOMAN") : null}

          <Route exact path="/" render={(routerProps) => <Welcome {...routerProps} handleLogin={this.handleLogin} handleRegister={this.handleRegister} users={this.state.users} loggedInUser={this.state.loggedInUser} handleLogout={this.handleLogout}/>} />
          
          <Route exact path="/leaderboard" render={() => <Leaderboard users={this.state.users}/>} />

          {this.state.battleOver ? (
          <Route exact path="/gameover" render={() => <Leaderboard users={this.state.users}/>} />
           
           ) : null}

          <Route exact path="/characterlist" render={(routerProps) => <CharacterList routerProps={routerProps} cats={this.state.cats} assignCat={this.assignCat}/>} />

          <Route exact path="/battleground" render={(routerProps) => <Battleground {...routerProps} battleOver={this.state.battleOver} currentAICat={this.state.currentAICat} currentPlayerCat={this.state.currentPlayerCat} playerCatAttacc={this.playerCatAttacc} playerTurn={this.state.playerTurn}/>} />

        </div>
      </Router >
    )
  }
}

export default App;


