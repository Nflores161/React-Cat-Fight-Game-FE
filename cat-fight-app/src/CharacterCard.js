import React from 'react'
import { Button, Card } from 'react-bootstrap'


const CharacterCard = (props) => {
    return(
        <Card>
            <Card.Img className="catCardImage" src={props.cat.image} alt={props.cat.name} />
            <Card.Body className="catCardBody">
            <Card.Title>{props.cat.name}</Card.Title>
            <Card.Text>Cat Warrior TBD</Card.Text>
            <Button variant="outline-light" onClick={() => {
                props.assignCat(props.cat)
                props.history.push("/battleground")
            }}>Fight!</Button>
            </Card.Body>
        </Card>
    )
}

export default CharacterCard