import React from 'react'

const LeaderboardStat = ({user, rank}) => {

    return(
        <tbody>
            <tr>
                <td>{rank}</td>
                <td>{user.name}</td>
                <td>{Math.max(...user.scores)}</td>
            </tr>
        </tbody>
    )
}

export default LeaderboardStat