import React from 'react'

const GameOver = (props) => {

    return(
        <div>
            {console.log(props.winner)}
            {(props.winner.name !== undefined && props.winner.name !=="Computer") ? <h1>Congratulations, {props.winner.name}, you won!</h1> : (props.winner.name !==undefined && props.winner.name === "Computer") ? <h1>Looks like the AI won this round. It must be learning...</h1> : null}
            <button onClick ={() => {
                props.handlePlayAgain()
                props.history.push("/characterlist")
            }}>Play Again</button>    
        </div>
    )

}

export default GameOver