import React from 'react'

const LeaderboardStat = ({user, rank, loggedInUser}) => {
    console.log(loggedInUser)
    return(
        <tbody>
            <tr>
                <td className={(loggedInUser.name !== undefined && loggedInUser.name === user.name) ? "userScoreHighlight" : null }>{rank}</td>
                <td className={(loggedInUser.name !== undefined && loggedInUser.name === user.name) ? "userScoreHighlight" : null }>{user.name}</td>
                <td className={(loggedInUser.name !== undefined && loggedInUser.name === user.name) ? "userScoreHighlight" : null }>{Math.max(...user.scores)}</td>
            </tr>
        </tbody>
    )
}

export default LeaderboardStat
