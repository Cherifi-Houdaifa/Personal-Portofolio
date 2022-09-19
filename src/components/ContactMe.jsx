import React from 'react';
import '../styles/ContactMe.css';
import waves3 from '../assets/waves-3.svg';
import github from '../assets/github-blue.svg';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';

export default function ContactMe() {
    return (
        <>
            <section className="contactme" id='contactme'>
                <div className="waves-3">
                    <img src={waves3} alt="" />
                </div>
                <h2>Contact Me</h2>
                <div className="links">
                    <a href="https://github.com/Cherifi-Houdaifa" target="_blank">
                        <img src={github} alt="" />
                    </a>
                    <a href="https://github.com/Cherifi-Houdaifa" target="_blank">
                        <img src={email} alt="" />
                    </a>
                    <a href="https://github.com/Cherifi-Houdaifa" target="_blank">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="https://github.com/Cherifi-Houdaifa" target="_blank">
                        <img src={twitter} alt="" />
                    </a>
                </div>
            </section>
        </>
    );
}
