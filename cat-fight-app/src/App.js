import './App.css';
import React, { Component } from 'react';
import Welcome from './Welcome'
import Leaderboard from './Leaderboard'
import CharacterList from './CharacterList'
import Battleground from './Battleground'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import GameOver from './GameOver'
import ThemeSong from './Cat-Scratcher-Main.mp3'
import BattleSong from './Cat-Battle-Song.mp3'
import Gateway from './Gateway'
import CatHiss from './Angry-cat-hissing-sound.mp3'
import CatClawAudio from './Angry-cat-Squeel.wav'
import CatBiteAudio from './Angry-cat-Bite.mp3'
import SuperAttaccSound from './SuperAttaccSound.mp3'
import SuperAttaccThunderClap from './SuperAttaccThunderClap.mp3'

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
      winner: {},
      superAttaccUsed: false,
      battleStarted: false,
      superAttaccOn: false
    }
    this.themeSong = new Audio(ThemeSong);
    this.themeSong.addEventListener("ended", () => {
      this.themeSong.play()
    })
    this.battleSong = new Audio(BattleSong);
    this.battleSong.addEventListener("ended", () => {
      this.battleSong.play()
    })
    this.catHiss= new Audio(CatHiss);

    this.catClawMp3 = new Audio(CatClawAudio);

    this.catBiteMp3 = new Audio(CatBiteAudio);

    this.superAttaccSound = new Audio(SuperAttaccSound);
    
    this.superAttaccThunder = new Audio(SuperAttaccThunderClap);
  }

  playTheme = () => {
    if (this.state.cats.length > 0) {
    return this.themeSong.play()
    }
  }

  playBattleSong = () => {
    if (this.state.cats.length > 0){
      return this.battleSong.play()
    }
  }

  

  // initial GET request for cats array and users array
  // used to set state
  componentDidMount(){
    fetch('https://evening-springs-94568.herokuapp.com/cats')
      .then(res => res.json())
      .then(catsArray => this.setState({cats: catsArray}))
    
    fetch('https://evening-springs-94568.herokuapp.com/users')
      .then(res => res.json())
      .then(usersArray => this.setState({users: usersArray}))
      this.playTheme()
  }

  // assigns cat as user's warrior when "Choose Your Warrior" button
  // is clicked in CharacterList
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
  
  // generates random integer between 1 and 5 to be used as attack multiplier during battle
    getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }

  // invoked via "Attacc" button
  // subtracts player cat's attacc strength from opponent cat's power
  // then calls reverse function in a setTimeout for computer's turn 
  // toggles playerTurn state between true and false to determine turns
  // sets battleOver state to true when one player is defeated
  playerCatAttacc = () => {

    let playerMultiplier = this.getRandomInt(1, 5)
    if (this.state.currentAICat.power > this.state.currentPlayerCat.attacc * playerMultiplier) {
    let newAiPower = this.state.currentAICat.power - (this.state.currentPlayerCat.attacc * playerMultiplier)
    this.setState({
      currentAICat : {...this.state.currentAICat, power : newAiPower},
      playerTurn: !this.state.playerTurn,
      battleStarted: true
    })
    setTimeout(() => this.computerCatAttacc(), 3000)
    } else if (this.state.currentAICat.power <= this.state.currentPlayerCat.attacc * playerMultiplier){
    this.setState({
      currentAICat : {...this.state.currentAICat, power : 0},
      battleOver: true
    })
  }
  }

  // Defensive move that adds to Player's power but does no damage to opponent
  hissDefense = () => {
    let playerMultiplier = this.getRandomInt(1, 5)
    let playerReplenish = playerMultiplier * this.state.currentPlayerCat.attacc
    let newPlayerPower = parseInt(this.state.currentPlayerCat.power, 10) + parseInt(playerReplenish, 10)
    this.setState({
      currentPlayerCat: {...this.state.currentPlayerCat, power: newPlayerPower},
      playerTurn: !this.state.playerTurn,
      battleStarted: true
    })
    setTimeout(() => this.computerCatAttacc(), 3000)
}



  // similar function for computer's turn (see above notes)
  computerCatAttacc = () => {
    let AIMultiplier = this.getRandomInt(1, 5)
    if (this.state.currentPlayerCat.power > this.state.currentAICat.attacc * AIMultiplier ) {
    let newPlayerPower = this.state.currentPlayerCat.power - (this.state.currentAICat.attacc * AIMultiplier)
    this.setState({
      superAttaccOn: false,
      currentPlayerCat : {...this.state.currentPlayerCat, power : newPlayerPower},
      playerTurn: !this.state.playerTurn
    })
  } else if (this.state.currentPlayerCat.power <= this.state.currentAICat.attacc * AIMultiplier){
    this.setState({
      superAttaccOn: false,
      currentPlayerCat : {...this.state.currentPlayerCat, power : 0},
      battleOver: true
    })
  }
}

// Creates a Super Attacc with higher damages that also inflicts damage on users power
superAttacc = () => {
    let newPlayerDamage = this.getRandomInt(1,4) * 5
    console.log(newPlayerDamage)
    if (this.state.currentAICat.power > 20) {  
    let newAiPower = this.state.currentAICat.power - 20
    this.setState({
      superAttaccOn: true,
      superAttaccUsed: true,
      battleStarted: true,
      currentPlayerCat : {...this.state.currentPlayerCat, power : this.state.currentPlayerCat.power - newPlayerDamage},
      currentAICat : {...this.state.currentAICat, power : newAiPower},
      playerTurn: !this.state.playerTurn
    })
    setTimeout(() => this.computerCatAttacc(), 3000)
    } else if (this.state.currentAICat.power <= 20){
    this.setState({
      superAttaccOn: true,
      superAttaccUsed: true,
      battleStarted: true,
      currentPlayerCat : {...this.state.currentPlayerCat, power : this.state.currentPlayerCat.power - newPlayerDamage},
      currentAICat : {...this.state.currentAICat, power : 0},
      battleOver: true
    })
  }
}

