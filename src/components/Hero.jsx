import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
    return (
        <header className="hero">
            <div className="hero-text">
                <h2>
                    Hello <span className="red-text">There</span>!
                </h2>
                <h1>
                    I'm <span className="red-text">Houdaifa</span>
                    <br />A Bored Web Developer
                </h1>
                <button>Explore</button>
            </div>
            <div className="light1"></div>
            <div className="light2"></div>
        </header>
    );
}
