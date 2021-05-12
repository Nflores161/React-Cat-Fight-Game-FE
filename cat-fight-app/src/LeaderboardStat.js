import React from 'react'

const LeaderboardStat = ({user}) => {

    return(
        <div>
            <h3>{user.name}</h3>
            <p>{Math.max(...user.scores)}</p>
        </div>
    )
}

export default LeaderboardStat