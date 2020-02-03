import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

function About() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>About</h1>
                <p>
                    This is the About page, it will display details about the creation and goals of EGT.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default About;