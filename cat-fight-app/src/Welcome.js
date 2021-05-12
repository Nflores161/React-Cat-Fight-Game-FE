import React from 'react'
import UserForm from './UserForm'
import Leaderboard from './Leaderboard'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Welcome = (props) => {

    return(
        <Container className="justify-content-center welcome">
            <Row>
                <Col>   
                <h1 className="headerText">Welcome to Cat Fight</h1>
                </Col> 
            </Row>
            <Row>
                <Col>   
            {props.loggedInUser !== '' ? <button onClick={() => props.handleLogout()}>Logout</button> : 
            (<UserForm handleLogin={props.handleLogin} handleRegister={props.handleRegister}/>
            )}
                </Col> 
            </Row>
            <Row>
                <Col>
            <Button variant="primary" onClick={() => {
                if(props.loggedInUser !== '') {
                props.history.push("/characterlist")
                } else return alert("Please log in to continue.")
            }}>Fight!</Button>{' '}
                </Col> 
            </Row>
            <Row>
                <Col>
            <Leaderboard users={props.users} />
                </Col> 
            </Row>    
            
        </Container>
    )
}

export default Welcome