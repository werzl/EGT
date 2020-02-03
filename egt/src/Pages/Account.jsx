import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Account() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Account</h1>
                <p>
                    This is the Account page, the control center for user accounts.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Account;