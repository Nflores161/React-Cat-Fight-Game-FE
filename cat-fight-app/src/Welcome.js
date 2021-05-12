import React from 'react'
import UserForm from './UserForm'
import Leaderboard from './Leaderboard'
import Button from 'react-bootstrap/Button'

const Welcome = (props) => {

    return(
        <div>
            <h1>Welcome to Cat Fight</h1>
            
            {props.loggedInUser !== '' ? <button onClick={() => props.handleLogout()}>Logout</button> : 
            (<UserForm handleLogin={props.handleLogin} handleRegister={props.handleRegister}/>
            )}

            <Button variant="primary" onClick={() => {
                if(props.loggedInUser !== '') {
                props.history.push("/characterlist")
                } else return alert("Please log in to continue.")
            }}>Fight!</Button>{' '}

            <Leaderboard users={props.users} />
        </div>
    )
}

export default Welcome