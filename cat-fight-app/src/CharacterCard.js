import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'

const CharacterCard = (props) => {
    return(
        <Col className="blackBackground catRow">
            <Card className="warriorCard">
                <Card.Img className="catCardImage" src={props.cat.image} alt={props.cat.name} />
                <Card.Body className="catCardBody blackBackground">
                <Card.Title className="blackBackground">{props.cat.name}</Card.Title>
                <Card.Text className="purrsonalityText blackBackground">{props.cat.purrsonality}</Card.Text>
                <Button variant="outline-light" onClick={() => {
                    props.assignCat(props.cat)
                    props.history.push("/battleground")
                    props.themeSong.pause()
                    props.playBattleSong()
                }}>Fight!</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CharacterCard