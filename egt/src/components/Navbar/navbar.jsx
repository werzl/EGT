import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap'
import logo from '../../logo.svg'

function nav() {

    return (
        <>

            <br />

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default nav;