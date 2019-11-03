import React from 'react';
import '../App.css';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';


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

function Home(){
    return(

            <div>
                
                <div className="title">
                    <h1>Maris-Angelique</h1>
                    <h3>Full Stack Web Developer</h3>
                </div>

                <Particles
                    params = {particleOpt}
                />
            </div>
    );
}

export default Home;