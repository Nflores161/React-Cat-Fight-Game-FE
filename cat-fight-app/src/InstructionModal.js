import React from 'react'
import Modal from 'react-bootstrap/Modal'
// import {useState} from 'react'

const InstructionModal = (props) => {


    return(
        <Modal
            {...props}
            size="lg"
            centered>
            <Modal.Header className="blackBackground" closeButton>
                <Modal.Title>Rules of War</Modal.Title>
            </Modal.Header>
            <Modal.Body className="blackBackground">
            <p>Begin your battle by choosing your first attacc.</p>
            <br />
            <p><span>CLAW</span> and <span>BITE</span> are offensive moves that inflict damage on your opponent.</p>
            <br />
            <p><span>HISS</span> is a defensive move that replenishes some of your power; no damage is done to opponent.</p>
            <br />
            <p>Unleash a <span>SuperATTACC</span> at your own risk. This move can only be used once per battle and, while it will deplete your opponent's power by 20 points, it will also inflict damage to your warrior.</p>
            </Modal.Body>
        </Modal>
    )

}

export default InstructionModal