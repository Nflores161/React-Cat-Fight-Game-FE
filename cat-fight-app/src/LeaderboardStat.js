import React from 'react'

const LeaderboardStat = ({user, rank}) => {

    return(
        <tr>
            <td>{rank}</td>
            <td>{user.name}</td>
            <td>{Math.max(...user.scores)}</td>
        </tr>
    )
}

export default LeaderboardStat