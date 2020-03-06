import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Overview() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Overview</h1>
                <p>
                    This is the Overview page, it will display an overview all of the current modules the student is enrolled on, including grades and predictions.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default Overview;