// checks if battle is over (via battleOver state)
// if user wins, sends PATCH request with updated scores array and updates users state
// updates battleOver, loggedInUser, and winner state
componentDidUpdate() {
  let winner
  let loser
  if (this.state.battleOver === true && this.state.currentPlayerCat.power > this.state.currentAICat.power) {
    
      winner = this.state.currentPlayerCat
      loser = this.state.currentAICat
      let score = (winner.power - loser.power) * 100
      fetch(`https://evening-springs-94568.herokuapp.com/users/${this.state.loggedInUser.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          scores : [...this.state.loggedInUser.scores, score],
        })
      }
       )
       .then(res => res.json())
       .then(updatedUser => 
        this.setState({
          loggedInUser : updatedUser,
          users : this.state.users.map(user => user.id === updatedUser.id ? updatedUser : user),
          battleOver: false,
          winner: updatedUser
       }))
    } else if (this.state.battleOver === true && this.state.currentAICat.power > this.state.currentPlayerCat.power) {
        winner = this.state.currentAICat
        loser = this.state.currentPlayerCat
        let score = (winner.power - loser.power) * 100
        this.computerWins(score)
  }
}

// helper function to set winner state if computer wins
  computerWins = (score) => {
    this.setState({
      battleOver: false,
      winner: {
        name: "Computer",
        score: score
    }})
  }

  // sets loggedInUser state when user logs in
  // checks that user exists in backend
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

  // clears out loggedInUser state
  handleLogout = () => {
    this.setState({loggedInUser: ''})
  }

  // checks if username exists in database
  // if not, registers new user via POST request to backend
  handleRegister = (username) => {
    let userExists = this.state.users.find(user => user.name === username)
    if (userExists !== undefined){
      alert("This username is taken. Please try again.")
    } else if (username.length <= 0) {
      alert("Please enter valid username.")
    } else if (userExists === undefined && username.length > 0) {
      fetch('https://evening-springs-94568.herokuapp.com/users', {
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

  // resets game-related state so currently-logged-in player can play a new game
  handlePlayAgain = () => {
    this.setState({
      currentPlayerCat: {},
      currentAICat: {},
      battleOver: false,
      playerTurn: true,
      winner: {},
      superAttaccUsed: false,
      battleStarted: false,
      superAttaccOn: false
    })
  }

  submitWarrior = (warriorObj) => {
    fetch('https://evening-springs-94568.herokuapp.com/cats', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(warriorObj)
    })
      .then(res => res.json())
      .then(newlyCreatedWarrior => this.setState({
        cats: [...this.state.cats, newlyCreatedWarrior]
      }))
  }

  render(){
    console.log(this.state.currentPlayerCat.power)
    console.log(this.state.currentPlayerCat.attacc)
    return(
      <Router >
        <div>
          {this.state.battleOver ? console.log("GAME OVER RETURN TO HOOMAN") : null}

          <Route exact path="/" render={(routerProps) => <Gateway {...routerProps} playTheme={this.playTheme} />} />
          
          <Route exact path="/home" render={(routerProps) => <Welcome {...routerProps} handleLogin={this.handleLogin} handleRegister={this.handleRegister} users={this.state.users} loggedInUser={this.state.loggedInUser} handleLogout={this.handleLogout}/>} />
          
          <Route exact path="/leaderboard" render={() => <Leaderboard users={this.state.users} loggedInUser={this.state.loggedInUser}/>}/>

          <Route exact path="/gameover" render={(routerProps) => <GameOver {...routerProps} winner={this.state.winner} handlePlayAgain={this.handlePlayAgain} users={this.state.users} loggedInUser={this.state.loggedInUser} battleSong={this.battleSong} playTheme={this.playTheme}/>}/>

          {/* <Route exact path="/gameover" render={() => <Leaderboard users={this.state.users}/>} /> */}

          <Route exact path="/characterlist" render={(routerProps) => <CharacterList routerProps={routerProps} cats={this.state.cats} assignCat={this.assignCat} playBattleSong={this.playBattleSong} themeSong={this.themeSong} submitWarrior={this.submitWarrior}/>} />

          <Route exact path="/battleground" render={(routerProps) => <Battleground {...routerProps} battleOver={this.state.battleOver} currentAICat={this.state.currentAICat} currentPlayerCat={this.state.currentPlayerCat} playerCatAttacc={this.playerCatAttacc} playerTurn={this.state.playerTurn} superAttacc={this.superAttacc} superAttaccUsed={this.state.superAttaccUsed} hissDefense={this.hissDefense} battleStarted={this.state.battleStarted} catHiss={this.catHiss} catClawMp3={this.catClawMp3} catBiteMp3={this.catBiteMp3} superAttaccSound={this.superAttaccSound} superAttaccThunder={this.superAttaccThunder} superAttaccOn={this.state.superAttaccOn}/>}/>

        </div>
      </Router >
    )
  }
}

export default App;


