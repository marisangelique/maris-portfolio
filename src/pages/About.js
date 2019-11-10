import React from 'react';
import '../Select.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import Pdf from '../documents/Resume.pdf'



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


function About(){
    return(
        <div>

            <Container>

            <div className='aboutContainer'>
                <div className='about'>
                    <div className='aboutTitle'>
                        About
                    </div>
                    <p>My name is Maris-Angelique and I am a new full stack web developer. During my 21 years of life my love for living has grown deeper. I am on an ongoing mission to express myself through these arts and hope it can inspire others the way I have been inspired throughout my life.</p>
                    <p>I hope you enjoy my work. I am always looking for ways to expand and grow my knowledge in these fields, so please do not be afraid to contact me!</p>
                </div>
            
                <div className='navAbout'>
                    <a href= {Pdf} className='resume'>
                        <Button>Resume</Button>
                    </a>
                    
                    <Link to='Select'>
                        <Button>Back</Button>
                    </Link>
                </div>
            </div>

            </Container>

            <Particles
            params = {particleOpt}
            />

        </div>
    );
}

export default About;