import React from 'react'
import Leaderboard from './Leaderboard'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useState} from 'react'
import LoginModal from './LoginModal'
import CatScratch from './Cat-Scratch.png'
import UserStats from './UserStats'

const Welcome = (props) => {

    const [modalShow, setModalShow] = useState(false)

    return(
        <div className="blackBackground">
        <Container id="loginContainer">
            {props.loggedInUser === '' ? <Button variant="outline-light" onClick={() => setModalShow(true)} id="loginButton" >Log In</Button> : 
            <Button variant="outline-light" onClick={() => props.handleLogout()} id="loginButton" >Log Out</Button>
            }
            
        </Container>

        <Container className="welcome">
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} handleLogin={props.handleLogin} handleRegister={props.handleRegister}/>
            <Row>
                <Col>   
                <h1 className="headerText">{props.loggedInUser.name !== undefined ? `Welcome to Cat Fight, ${props.loggedInUser.name}` : "Welcome to Cat Fight"}</h1>
                </Col> 
            </Row>

            <img id="catScratchPic" src={CatScratch} alt="Cat Scratch"/>
            {/* <Row>
                <Col>   

                </Col> 
            </Row> */}
            <Row>
                <Col>
                    {props.loggedInUser.name === undefined ? <p>Log In To Battle</p> : <Button variant="outline-light" onClick={() => {
                        if(props.loggedInUser !== '') {
                            props.history.push("/characterlist")
                        } else return alert("Please log in to continue.")
                        }}>Choose Your Warrior</Button>}
                </Col> 
            </Row>
            <Row>
                <Col>
            <Leaderboard users={props.users} loggedInUser={props.loggedInUser}/>
                </Col> 
            </Row>
            <Row>
                <Col>
                    <UserStats user={props.loggedInUser} />
                </Col>
            </Row>    
            
        </Container>
        </div>
    )
}

export default Welcome