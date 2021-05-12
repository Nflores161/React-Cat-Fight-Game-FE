import React from 'react'
import { Button, Card } from 'react-bootstrap'

const BattleCard = (props) => {

    return(
        <Card id={(props.id === "computerCat") ? "computerCat" : (props.id === "playerCat") ? "playerCat" : null}>
            <Card.Img className="battleCarImage" class src={props.cat.image} alt={props.cat.name} width=".5em"/>
            <Card.Body className="catCardBody">
                <Card.Title>{props.cat.name}</Card.Title>
                <Card.Text>Cat Warrior TBD</Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="healthBarMaster">
                    <div style={{'width': `${props.cat.power}%`}} className={props.cat.power  > 66 ? "healthBarHigh" : props.cat.power > 33 ? "healthBarMedium" : props.cat.power <= 33 ? "healthBarLow" : null}>{props.cat.power}%</div>
                </div>
            </Card.Footer>
        </Card>
    )
}

export default BattleCard