import React from 'react'
import BattleCard from './BattleCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import InstructionModal from './InstructionModal'
import CatBite from './Cat-Bite.png'
import Desert from './Background-Images/Desert-Background.jpg'
import Dungeon from './Background-Images/Dungeon-Background.jpg'
import Alley from './Background-Images/Night-Street-Background.jpg'
import Park from './Background-Images/Park-Background.jpg'
import Space from './Background-Images/Space-Background.jpg'
import Castle from './Background-Images/Spooky-Castle-Background.jpg'
import Forest from './Background-Images/Spooky-Forest-Background.jpg'

const Battleground = (props) => {

    const [modalShow, setModalShow] = useState(false)
    const [background, setBackground] = useState('')

    const backgroundImage = {
        "Desert": Desert,
        "Dungeon": Dungeon,
        "Alley": Alley,
        "Park": Park,
        "Space": Space,
        "Castle": Castle,
        "Forest": Forest
    }
        return(
            <div id="battlegroundDiv" style={{backgroundImage: `url(${background})`, backgroundColor: "black", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
                <Container id="battlegroundContainer">
                    <h2 id="battlegroundHeader" className="headerText">BattleGround</h2>
                <div id="instructionBtn">
                <button className="attacc-btn" onClick={() => setModalShow(true)} >Rules of War</button> 
                </div>

                <InstructionModal show={modalShow} onHide={() => setModalShow(false)}/>

                <label htmlFor="backgrounds">Choose Your Battleground:</label>
                <select className="blackBackground" onChange={(event) => {
                    let location = event.target.value
                    let locationImage = backgroundImage[`${location}`]
                    setBackground(locationImage)
                }} name="backgrounds">
                    <option>Alley</option>
                    <option>Castle</option>
                    <option>Desert</option>
                    <option>Dungeon</option>
                    <option>Forest</option>
                    <option>Park</option>
                    <option>Space</option>                
                </select>

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
                                {props.playerTurn === true ? (<button className="attaccButtons attacc-btn" onClick={() => {
                                    props.hissDefense() 
                                    props.catHiss.play()}}>HISS</button>) : <p></p>}
                            </div>
                            {(props.playerTurn === true && props.superAttaccUsed === false) ? (<button className="superAttacc-btn" id="superAttaccButton" onClick={() => props.superAttacc()}>SuperATTACC</button>) : null}
                        </Col>
                        <Col>
                        </Col>
                    </Row>


                            {props.battleOver === true ? props.history.push("/gameover") : null}
                </Container>
            </div>
        )
}

export default Battleground

