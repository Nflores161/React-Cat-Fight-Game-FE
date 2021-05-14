import React from 'react'
import Container from 'react-bootstrap/Container'
// import barbedEntry from './barbedEntry.png'

const Gateway = (props) => {

    return(
        <div className="blackBackground fullPageHeight">
            <Container id="gatewayContainer" className="blackBackground">
                {console.log(props)}
                <button className="enter-btn" onClick={() => {
                    props.playTheme()
                    props.history.push("/home")
                    }}>This First Rule of Cat Fight...</button>
            </Container>
        </div>
    )

}

export default Gateway

// style={{ backgroundImage: `url(${barbedEntry})`}}