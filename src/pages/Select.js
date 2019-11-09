import React from 'react';
import '../Select.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';



const particleOpt = {
    "particles": {
        "number": {
            "value": 150
        },
        "size": {
            "value": 2
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}


function Select(){
    return(
        <div>

            <Container className="container">

                <Row>
                    <Link to='about' style={{ textDecoration: 'none'}}>
                        <Col className="selectAbout">
                            <h1>About</h1>
                        </Col>
                    </Link>

                    <Link to='contact' style={{ textDecoration: 'none'}}>
                        <Col className="selectContact">
                            <h1>Contact</h1>
                        </Col>
                    </Link>

                    <Link to='portfolio' style={{ textDecoration: 'none'}}>
                        <Col className="selectPortfolio">

                            <h1>Portfolio</h1>
                        </Col>
                    </Link>

                    <Link to='music' style={{ textDecoration: 'none'}}>
                        <Col className="selectMusic">
                            <h1>Music</h1>
                        </Col>
                    </Link>

                    <Link to='art' style={{ textDecoration: 'none'}}>
                        <Col className="selectArt">
                            <h1>Art</h1>
                        </Col>
                    </Link>

                </Row>

            </Container>

            <Particles
            params = {particleOpt}
            />

        </div>
    );
}

export default Select;