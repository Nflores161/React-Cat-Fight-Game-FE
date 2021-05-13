import React from 'react'
import Modal from 'react-bootstrap/Modal'
// import {useState} from 'react'

const InstructionModal = (props) => {


    return(
        <Modal
            {...props}
            size="lg"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Battle Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Instructions: </p>
            </Modal.Body>
        </Modal>
    )

}

export default InstructionModal