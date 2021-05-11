import React, {Component} from 'react'
import BattleCard from './BattleCard'

class Battleground extends Component {

    // moveToLeaderboard = () => {
    //     if(this.props.battleOver === true) {
    //         this.props.history.push("/leaderboard")
    //     }
    // }

    render(){
    // console.log(this.props)
        return(
            <div>
                <h2>BattleGround</h2>
                <BattleCard cat={this.props.currentAICat}/>
                <BattleCard cat={this.props.currentPlayerCat}/>
                {this.props.playerTurn === true ? (<button onClick={() => this.props.playerCatAttacc()}>ATTACC!!</button>) : <p>PROTECC</p>}
                {this.props.battleOver === true ? this.props.history.push("/gameover") : null}
            </div>
        )
    }
}

export default Battleground