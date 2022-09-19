import React from 'react';
import '../styles/NavBar.css';

export default function NavBar() {
    const scroll = (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior: "smooth"})
    }
    return (
        <nav>
            <div className="links">
                <a href="#about" onClick={scroll}>About</a>
                <a href="#projects" onClick={scroll}>Projects</a>
                <a href="#contactme" onClick={scroll}>Contact Me</a>
            </div>
        </nav>
    );
}
