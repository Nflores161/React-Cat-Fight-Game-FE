import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import {useState} from 'react'

const LoginModal = (props) => {

    const [loginMode, setLoginMode] = useState("login")

    return(
        <Modal
            {...props}
            size="lg"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>{loginMode === "login" ? "Enter Username" : loginMode  === "register" ? "Join the Cat Fight Community" : null}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {loginMode === "login" ? <LoginForm onHide={props.onHide} handleLogin={props.handleLogin} /> : loginMode  === "register" ? <RegisterForm handleRegister={props.handleRegister}/> : null}
            </Modal.Body>
            <Modal.Footer>
                <p>{loginMode === "login" ? "New User? Register to Join" : loginMode === "register" ? "Log In to Get Started" : null}</p>
                <Button variant="outline-light" onClick={() => {
                    if(loginMode === "login") {
                        return setLoginMode("register")
                    } else if (loginMode === "register"){
                        return setLoginMode("login")
                    }else return null
                    }}>{loginMode === "login" ? "Register" : loginMode === "register" ? "Log In" : null}</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default LoginModal