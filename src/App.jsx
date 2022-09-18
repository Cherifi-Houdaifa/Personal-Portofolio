import React from 'react';
import "./styles/App.css";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

export default function App() {
    return <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <ContactMe />
        <Footer />
    </>;
}
