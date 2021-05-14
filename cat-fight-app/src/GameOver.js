import React from 'react'
import Leaderboard from './Leaderboard'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Victory from './Flawless-Victory.jpeg'

const GameOver = (props) => {

    return(
        <div className="blackBackground">
        <Container className="tableContainer blackBackground">
            <h1 className="gameOverHeader">GAME OVER</h1>
            {console.log(props.winner)}
            {(props.winner.name !== undefined && props.winner.name !=="Computer") ? <div><img src={Victory} alt="Flawless Victory"/></div> : (props.winner.name !==undefined && props.winner.name === "Computer") ? <h1 className="gameResultMsg">Looks like the AI won this round. It must be learning...</h1> : null}
            <Leaderboard users={props.users} loggedInUser={props.loggedInUser}/>
            <Button id="playAgainBtn" variant="outline-light" onClick ={() => {
                props.handlePlayAgain()
                props.history.push("/characterlist")
                props.battleSong.pause()
                props.playTheme()
            }}>Play Again</Button>    
            <Button id="goHomeBtn" variant="outline-light" onClick ={() => {
                props.handlePlayAgain()
                props.history.push("/home")
                props.battleSong.pause()
                props.playTheme()
            }}>Go To Home Page</Button>    
        </Container>
        </div>
    )

}

export default GameOver