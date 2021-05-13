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
                <Modal.Title>Rules of War</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Begin your battle by choosing your first attacc.</p>
            <br />
            <p>CLAW and BITE are offensive moves that inflict damage on your opponent.</p>
            <br />
            <p>HISS is a defensive move that replenishes some of your power; no damage is done to opponent.</p>
            <br />
            <p>Unleash a SuperATTACC at your own risk. This move can only be used once per battle and, while it will deplete your opponent's power by 20 points, it will also inflict damage to your warrior.</p>
            </Modal.Body>
        </Modal>
    )

}

export default InstructionModal