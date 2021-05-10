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
      currentAICat: {}
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

  render(){
    console.log(this.state.currentPlayerCat)
    console.log(this.state.currentAICat)
    return(
      <div>
        <Welcome />
        <Leaderboard />
        <CharacterList cats={this.state.cats} assignCat={this.assignCat}/>
        <Battleground cats={this.state.cats}/>
      </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

