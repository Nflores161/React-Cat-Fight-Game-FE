import React from 'react'
import Leaderboard from './Leaderboard'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const GameOver = (props) => {

    return(
        <Container className="tableContainer">
            <h1 className="gameOverHeader">GAME OVER</h1>
            {console.log(props.winner)}
            {(props.winner.name !== undefined && props.winner.name !=="Computer") ? <h1 className="gameResultMsg">Congratulations, {props.winner.name}, you won!</h1> : (props.winner.name !==undefined && props.winner.name === "Computer") ? <h1 className="gameResultMsg">Looks like the AI won this round. It must be learning...</h1> : null}
            <Leaderboard users={props.users} loggedInUser={props.loggedInUser}/>
            <Button id="playAgainBtn" variant="outline-light" onClick ={() => {
                props.handlePlayAgain()
                props.history.push("/characterlist")
            }}>Play Again</Button>    
        </Container>
    )

}

export default GameOver