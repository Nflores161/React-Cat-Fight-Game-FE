import React, {Component} from 'react'
import BattleCard from './BattleCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Battleground extends Component {

    render(){
        return(
            <Container>
            <div>
                <h2>BattleGround</h2>
                <Row>
                    <Col>
                    </Col>
                    <Col className="battlecolumn">
                       <BattleCard id="computerCat" cat={this.props.currentAICat}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="battleColumn">
                        <BattleCard id="playerCat" cat={this.props.currentPlayerCat}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col className="buttonColumn">
                    {this.props.playerTurn === true ? (<button className="attaccButtons" onClick={() => this.props.playerCatAttacc()}>ATTACC!!</button>) : <p>PROTECC</p>}
                    {(this.props.playerTurn === true && this.props.superAttaccUsed === false) ? (<button className="attaccButtons" onClick={() => this.props.superAttacc()}>SuperATTACC</button>) : null}
                    </Col>
                    <Col>
                    </Col>
                </Row>


                        {this.props.battleOver === true ? this.props.history.push("/gameover") : null}


            </div>
            </Container>
        )
    }
}

export default Battleground