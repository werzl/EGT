import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SiteNav from "./Components/SiteNav/SiteNav";
import Overview from "./Pages/Overview";
import Modules from "./Pages/Modules";
import Account from "./Pages/Account";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
    return (
        <>
            <Router>
                <Row>
                    <Col>
                        <SiteNav />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/">
                                <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <p>
                                        Edit <code>src/App.js</code> and save to reload.
                                    </p>
                                    <a
                                        className="App-link"
                                        href="https://reactjs.org"
                                        target="_blank"
                                        rel="noopener noreferrer">Learn React</a>
                                </header>
                            </Route>

                            <Route path="/Overview">
                                <Overview />
                            </Route>

                            <Route path="/Modules">
                                <Modules />
                            </Route>

                            <Route path="/Account">
                                <Account />
                            </Route>

                            <Route path="/About">
                                <About />
                            </Route>

                            <Route path="/Contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </Col>
                </Row>


            </Router>
        </>
    );
}

export default App;
