import React from 'react'
import BattleCard from './BattleCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import InstructionModal from './InstructionModal'
import CatBite from './Cat-Bite.png'

const Battleground = (props) => {

    const [modalShow, setModalShow] = useState(false)
    
        return(
            <Container>
                <h2 id="battlegroundHeader" className="headerText">BattleGround</h2>
            <div id="instructionBtn">
            <Button variant="outline-light" onClick={() => setModalShow(true)} >Rules of War</Button> 
            </div>

            <InstructionModal show={modalShow} onHide={() => setModalShow(false)}/>
                <Row sm={2}>
                    <Col>
                    </Col>
                    <Col className="battlecolumn">
                       <BattleCard id="computerCat" cat={props.currentAICat} playerTurn={props.playerTurn}/>
                    </Col>
                </Row>
                <Row sm={2}>
                    <Col className="battleColumn">
                        <BattleCard id="playerCat" cat={props.currentPlayerCat} playerTurn={props.playerTurn} battleStarted={props.battleStarted}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row sm={2}>
                    <Col className="buttonColumn">
                        <div id="attaccButtonDiv">
                            {props.playerTurn === true ? (<button className="attaccButtons attacc-btn" onClick={() => props.playerCatAttacc()}>CLAW</button>) : <p></p>}
                            {props.playerTurn === true ? (<button className="attaccButtons attacc-btn" onClick={() => props.playerCatAttacc()}>BITE</button>) : <p>PROTECC</p>}
                            {props.playerTurn === true ? (<button className="attaccButtons attacc-btn" onClick={() => props.hissDefense()}>HISS</button>) : <p></p>}
                        </div>
                        {(props.playerTurn === true && props.superAttaccUsed === false) ? (<button className="superAttacc-btn" id="superAttaccButton" onClick={() => props.superAttacc()}>SuperATTACC</button>) : null}
                    </Col>
                    <Col>
                    </Col>
                </Row>


                        {props.battleOver === true ? props.history.push("/gameover") : null}
            </Container>
        )
}

export default Battleground