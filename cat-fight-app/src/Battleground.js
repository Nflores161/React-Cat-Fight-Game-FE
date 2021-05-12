import React, {Component} from 'react'
import BattleCard from './BattleCard'

class Battleground extends Component {

    // superAttaccRendered = () => {
    //     if(this.props.playerTurn === true && this.props.superAttaccUsed === false) {
           
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

                {(this.props.playerTurn === true && this.props.superAttaccUsed === false) ? (<button onClick={() => this.props.superAttacc()}>SuperATTACC</button>) : null}
            </div>
        )
    }
}

export default Battleground