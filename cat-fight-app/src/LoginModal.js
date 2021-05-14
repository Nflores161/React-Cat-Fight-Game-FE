import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import {useState} from 'react'

const LoginModal = (props) => {

    const [loginMode, setLoginMode] = useState("login")

    return(
        <Modal className="blackBackground"
            {...props}
            size="lg"
            centered>
            <Modal.Header className="blackBackground" closeButton>
                <Modal.Title>{loginMode === "login" ? "Let the Battle Begin" : loginMode  === "register" ? "Join Our Ranks" : null}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="blackBackground">
            {loginMode === "login" ? <LoginForm onHide={props.onHide} handleLogin={props.handleLogin} /> : loginMode  === "register" ? <RegisterForm handleRegister={props.handleRegister}/> : null}
            </Modal.Body>
            <Modal.Footer className="blackBackground">
                <p>{loginMode === "login" ? "New to Cat Fight?" : loginMode === "register" ? "Log In to Get Started" : null}</p>
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