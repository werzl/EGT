import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Modules() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Modules</h1>
                <p>
                    This is the Modules page, it will display all of the current modules the student is enrolled on, including grades and predictions.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Modules;