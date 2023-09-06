import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection () {
    return (
        <div className='hero-container'>
            {<video src='/car-pics/blackCarVid.mp4' autoPlay loop muted />}
            <h1>Unleash Your Passion: Explore a World of Luxury and Performance</h1>
            <p>Ready to Embark on Your Ultimate Adventure? Discover a World of Possibilities with Cars!</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-cicle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
