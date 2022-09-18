import React from 'react';
import '../styles/Projects.css';
import itube from '../assets/itube.gif';
import memoryCard from '../assets/memory-card.gif';
import github from '../assets/github-white.svg';
import weatherApp from "../assets/weather-app.gif";
import preview from '../assets/preview.svg';

export default function Projects() {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project">
                <div className="text">
                    <h3>Itube</h3>
                    <p>
                        Itube is a Youtube Clone
                        <br />I made using Firebase &<br />
                        ReactJs.
                    </p>
                    <img src={github} alt="" className="github" />
                    <img src={preview} alt="" className="preview" />
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
                    <img src={github} alt="" className="github" />
                    <img src={preview} alt="" className="preview" />
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
                    <img src={github} alt="" className="github" />
                    <img src={preview} alt="" className="preview" />
                </div>
                <div className="image">
                    <img src={memoryCard} alt="" />
                </div>
            </div>
            <button>See More</button>
            <div className='light1'></div>
            <div className='light2'></div>
            <div className='light3'></div>
        </section>
    );
}
