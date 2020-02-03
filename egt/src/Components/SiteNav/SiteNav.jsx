import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//import logo from '../../essex_logo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import LoginModal from '../Login/LoginModal';

function SiteNav() {
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <>
            <LoginModal show={showLoginModal} closeModal={e => setShowLoginModal(false)}/>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    EGT
            </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/Overview">
                            <Nav.Link>Overview</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Modules">
                            <Nav.Link>Modules</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Account">
                            <Nav.Link>Account</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/About">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>

                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                    <Nav>
                        <Nav.Link onClick={e => setShowLoginModal(true)}><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default SiteNav;