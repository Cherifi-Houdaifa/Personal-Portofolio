import React from 'react';
import '../styles/Projects.css';
import itube from '../assets/itube.gif';
import memoryCard from '../assets/memory-card.gif';
import github from '../assets/github-white.svg';
import weatherApp from "../assets/weather-app.gif";
import preview from '../assets/preview.svg';

export default function Projects() {
    return (
        <section className="projects" id='projects'>
            <h2>My Projects</h2>
            <div className="project">
                <div className="text">
                    <h3>Itube</h3>
                    <p>
                        Itube is a Youtube Clone
                        <br />I made using Firebase &<br />
                        ReactJs.
                    </p>
                    <a target="_blank" href="https://github.com/Cherifi-Houdaifa/ITUBE" className="github"><img src={github} alt="" /></a>
                    <a target="_blank" href="https://itube-81b46.web.app/" className="preview"><img src={preview} alt=""  /></a>
                </div>
                <div className="image">
                    <img src={itube} alt="" />
                </div>
            </div>
            <div className="project reversed">
                <div className="text">
                    <h3>Weather App</h3>
                    <p>
                        It is an app that uses the<br />
                        OpenWeatherMap Api to<br />
                        provide weather data<br />
                        for a specefic city.
                    </p>
                    <a target="_blank" href="https://github.com/Cherifi-Houdaifa/Weather-App" className="github"><img src={github} alt="" /></a>
                    <a target="_blank" href="https://cherifi-houdaifa.github.io/Weather-App/" className="preview"><img src={preview} alt=""  /></a>
                </div>
                <div className="image">
                    <img src={weatherApp} alt="" />
                </div>
            </div>
            <div className="project">
                <div className="text">
                    <h3>Memory Card</h3>
                    <p>
                        Memory Card is a game
                        <br />
                        where you have to click
                        <br />
                        each card once.
                    </p>
                    <a target="_blank"  href="https://github.com/Cherifi-Houdaifa/Memory-Card-Game" className="github"><img src={github} alt="" /></a>
                    <a target="_blank" href="https://cherifi-houdaifa.github.io/Memory-Card-Game/" className="preview"><img src={preview} alt=""  /></a>
                    
                </div>
                <div className="image">
                    <img src={memoryCard} alt="" />
                </div>
            </div>
            <a href='https://github.com/Cherifi-Houdaifa?tab=repositories' target="_blank">See More</a>
            <div className='light1'></div>
            <div className='light2'></div>
            <div className='light3'></div>
        </section>
    );
}
