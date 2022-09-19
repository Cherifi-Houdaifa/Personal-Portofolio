import React, { useRef } from 'react';
import '../styles/NavBar.css';
import view from '../assets/view-headline.svg';
import close from '../assets/close.svg';

export default function NavBar() {
    const navDiv = useRef();
    const scroll = (e) => {
        e.preventDefault();
        document
            .querySelector(e.target.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    };

    const clickHandler = (e) => {
        navDiv.current.classList.toggle('animate');
    };

    return (
        <>
            <div className="button">
                <img
                    src={view}
                    alt=""
                    aria-label="Button"
                    onClick={clickHandler}
                />
            </div>
            <nav ref={navDiv}>
                <div className="button">
                    <img
                        src={close}
                        alt=""
                        aria-label="Button"
                        onClick={clickHandler}
                    />
                </div>
                <div className="links">
                    <a
                        href="#about"
                        onClick={(e) => {
                            scroll(e);
                            navDiv.current.classList.toggle('animate');
                        }}
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => {
                            scroll(e);
                            navDiv.current.classList.toggle('animate');
                        }}
                    >
                        Projects
                    </a>
                    <a
                        href="#contactme"
                        onClick={(e) => {
                            scroll(e);
                            navDiv.current.classList.toggle('animate');
                        }}
                    >
                        Contact Me
                    </a>
                </div>
            </nav>
        </>
    );
}
