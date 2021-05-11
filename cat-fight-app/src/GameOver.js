import React from 'react'

const GameOver = ({winner}) => {

    return(
        <div>
        {console.log(winner)}
        {winner.name !== undefined ? <h1>Congratulations, {winner.name}, you won!</h1> : null}
        </div>
    )

}

export default GameOver