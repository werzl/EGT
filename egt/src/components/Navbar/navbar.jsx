import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap'
import logo from '../../essex_logo.gif'

function nav() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="https://reactjs.org" target="_blank">
                    <img
                        alt=""
                        src={logo}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default nav;