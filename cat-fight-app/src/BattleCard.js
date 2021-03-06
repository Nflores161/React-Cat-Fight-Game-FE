import React from 'react'
import { Card } from 'react-bootstrap'

const BattleCard = (props) => {

    return(
        <Card id={(props.id === "computerCat") ? "computerCat" : (props.id === "playerCat") ? "playerCat" : null}>
            <Card.Img className={(props.id === "computerCat" && props.playerTurn === false && props.superAttaccOn === false && props.battleStarted === true) ? "damage" 
            : 
            (props.id === "playerCat" && props.playerTurn === true && props.battleStarted === true && props.superAttaccOn === false) ? "damage" 
            : 
            (props.id === "computerCat" && props.playerTurn === false && props.superAttaccOn === true && props.battleStarted === true) ? "superAttaccSpin"
            // : 
            // (props.id === "playerCat" && props.playerTurn === false && props.superAttaccOn === false) ? "damage" 
            : "battleCardImage"} 
            src={props.cat.image} alt={props.cat.name} width=".5em"/>

            <Card.Body className="catCardBody blackBackground">
                <Card.Title className="blackBackground">{props.cat.name}</Card.Title>
                <div className="healthBarMaster blackBackground">
                    <div style={{'width': `${props.cat.power}%`}} className={props.cat.power  > 66 ? "healthBarHigh" : props.cat.power > 33 ? "healthBarMedium" : props.cat.power <= 33 ? "healthBarLow" : null}>{props.cat.power}%</div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BattleCard
