import React from 'react'
import BattleCard from './BattleCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import InstructionModal from './InstructionModal'


const Battleground = (props) => {

    const [modalShow, setModalShow] = useState(false)
    
        return(
            <Container>
                <h2 className="headerText">BattleGround</h2>
            <div id="instructionBtn">
            <Button variant="outline-light" onClick={() => setModalShow(true)} >Instructions</Button> 
            </div>

            <InstructionModal show={modalShow} onHide={() => setModalShow(false)}/>

                <Row sm={2}>
                    <Col>
                    </Col>
                    <Col className="battlecolumn">
                       <BattleCard id="computerCat" cat={props.currentAICat}/>
                    </Col>
                </Row>
                <Row sm={2}>
                    <Col className="battleColumn">
                        <BattleCard id="playerCat" cat={props.currentPlayerCat}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row sm={2}>
                    <Col className="buttonColumn">
                    {props.playerTurn === true ? (<button className="attaccButtons" onClick={() => props.playerCatAttacc()}>ATTACC!!</button>) : <p>PROTECC</p>}
                    {(props.playerTurn === true && props.superAttaccUsed === false) ? (<button className="attaccButtons" onClick={() => props.superAttacc()}>SuperATTACC</button>) : null}
                    </Col>
                    <Col>
                    </Col>
                </Row>


                        {props.battleOver === true ? props.history.push("/gameover") : null}
            </Container>
        )
}

export default Battleground