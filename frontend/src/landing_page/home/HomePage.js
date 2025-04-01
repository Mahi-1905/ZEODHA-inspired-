import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import Navbar from './Navbar'; // Corrected path

import Footer from '../Footer'; // Corrected path

import OpenAccount from '../OpenAccount';

function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default Homepage;
