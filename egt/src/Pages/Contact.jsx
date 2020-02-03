import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function Contact() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Contact</h1>
                <p>
                    This is the Contact page, it will display contact details for the administrators of the site.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Contact;