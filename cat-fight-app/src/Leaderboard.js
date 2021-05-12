import React from 'react'
import { Container } from 'react-bootstrap'
import LeaderboardStat from './LeaderboardStat'

const Leaderboard = ({users}) => {

    let sortedUsers = users.sort((userA, userB) => {
        if (Math.max(...userA.scores) > Math.max(...userB.scores)) {
            return -1
        } else if (Math.max(...userA.scores) < Math.max(...userB.scores))  {
            return 1
        } else return 0
    })
    console.log()
    return(
        <Container className="tableContainer">
            <h2 className="leaderHeader">Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr> 
                </thead>
                {sortedUsers.map((user, index)  => <LeaderboardStat rank={index + 1} user={user} key={user.id}/>)}
            </table>
        </Container>
    )
}

export default Leaderboard