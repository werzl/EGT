import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar'
import { Row, Col } from 'react-bootstrap'

function App() {
  return (
    <>
      <div className="App">
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>

        <Row>
          <Col>
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
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
