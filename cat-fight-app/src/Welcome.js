import React from 'react'
import UserForm from './UserForm'
import Leaderboard from './Leaderboard'

const Welcome = (props) => {

    return(
        <div>
            <h1>Welcome to Cat Fight</h1>
            
            {props.loggedInUser !== '' ? <button onClick={() => props.handleLogout()}>Logout</button> : 
            (<UserForm handleLogin={props.handleLogin} handleRegister={props.handleRegister}/>
            )}

            <button onClick={() => {
                if(props.loggedInUser !== '') {
                props.history.push("/characterlist")
                } else return alert("Please log in to continue.")
            }}>Fight!</button>

            <Leaderboard users={props.users} />
        </div>
    )
}

export default Welcome