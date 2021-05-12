import React from 'react'
import { Button, Card } from 'react-bootstrap'


const CharacterCard = (props) => {
    return(
        <Card>
            <Card.Img src={props.cat.image} alt={props.cat.name} width=".5em"/>
            <Card.Body className="catCardBody">
            <Card.Title>{props.cat.name}</Card.Title>
            <Card.Text>Cat Warrior TBD</Card.Text>
            <Button variant="primary bottom" onClick={() => {
                props.assignCat(props.cat)
                props.history.push("/battleground")
            }}>Choose Your Warrior</Button>
            </Card.Body>
        </Card>
    )
}

export default CharacterCard