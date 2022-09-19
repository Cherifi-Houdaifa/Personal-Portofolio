import React from 'react';
import '../styles/About.css';
import waves1 from '../assets/waves-1.svg';
import waves2 from '../assets/waves-2.svg';
import image from '../assets/image.jpg';

export default function About() {
    return (
        <section className="about" id='about'>
            <div className="waves-1">
                <img src={waves1} alt="" />
            </div>
            <div className="about-text">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="text">
                    <h2>About Me</h2>
                    <p>
                        I'm a Full Stack Developer,
                        <br />
                        I started programming
                        <br />
                        because I was bored,
                        <br />I took
                        <a href="https://certificates.cs50.io/8e0f03d2-a911-4c56-97be-046ec41d3c49.pdf?size=letter" target="_blank">
                            CS50
                        </a>
                        in 2022, and I plan on
                        <br />
                        finishing
                        <a href="https://www.theodinproject.com/" target="_blank">
                            The Odin Project
                        </a>
                        <br />
                        Curriculum by the end of
                        <br />
                        2022.
                    </p>
                </div>
            </div>
            <div className="waves-2">
                <img src={waves2} alt="" />
            </div>
            <div className="light1"></div>
            <div className="light2"></div>
        </section>
    );
}
