import React from 'react'
import { Card } from 'react-bootstrap'

const BattleCard = (props) => {

    return(
        <Card className="blackBackground" id={(props.id === "computerCat") ? "computerCat" : (props.id === "playerCat") ? "playerCat" : null}>
            <Card.Img className={(props.id === "computerCat" && props.playerTurn === false && props.superAttaccOn === false) ? "damage" : (props.id === "playerCat" && props.playerTurn === true && props.battleStarted === true && props.superAttaccOn === false) ? "damage" : (props.id === "computerCat" && props.playerTurn === false && props.superAttaccOn === true ) ? "superAttaccSpin" : "battleCardImage blackBackground"} src={props.cat.image} alt={props.cat.name} width=".5em"/>
            <Card.Body className="catCardBody blackBackground">
                <Card.Title>{props.cat.name}</Card.Title>
                <div className="healthBarMaster blackBackground">
                    <div style={{'width': `${props.cat.power}%`}} className={props.cat.power  > 66 ? "healthBarHigh" : props.cat.power > 33 ? "healthBarMedium" : props.cat.power <= 33 ? "healthBarLow" : null}>{props.cat.power}%</div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BattleCard
