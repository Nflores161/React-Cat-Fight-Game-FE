import React from 'react'
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
        <div>
            <h2>Leaderboard</h2>
            {sortedUsers.map(user  => <LeaderboardStat user={user} key={user.id}/>)}
        </div>
    )
}

export default Leaderboard