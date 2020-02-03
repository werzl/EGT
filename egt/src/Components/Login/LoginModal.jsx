import React from 'react';

import { Button, Modal } from 'react-bootstrap';

function LoginModal({ show, closeModal }) {

    return (
        <>
            <Modal show={show} onHide={e => closeModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={e => closeModal()}>
                        Close
                     </Button>
                    <Button variant="primary" onClick={e => closeModal()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;